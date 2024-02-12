import React from "react"
import { useEffect } from "react"
import { useState } from "react"

function translatePhrase (text) {

    console.log(text)
 //   let phraseTranslated = text
     const url = `https://api.mymemory.translated.net/get?q=${text}!&langpair=en|fr`

        return fetch(url)
        .then(response => response.json())
            .then(data => {
                console.log(data.responseData.translatedText)   
                const phrase = data.responseData.translatedText
                return phrase
            })
                .catch(error => {
                    console.log(error)
                })
}      

export default translatePhrase
