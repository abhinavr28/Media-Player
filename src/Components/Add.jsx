import { Button, FloatingLabel, Modal, Form } from 'react-bootstrap';
import React, { useState } from 'react'
import { uploadVideoAPI } from '../../services/allAPI';





function Add({setUploadVideoResponse}) {
  const [uploadVideo,setUploadVideo]=useState({
    id:"",caption:"",url:"",link:""
  })
  console.log(uploadVideo)


  const getYoutubeEmbedLink =(e)=>{
    const {value}= e.target;
    if(value.includes("v=")){
      let vID = value.split( "v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${vID}`)
      setUploadVideo({...uploadVideo, link:`https://www.youtube.com/embed/${vID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})
  }
}

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  

  
  


  const handleAdd= async ()=>{
    const { id,caption,url,link}= uploadVideo
    if( !id|| !caption || !url || !link ){
      alert("please fill the missing fields")
    }else{
      //store uploaded video to json server
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result.status);
      if(result.status>=200 && result.status<=300){
        //success
        handleClose()
       
        //empty fields
        setUploadVideo({id:"",caption: "", url:"",link:""})
 //after getting success
 setUploadVideoResponse(result.data)
    }else{
      alert(result.message)
    }
  }
  }
  return (
    <>
<div className='d-flex align-items-center'>
<h5>Upload-Video</h5>
<button className='btn' onClick={handleShow}><i className='fa-solid fa-arrow-up-from-bracket fa-bounce fa-2x mb-2'></i></button>
</div>

<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel controlId='floatingInputId' label='Video Id'  className='mb-3'>

          <Form.Control type="email" placeholder="Video Id" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="Video Name">
        <Form.Control type="text" placeholder="Video Name" onChange={(e)=>setUploadVideo({...uploadVideo,caption:e.target.value})}  />
      </FloatingLabel>
      <br />
      <FloatingLabel controlId='floatingInputId' label='Image URL' className='mb-3'>

          <Form.Control type="email" placeholder="Img URL" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})}  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingVideo" label="Video URL">
        <Form.Control type="text" placeholder="Video URL" onChange={getYoutubeEmbedLink}  />
      </FloatingLabel>

          </Form>
       
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add