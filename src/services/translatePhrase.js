import React from "react"
import { useState } from "react"

export default function translatePhrase (text) {


    console.log(text)
    let phraseTranslated = text

    fetch('https://api.mymemory.translated.net/get?q='+ text +'!&langpair=en|fr')
    .then(response => response.json())
        .then(data => {
            console.log(data.responseData.translatedText)   
            phraseTranslated = data.responseData.translatedText
        })
            .catch(error => {
                console.log(error)
            })
    return phraseTranslated           
}