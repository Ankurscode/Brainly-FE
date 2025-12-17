import { TitleIcon } from "../icons/TitileIcon"
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SidebarItem } from "./SidebarItem"

export const Sidebar=()=>{
    return <div className="h-screen bg-white border-r w-72 border shadow fixed absolute left-0 top-0 pl-6">
        <div>
            
        </div>
        <div className=" flex items-center text-purple-600 pt-6 font-bold text-2xl pt-4">
            <TitleIcon/>
            Brainly
        </div>
        <div className="pt-8 pl-4">
            <SidebarItem title="Twitter" icon={<TwitterIcon/>}/>
            <SidebarItem title="Youtube" icon={<YoutubeIcon ></YoutubeIcon>}/>
        </div>
      
    </div>
}