import {useState} from 'react';
import ToolDisplay from '../tools/index'

export default function ClassTools() {
  
   const [words, setWords] = useState()
   const [students, setStudents] = useState()
   const [selectedTool, setSelectedTool] = useState(3)

   function handleChange(){

   }
  
      return (
        <div className="w-full h-full">
            <ToolDisplay selected={selectedTool} words={words} students={students}/>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <input type="text" value={words} onChange={setWords} />
            <input type="text" value={students} onChange={setStudents} />
            <div>TIC-TAC-TOE</div>
            <div>DICE GAME</div>
        </div>
      );
    }