

import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverurl"

//upload new video

export const uploadVideoAPI = async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allvideo`,video)
}

//get alluploadedvideos

export const getAllUploadVideosAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/allvideo`,"")
}

//GET A VIDEO


export const getAVideosAPI = async (id) =>{
    return await commonAPI("GET",`${SERVER_URL}/allvideo/${id}`,"");
}

// add video to history

export const addVideoHistoryAPI = async (video) =>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video);
} 

//get history

export const getHistoryAPI = async() =>{
    return await commonAPI("GET", `${SERVER_URL}/history`, "")
}

//delete history

export const deleteHistoryAPI = async (id) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{});
}

//delete video

export const deleteVideoAPI = async (id) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/allvideo/${id}`,{});
}

//add to category

export const addCategoryAPI = async (category)=>{
    return  await commonAPI("POST",`${SERVER_URL}/category`,category)
}

//get category

export const getAllCategoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/category`,"")
}

//delete category

export const deleteCategoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/category/${id}`,{})
}

//update video to category

export const updateCategoryAPI =async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/category/${id}`,categoryDetails)
}