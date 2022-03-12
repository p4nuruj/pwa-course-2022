import { useState } from 'react';
import '../css/Userlist.css';

function Userlist () {
  const [trayStatus, setTrayStatus] = useState('open');

  function onButtonClicked() {
        // ex01 filling logic here
    if (trayStatus === 'open'){
        setTrayStatus('close')
    }if(trayStatus === 'close')
    {
      setTrayStatus('open')
    }
  }

  return (
    <div className={"userlist "+trayStatus}>
      <div className="close-button" onClick={onButtonClicked}>X</div>
    </div>
  )
}

export default Userlist;