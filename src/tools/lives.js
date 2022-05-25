import {useState} from 'react';
import { HeartIcon } from '@heroicons/react/solid';

export default function Lives(props) {

  const [display, setDisplay] = useState()


  const array = []

  for (var i = 0; i < props.currentLives; i++) {
   
  }

  console.log(display)

    return (
      <div>
          <div class="grid grid-cols-5 gap-4 p-64">
            <div><HeartIcon /></div>
            <div><HeartIcon /></div>
            <div><HeartIcon /></div>
            <div><HeartIcon /></div>
            <div><HeartIcon /></div>
          </div>
      </div>
    );
  }