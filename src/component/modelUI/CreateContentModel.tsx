import axios from "axios";
import api from "../../api/api"
import { CrossIcon } from "../../icons/CrossIcon";
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
            // navigate('/')
            alert("Failed to add content")
        }
        console.log("Error while featching data")
    }
  }

    return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
      <div ref={modRef} onClick={props.onClick} className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-in zoom-in-95 duration-200">
        <button
          onClick={props.onClick}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full p-1.5 transition-all" > 
          <CrossIcon />  
        </button>
        <div className="mb-8 flex justify-center items-center">
          <h2 className="font-bold text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Add Content</h2>
          {/* <p className="text-gray-500 text-sm mt-1">Save and organize your favorite content</p> */}
        </div>

        
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content Name
          </label>
          <div className="relative">

            <input
              type="text"
              ref={titleRef}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
              placeholder="e.g., Amazing Tutorial"
            />
          </div>
        </div>

        
        <div className="mb-7">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Link
          </label>
          <div className="relative">
            <input
              type="url"
              ref={linkRef}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
              placeholder="https://example.com"
            />
          </div>
        </div>

        
        <div className="mt-5 text-lg font-semibold">
          Choose Category:
        </div>
        <div className="flex gap-2 mt-2">
        <button onClick={()=> setCategory("Youtube")}
        className={`px-2 py-1 text-xl ${category==="Youtube" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md shadow-blue-500/30 " : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm "} rounded-lg hover:bg-blue-400`}>Youtube</button>
        <button onClick={()=> setCategory("Twitter")}
        className={`px-2 py-1 text-xl ${category==="Twitter" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md shadow-blue-500/30 " : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm "} rounded-lg hover:bg-blue-400`}>Twitter</button>
        <button onClick={()=> setCategory("Notion")}
        className={`px-2 py-1 text-xl ${category==="Notion" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md shadow-blue-500/30 " : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm "} rounded-lg hover:bg-blue-400`}>Notion</button>
        </div>

        
        <div className="mb-8">
          <div className="mt-5 text-lg font-semibold">
              Tags
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {mapTags.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`px-4 py-2 rounded-full text-sm transition-all font-medium ${
                  tag===t
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md shadow-blue-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        
        <button
         onClick={submitData}
          className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all font-semibold text-lg disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed disabled:shadow-none"
        >
          Submit
        </button>
      </div>
    </div>
  );
};




