import React, { useState } from 'react'

const Media = () => {
  // btnc usestate
    const [btnc, setBtnc] = useState("Dark Mode");
    // product usestate
const [product, setProduct] = useState({color : 'black'});
const change = () => {
    setProduct({
    color : 'white',
    backgroundColor : 'black',
    border : '1px solid grey'
})
 

}
setBtnc('Light Mood')



  return (
    <div className='con' style={{border : '2px solid gray'}}  >
        <div className='product'style={product} >
<img style={{width : '300px'}} src='./image/a8.jpg' alt=""  />
<h1 style={product}>Frok</h1>
<h3 style={product}>price : $50.00</h3>
<button className='btn btn-primary' onClick={change} >{btnc}</button>

          </div>
    </div>
  )
}

export default Media;