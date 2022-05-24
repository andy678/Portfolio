import {useEffect, useState} from 'react';
import Lives from '../../components/lives'
import Button from '../../components/button';
let randomWords = require('random-words');


export default function HangmanGame() {
   
    const [keyPressed, setKeyPressed] = useState()
    const [word, setWord] = useState()
    const [lives, setLives] = useState(6)

    //Save key press (uppercase) in the keyPressed useState
    useEffect(() => {
        document.addEventListener("keypress", (keyPress) => setKeyPressed(keyPress.key.toUpperCase()));
      }, []);

    //List the elements for each letter in the array
    const generateRandomWord = () => {
        let randomWord = randomWords(1)
        let upperCase = randomWord.toString().toUpperCase()
        let splitWord = upperCase.split('')
        setWord(splitWord)
      }

    useEffect(() => {        
        let className = document.getElementsByClassName(keyPressed)
        console.log(className, keyPressed)
        if(className.length > 0){
            for(var i = 0; i < className.length; i++){
                className[i].innerHTML  = keyPressed
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
         {word ? word.map((letter) => 
         <span className={`text-5xl ${letter}`} >___ </span>) 
         : "PLEASE CLICK THE BUTTONS BELOW TO START" }
         <Lives currentLives={lives} totalLives={5} score={0} />
         <div onClick={generateRandomWord}>GENERATE</div>
      </div>
    );
  }