// import React from 'react'

// const HelloWorld = () => {
//   // const heading = React.createElement('h1', 'null', 'Hello World!!... This is a new component.')
//   return (
//     <div>
//       <h1>Hello World!!... This is a new component.</h1>  
//     </div>
//   )
// }

// export default HelloWorld

// import React from 'react'

// const HelloWorld = () => {
//   const name = 'Al Ameer'
//   const age = 23;
//   const link = 'https://twitter.com/alAmeer170'
//   return (
//     <div>
//       <h2>My name is {name}</h2>
//       <h2>I am {age} years old.</h2>
//       <h3><a href={link}>Twitter</a></h3>
//     </div>
//   )
// }

// export default HelloWorld

import React from 'react'

const HelloWorld = () => {

  
  return (
    <div style={headerStyle}>
      <h1>Hello guys, welcome to my status</h1>
    </div>
  )
}

const headerStyle = {
  color: '#f6f3f3',
  backgroundColor: 'brown'
}


export default HelloWorld