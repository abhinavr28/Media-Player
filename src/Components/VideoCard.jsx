import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { addVideoHistoryAPI, deleteVideoAPI } from '../../services/allAPI';



function VideoCard({video,setDeleteVideoResponse,insideCategory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
  const{caption,link}=video

  let today = new  Date()
  let timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format (today)
  let videoHistory ={caption,link,timeStamp}

  // make api call
await addVideoHistoryAPI(videoHistory)

  }

  const removeVideo = async (id)=>{
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }

  const dragStarted=(e,id)=>{
    console.log("drag Started...Video Id:"+id)
    e.dataTransfer.setData('VideoId',id)
  }
  return (
    <>
        <Card draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img variant="top" height={'200px'} src={video?.url} onClick={handleShow} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center text-black'>
          <h5>{video?.caption}</h5>
          {insideCategory?null: <button onClick={()=>removeVideo(video?.id)} className='btn'><i className='fa-solid fa-trash text-secondary'></i></button>}
       
        </Card.Title>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="480" src={`${video?.link}?autoplay=1`} title="The Weeknd - Blinding Lights (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
        </Modal.Body>
        </Modal>

    </>
  )
}

export default VideoCard