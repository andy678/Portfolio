import TicTacToe from './ticTacToe'
import RandomNameGenerator from './randomNameGen';
import NoToolSelectedScreen from './noToolSelectedScreen';
import HangmanGame from './hangmanGame'

export default function ToolDisplay(props) {
  
  function showTool(selected){
    switch(selected) {
      case 1:
          return <TicTacToe />
      case 2:
          return <RandomNameGenerator />
      case 3:
          return <HangmanGame />
      default:
         return <NoToolSelectedScreen />
    }
  }

    return (
      <>
        {showTool(props.selected)}
      </>
    );
  }