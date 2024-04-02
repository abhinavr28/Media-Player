import React, { useEffect,useState } from 'react'
import VideoCard from '../Components/VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllCategoryAPI, getAllUploadVideosAPI, updateCategoryAPI} from '../../services/allAPI'


function View({uploadVideoResponse,setDropVideoResponse}) {

  const [deleteVideoResponse,setDeleteVideoResponse]=useState(false)
const [allvideo,setAllVideos]=useState([])


useEffect(()=>{
  getAllUploadedVideos()
  setDeleteVideoResponse(false)
},[uploadVideoResponse,deleteVideoResponse])

const getAllUploadedVideos = async ()=>{
  const result = await getAllUploadVideosAPI()
  if(result.status===200){
    console.log(result);
    setAllVideos(result.data)
  }else{
    console.log("API Failed");
    setAllVideos([])
  }
}
const dragOver = (e) =>{
  e.preventDefault()
}
const VideoDropped = async (e)=>{
  const{videoId,categoryId}=JSON.parse(e.dataTransfer.getData('data'))
  console.log(videoId,categoryId);
  const {data} = await getAllCategoryAPI()
  const selectedCategory = data.find(item=>item.id==categoryId)
  let result = selectedCategory.allvideo.filter(video=>video.id!==videoId)
  console.log(result);
  let {id,categoryName} = selectedCategory
  let newCategory= {id,categoryName,allvideo:result}
  console.log(newCategory);
  const res = await updateCategoryAPI(categoryId,newCategory) 
  setDropVideoResponse(res)
}
  return (
    <>
    <Row droppable='true' onDragOver={e=>dragOver(e)} onDrop={(e)=>VideoDropped(e)}>
      { allvideo?.length>0?allvideo.map(video=>(
        <Col sm={12} md={4} lg={3} xl={3} className='me-4 mt-2'>
        <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
        </Col>
      )):<p className='text-primary fw-bolder'>nothing to display</p> }
      

     

      
      </Row> 
    </>
  )
}

export default View