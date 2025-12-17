import type { ReactElement } from "react"


export const SidebarItem=({title,icon}:{
    title:string,
    icon:ReactElement
})=>{
    return <div className="flex items-center text-gray-600 py-2 cursor-pointer hover:bg-gray-200 rounded pl-4 max-w-48 transition-all duration-150">
      <div className="pr-2">
        {icon}
     </div> 
     <div >
        {title}
        </div> 
    </div>
}