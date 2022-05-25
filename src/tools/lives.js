import {useState} from 'react';
import { HeartIcon } from '@heroicons/react/solid';

export default function Lives(props) {

  const [display, setDisplay] = useState()


  const array = []

  for (var i = 0; i < props.currentLives; i++) {
   
  }

  console.log(display)

    return (
      <div className="w-16 h-16">
        <HeartIcon /><HeartIcon /><HeartIcon /><HeartIcon /><HeartIcon />
      </div>
    );
  }