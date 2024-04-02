import React, { useState,useEffect } from 'react'
import { Button, FloatingLabel, Modal, Form, Row, Col } from 'react-bootstrap';
import { addCategoryAPI, deleteCategoryAPI, getAVideosAPI, getAllCategoryAPI, updateCategoryAPI } from '../../services/allAPI';
import VideoCard from './VideoCard';






function Category({dropVideoResponse}) {
  const [allCategories,setAllCategories]= useState([])
const [categoryName,setCategoryName] = useState("")


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async ()=>{
    if(categoryName){
      const result = await addCategoryAPI({categoryName,allvideo:[]})
      if(result.status>=200&&result.status<300){
        handleClose()
        setCategoryName("")
        getCategories()
      }else{
        alert(result.message)
      }
    }else{
      alert("please fill the category field")
    }
  }

  useEffect(()=>{
   getCategories ()
},[dropVideoResponse])

const getCategories=async()=>{
  const {data} = await getAllCategoryAPI()
  setAllCategories(data)
}
const removeCategory = async (id)=>{
  await deleteCategoryAPI(id)
  getCategories()
}
const dragOver =(e)=>{
  console.log('Video card dragged over the category')
  e.preventDefault()
}

const videoDrop =async (e,categoryId)=>{
  const videoId =e.dataTransfer.getData('VideoId')
  console.log('Video Id:'+videoId, 'dropped inside category:'+categoryId);
  const {data}= await getAVideosAPI(videoId)
  //console.log(data);
  const selectedCategory = allCategories.find(item=>item.id===categoryId)
  selectedCategory.allvideo.push(data)
  // console.log(selectedCategory);
 await updateCategoryAPI(categoryId,selectedCategory)
 getCategories()
}
const videoDragStarted = (e,videoId,categoryId)=> {
  let datashare = {videoId,categoryId}
  e.dataTransfer.setData('data',JSON.stringify(datashare))
}
  return (
    <>
     <div className='d-grid'>
      <button className='btn btn-info' onClick={handleShow}>Add Category</button>
    </div>
     { allCategories?.length>0?allCategories.map(category=>(
      <div className='border rounded p-3 mt-2' droppable='true' onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,category?.id)}>
      <div className='d-flex justify-content-between align-items-center'>
        <h6>{category?.categoryName}</h6>
        <button onClick={()=>removeCategory(category?.id)} className='btn'><i className='fa-solid fa-trash text-primary'></i></button>
      </div>
<Row>
  {
    category?.allvideo?.length>0?category?.allvideo.map(card=>(
      <Col sm={12} className='mb-3' draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)} >
        <VideoCard video={card} insideCategory={true}/>
      </Col>
    )
  ):null
  }
</Row>

    </div>  
    )):<p className='text-danger fw-bolder'>no categories yet!!</p>

     }

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form> 
         <FloatingLabel controlId="floatingName" label="Category Name">
        <Form.Control type="text" placeholder="Category Name" onChange={e=>setCategoryName(e.target.value)} />
      </FloatingLabel>
         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
   
  )
}

export default Category