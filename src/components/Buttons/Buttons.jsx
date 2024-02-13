import React from "react"
import { useEffect } from "react"

function Buttons({textToPlay}) {


    const playText = () => {
        
    }

    const copyText = () => {
        console.log(textToPlay)
        navigator.clipboard.writeText(textToPlay)
        alert("Quote copied : " + textToPlay)
    }

    useEffect(() =>{
        console.log(textToPlay)

        const btnPlayText = document.querySelectorAll(".btn-play-text")
        btnPlayText.forEach(btnPlay => {
            btnPlay.addEventListener("click", playText)
        })

        const btnCopyText = document.querySelectorAll(".btn-copy-text")
        btnCopyText.forEach(btnCopy => {
            btnCopy.addEventListener("click", copyText)
        })
    },[])


    return (               
        <div className="btn">
            <button className="btn-style btn-play-text">
                <img src="images/sound_max_fill.svg"></img>
            </button> 
            <button className="btn-style btn-copy-text">
                <img src="images/Copy.svg"></img>
            </button>
        </div>
    )
}

export default Buttons