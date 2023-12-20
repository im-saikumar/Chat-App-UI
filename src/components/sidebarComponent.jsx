import React, { useEffect, useState } from 'react'
import DocumnetCard from './DocumnetCard'

const SidebarComponent = () => {

  const[image, setImage] = useState(null)
  const [docData, setDocData] = useState([])

  useEffect(()=>{
  image === null &&
    fetch(`http://127.0.0.1:8000/genai/get_all_documents`, {
      method: "POST", // or 'PUT'
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setDocData(data.message))
      .catch((err) => console.log(err));
  },[image])

  console.log(image)

  const uploadDocument = async function () {

    const formData = new FormData();
    formData.append('file', image);

    try {
      const response = await fetch(`http://127.0.0.1:8000/genai/upload_document`, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log("Success:", result);
      alert(result.message)
      setImage(null)
    } 
    catch (error) {
      console.error("Error:", error);
    }
  }

  const deleteAllDocument = async function () {
    try {
      const response = await fetch(`http://127.0.0.1:8000/genai/delete_all_document`, {
        method: "POST",
      });
      const result = await response.json();
      console.log("Success:", result);
      alert(result.message)
      setImage(null)
    } 
    catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div
    style={{ width: "40vh", height: "95vh", padding: "10px" }}
  >

    <div style={{ height: "70vh" }}>
      <p className="font-nrml"> * Imported Documents</p>
     { docData.length > 0 ?
      docData?.map(data => <DocumnetCard>{data}</DocumnetCard>) :
      <p> Not available</p>}
      {/* <DocumnetCard>document 1</DocumnetCard>
      <DocumnetCard>document 2</DocumnetCard> */}

    </div>
    <div
      className="bg-primary"
      style={{
        height: "20vh",
        boxSizing: "border-box",
        padding: "10px 20px",
        borderRadius: "8px",
      }}
    >
      <input type='file'hidden id="text-for-upload" onChange={e => setImage(e.target.files[0])}/>
      <div className='flex'>
        <label htmlFor='text-for-upload'>      
          <p style={{padding: '5px 0'}}>
            Upload Document  
          </p>
        </label>
        {image !== null && 
            <>
              <button 
              className="bg-highlight font-white"
                style={{
                    padding: "5px 15px",
                    border: "none",
                    height: "4vh",
                    borderRadius: "5px",
                    marginLeft: '15px'
                  }}
                onClick={uploadDocument}>✔</button>
                <button
                onClick={()=> setImage(null)}
                style={{
                  padding: "5px 15px",
                  backgroundColor: 'red',
                  border: "none",
                  height: "4vh",
                  borderRadius: "5px",
                  marginLeft: '5px',
                }}
                >✖</button>
            </>
          }
      </div>
      <p style={{padding: '5px 0', cursor: "default"}} onClick={deleteAllDocument}>Delete all Document</p>
      {/* <p style={{padding: '5px 0'}}>Clear history</p>
          <p style={{padding: '5px 0'}}>Export history</p> */}
    </div>
  </div>

  )
}

export default SidebarComponent