import React from 'react'
import DocumnetCard from './DocumnetCard'

const SidebarComponent = () => {
  return (
    <div
    style={{ width: "40vh", height: "95vh", padding: "10px" }}
  >
    <div style={{ height: "70vh" }}>
      <p className="font-nrml">Imported Documents</p>
      <DocumnetCard>document 1</DocumnetCard>
      <DocumnetCard>document 2</DocumnetCard>

    </div>
    {/* <div
      className="bg-primary"
      style={{
        height: "20vh",
        boxSizing: "border-box",
        padding: "10px 20px",
        borderRadius: "8px",
      }}
    >
      <p style={{padding: '5px 0'}}>Upload Document</p>
      <p style={{padding: '5px 0'}}>Delete all Document</p>
      <p style={{padding: '5px 0'}}>Clear history</p>
      <p style={{padding: '5px 0'}}>Export history</p>
    </div> */}
  </div>

  )
}

export default SidebarComponent