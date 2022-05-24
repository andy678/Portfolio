import {useEffect, useState} from 'react';
import Lives from '../components/lives';
var randomWords = require('random-words');

export default function HangmanGame() {
   
    const [keyPressed, setKeyPressed] = useState()
    const [word, setWord] = useState(["P", "I", "Z", "Z", "A"])
    const [lives, setLives] = useState(6)

    //Save key press (uppercase) in the keyPressed useState
    document.addEventListener("keypress", (keyPress) => setKeyPressed(keyPress.key.toUpperCase()));

    //List the elements for each letter in the array
    const listItems = word.map((letter) =>
        <span className={`text-5xl ${letter}`} >___ </span>
    )

    function generateNewWord(){
        let randomWord = randomWords(1)
        let a = randomWord.split('')
        console.log(a)
    }

    useEffect(() => {        
        let key = document.getElementsByClassName(keyPressed)
        if(key.length > 0){
            for(var i = 0; i < key.length; i++){
                key[i].innerHTML= keyPressed
            }
        } else {
            if(lives > 1){
                setLives(() => lives - 1)
            } else {
                setLives(0)
                console.log("GAME OVER")
            }
        }
      }, [keyPressed]);

    return (
      <div className="w-full h-full">
         {listItems}
         <Lives lives={lives} score={0} />
         <button onClick={generateNewWord}>NEW WORD</button>
      </div>
    );
  }