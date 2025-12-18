import {  useRef, useState } from "react"
import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"
import axios from "axios";
import { BASE_URL } from "../config";

enum ContentType{
    Youtube="Youtube",
    Twitter="Twitter"

}

export function CreateContentModel({open,onClose}){
    
    const titleRef=useRef<HTMLInputElement>();
    const linkRef=useRef<HTMLInputElement>();
    const [type,setType]=useState(ContentType.Youtube)
   async function addContent(){
        const title=titleRef.current?.value;
        const link=linkRef.current?.value;
        await axios.post(`${BASE_URL}/api/v1/content`,{
            title,
            link,
            type
        },{
        headers:{
            "Authorization":localStorage.getItem("token")
        }
    }

        )
        onClose()
    }
    return <div>
        { open && <div> 
        <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-70  flex justify-center ">
        </div>
        <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-70  flex justify-center ">
         <div className="flex flex-col justify-center ">
                <div className="bg-white p-4 rounded justify-center">
                    <div className="flex justify-end cursor-pointer" onClick={onClose}>
                    <CrossIcon/>
                    </div>
                    <div >
                        <div >
                            <div className="font-semibold ">
                                Tilte:
                            </div>
                            <Input reference={titleRef} placeholder={"Title"}/>
                        </div>
                        <div>
                            <div className="font-semibold">
                                Link:
                            </div>
                            <Input reference={linkRef} placeholder={"Link"}/>
                        </div>
                        
                        <h2>Type</h2>
                        <div className="flex gap-3 pb-4">
                        <Button text="Youtube" varients={type===ContentType.Youtube?"primery":"secondary"}onClick={()=>{
                            setType(ContentType.Youtube)
                        }}/>
                        <Button text="Twitter" varients={type===ContentType.Twitter?"primery":"secondary"}onClick={()=>{
                            setType(ContentType.Twitter)
                        }} />
                        </div>
                        
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={addContent} varients="primery"  text="Submit"/>
                    </div>
                   
                    
                </div>
                </div>
              
            </div>
            
        </div>

        }
    </div>

}

