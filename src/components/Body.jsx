import React from 'react'

function Body() {


setInterval(() => {
    console.log("Hello")
},1000)


  return (
    <div style={{
      width: "100%",
      height: "50vh",
      backgroundColor:"red"  
    }}>


        <h1>Body</h1>



    </div>
  )
}

export default Body