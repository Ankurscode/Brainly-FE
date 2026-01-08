import { useRef, useState } from "react"

export const Model=(props:{onClick:()=>void})=>{
    const modRef=useRef<HTMLDivElement>(null);
    const titleRef=useRef<HTMLInputElement>(null);
    const [tag,setTag]=useState("Productive")
    const linkRef=useRef<HTMLInputElement>(null);
    const mapTags=["Productive","Tech & Tools","Mindset","Learning & Skills","Workflow","Inspiration"] as const;
    return (
        <div className="fixed inset-0 h-screen w-full flex justify-center items-center ">
            <div ref={modRef} onClick={props.onClick} className="absolute inser-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 w-[30vw] h-[60vh] border-2 bg-white">
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
                    <div className="flex flex-wrap justify-center items-center gap-2 mt-2" >
                       {/* {mapTags.map((t)=>tag===t?(
                        
                       )) */}

                       {/* } */}
                    </div>
                
            </div>
                
                

            
           
        </div>
    )
}