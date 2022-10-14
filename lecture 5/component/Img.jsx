import React, { useState } from 'react'

const Img = () => {
const currentTime = new Date().getSeconds()
const [time, setTime] = useState(currentTime);
// onclick function
function click(){
setNew("my name is iqra");
const newTime=  new Date().toLocaleTimeString();
setTime(newTime);
}
const name = "shiza"
  const [text,  setNew] = useState(name);

  return (
    
    <div>
        <h1>{text} - {time}</h1>
        <button className='btn btn-primary' onClick={click}>submit</button>
    </div>
  )
}

export default Img;