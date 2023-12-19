import React from 'react'

const DocumnetCard = (props) => {
  return (
    <div className='bg-primary' style={{padding: "5px 20px", margin: "10px 0", borderRadius: "8px"}}>{props.children}</div>
  )
}

export default DocumnetCard