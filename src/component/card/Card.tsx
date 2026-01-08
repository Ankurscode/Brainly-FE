import axios from "axios"
import { DeleteIcon } from "../../icons/DeleteIcon"
import { ShareIcon } from "../../icons/ShareIcon"

import {format} from "date-fns"
import   { useEffect, useState }  from "react"
import { YoutubeIcon } from "../../icons/YoutubeIcon"
import { NotionIcon } from "../../icons/NotionIcon"
import Tags from "./Tags"



interface CardProps{
    icon?:"Youtube"|"Twitter"|"Notion",
    tag:"Productivity" | "Tech & Tools" | "Mindset" | "Learning & Skills" | "Workflows" | "Inspiration",
    title:string,
    link:string,
    startIcon?:React.ReactElement,
    reload?:()=>void,
    onClick?:()=>void, 
}



 

export const Card=(props:CardProps)=>{

    const [thumnail,setThumnail]=useState<string|null>(null)
    const date=format(new Date(),'dd,MM,yyyy')
   let contentPreview:React.JSX.Element= <p className="text-gray-500">No content available</p>


   const getYoutubeId=(url:string)=>{
    try{
        if(url.includes("youtu.be/")){
            return url.split("youtu.be/")[1].split("?")[0]
        }
        if(url.includes("v=")){
            return new URL(url).searchParams.get("v");
        }
        return null
    }catch(e){
        return null
    }
   }

   if(props.icon==="Youtube"){
    contentPreview=(
        <div className="flex justify-center pt-6 items-center">
            {thumnail?(
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <img src={thumnail} alt={props.title} className="w-[90%] rounded-lg ml-3"/>
                    <div className="w-[90%] rounded-lg ml-3">
                        <YoutubeIcon/>
                    </div>
                </a>
            ):(
                <p className="text-gray-500">No thumnail available</p>
            )}
        </div>
    ) 
}else if(props.icon==="Twitter"){
    
    contentPreview=(
        <div className="flex justify-center pt-6 item-center">
            <blockquote className="twitter-tweet"> <a href={props.link.replace("x.com","twitter.com")}></a></blockquote>
        </div>
    )
   }else if(props.icon==='Notion'){
    contentPreview=(
        <div className="flex justify-center pt-6 item-center">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <div className="w-[90%] rounded-lg ml-3">
                    <NotionIcon/>
                </div>
            </a>
        </div>
    );

   }

   useEffect(()=>{
    const videoId=getYoutubeId(props.link);
    if(videoId){
        setThumnail(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`)
    }else{
        setThumnail(null);
    }
   },[props.link])


   
    async function deleteHandeler(){
    try{
         const token= localStorage.getItem("token")
    if(!token){
        alert("Please login first")
        return
    }
    const res=await axios.delete(`http://localhost:3000/api/v1/delete/${props.title}`,{
        headers:{
            Authorization:token
        },
        withCredentials:true
    })

    if(res){
        alert("Item deleted")
        props.reload && props.reload()
        return
    }
    }
    catch(e){
        console.log("Error: ",e)
        return
    }
}

    return (
        <div className="border-2 w-[19vw] h-[50vh] bg-white rounded-md relative shadow-md">
            <div className="flex justify-between pt-4 pl-2 pr-4 items-center pb-2 border-b-2 border-slate-300 shadow-md  rounded-2xl">
                <div className="flex gap-2">
                    <span className="">{props.startIcon}</span>
                    <span className="font-semibold text-2xl">{props.title}</span>
                </div>
                <div className="flex items-center justify-between ">
                    <div className="cursor-pointer  "><ShareIcon size="md"/></div>
                    <div className="cursor-pointer" onClick={deleteHandeler}><DeleteIcon/></div>
                </div>
            </div>
            <div>
                {contentPreview}
            </div>
            <div className="flex gap-3 pt-4 pl-5">
            <Tags tagTypes={props.tag}/>
            </div>
            <div className="text-sm text-gray-500 pl-5 pt-3 pb-2 absolute fixed bottom-2">
                Created On:<span className="font-medium">({date})</span>
            </div>
        </div>
    )
}