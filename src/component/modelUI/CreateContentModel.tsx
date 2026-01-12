import axios from "axios";
import api from "../../api/api"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

export const Model=(props:{onClick:()=>void,setModel:(value:boolean)=>void,setReloadData:()=>void})=>{
    // const navigate=useNavigate();
    const modRef=useRef<HTMLDivElement>(null);
    const titleRef=useRef<HTMLInputElement>(null);
    const [tag,setTag]=useState("Productive")
    const linkRef=useRef<HTMLInputElement>(null);
    const [category,setCategory]=useState("Youtube");
    const mapTags=["Productive","Tech & Tools","Mindset","Learning & Skills","Workflow","Inspiration"] as const;

    const submitData=async()=>{
        
        if(
            linkRef.current?.value.trim()===""||
            titleRef.current?.value.trim()===""
        ){
            alert("Fill all the input fields")
            return
        }
        
        const data={
            link:linkRef.current?.value||"",
            constentType:category,
            title:titleRef.current?.value||"",
            tag
        }

        try{
        await  api.post("/api/v1/addcontent",data)
        props.setModel(false);

        props.setReloadData();
        alert("Content added")

        
        }catch(e:any){
        if(e.response?.status==401){
            alert("Seesion expried.Plese login in again")
            // navigate('/')
        }else{
            alert("Failed to add content")
        }
        console.log("Error while featching data")
    }
  }

    return (
        <div className="fixed inset-0 h-screen w-full flex justify-center items-center ">
            <div ref={modRef} onClick={props.onClick} className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 w-[30vw]  h-[60vh] border-2 bg-white  flex flex-col  items-center rounded-xl">
                <div className="flex">
                        <div className="text-2xl font-bold text-blue-600 relative border-b border-blue-600 mt-2">
                        Add Content
                         </div>
                       <div className="absolute right-2 top-1 text-xl font-semibold hover:bg-salte-100 flex justify-center hover:cursor-pointer w-5" onClick={props.onClick}>X</div>
                     </div>
                      <div className="mt-10 mb-3">
                         <input ref={titleRef} type="text" placeholder="Title" maxLength={20} className="bg-slate-200 w-[22vw] h-10 rounded-lg p-3 text-black placeholder:text-slate-500 placeholder:text-xl outline-none hover:bg-slate-300" />
                     </div>
                      <div>
                        <input ref={linkRef} type="text" required placeholder="link" className="bg-slate-200 w-[22vw] h-10 rounded-lg p-3 text-black placeholder:text-slate-500 placeholder:text-xl outline-none hover:bg-slate-300" />
                     </div>
                     <div className="mt-5 text-lg font-semibold">
                      Choose Tag:
                     </div>
                     <div className="flex flex-wrap justify-center items-center gap-2 mt-2">
                      {mapTags.map((t)=>tag===t?(<ModalTag2 key={t} tag={t} onClick={()=>setTag(t)}/> ):(<ModalTag1 key={t} tag={t} onClick={()=>setTag(t)}/>))}
                     </div>
                     <div className="mt-5 text-lg font-semibold">
                     Choose Category:
                     </div>
                        <div className="flex gap-2 mt-2">
                          <button 
                          onClick={()=>setCategory("Youtube") }
                          className={`px-2 py-1 text-xl ${category==="Youtube" ?"bg-blue-500":"bg-blue-300"} rounded-lg hover:bg-blue-400`}>Youtube</button>
                          <button 
                          onClick={()=>setCategory("Twitter")} 
                          className={`px-2 py-1 text-xl ${category==="Twitter"?"bg-blue-500":"bg-blue-300"} rounded-lg hover:bg-blue-400`}>Twitter</button>
                          <button onClick={()=>setCategory("Notion")} className={`px-2 py-1 text-xl ${category==="Notion"?"bg-blue-500":"bg-blue-300"} rounded-lg hover:bg-blue-400 `}>Notion</button>
                        </div>
                        <br />
                        <br />
                      <button onClick={submitData} className="bg-red-400 text-lg font-bold px-4 mt-5 py-1 rounded-lg hover:bg-red-500">Submit</button>  
            </div>    
        </div>
    )
};


interface CardProps{
  tag: "Productivity" | "Tech & Tools" | "Mindset" | "Learning & Skills" | "Workflows" | "Inspiration",
  onClick: ()=> void
}

const ModalTag1 = (props: CardProps)=>{
  return <button onClick={props.onClick} className="px-2 py-1 text-xl bg-blue-300 text-blue-600-500 rounded-lg hover:bg-blue-400">
    {props.tag}
  </button>
}

const ModalTag2 = (props: CardProps)=>{
  return <button onClick={props.onClick} className="px-2 py-1 text-xl bg-blue-500 text-blue-600-500 rounded-lg hover:bg-blue-400">
    {props.tag}
  </button>
}