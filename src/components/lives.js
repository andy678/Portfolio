import {useState} from 'react';
import { HeartIcon } from '@heroicons/react/solid';

export default function Lives(props) {

  const [heartDisplay, setHeartDisplay] = useState()

  for (var i = 0; i < props.currentLives; i++) {
    (<div className="w-16 h-16"><HeartIcon /></div>)
  }

    return (
      <>
        
      </>
    );
  }