import { AppLogo } from "../../icons/AppIcon";
import { NavFiels } from "./NavFiels";
import { AllIcon } from "../../icons/All";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { NotionIcon2 } from "../../icons/Notions2";
import { useState } from "react";


interface SideNavbarProps{
    data:any,
    setData:any,
    setYTData:any,
    setTwitterData:any,
    setNotionData:any,
    setDataShow:any
}

const menuItems=[
    {id:"all", label:"All" ,icon:<AllIcon/>},
    {id:"youtube",label:"Youtube",icon:<YoutubeIcon/>},
    {id:"twitter",label:"Twitter",icon:<TwitterIcon/>},
    {id:"notion",label:"Notion",icon:<NotionIcon2/>}
]


export const SideNav=(props:SideNavbarProps)=>{
    const [activeItem,setActiveItem]=useState('all')
    function all(){
        props.setDataShow("All")
        setActiveItem("all")
    }
    function yt(){
        const ytData=props.data.filter((item:any)=>item.contentType==="Youtube");
        props.setYTData(ytData)
        props.setDataShow("Youtube")
        setActiveItem("youtube")
    }
    function tw(){
        const twitterData=props.data.filter((item:any)=>item.contentType==="Twitter")
        props.setTwitterData(twitterData)
        props.setDataShow("Twitter")
        setActiveItem("twitter")
    }
    function no(){
        const notionData=props.data.filter((item:any)=>item.contentType==="Notion")
        props.setNotionData(notionData)
        props.setDataShow("Notion")
        setActiveItem("notion")
    }
    return <>
    <div className="w-64 h-screen bg-gradient-to-b from-slate-50 to-white border-r border-gray-200/80 shadow-sm flex flex-col">
       <div className="p-6 border-b border-gray-200/80">
        <div className="flex items-center justify-center">
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-2xl shadow-lg">
                <AppLogo/>
                </div>
            </div>
        </div>
       </div>
        <div>

            <div onClick={all}><NavFiels text={"All"} sartIcon={<AllIcon/>}/></div>
            <div onClick={yt}><NavFiels text={"Youtube"} sartIcon={<YoutubeIcon/>}/></div>
            <div onClick={tw}><NavFiels text={"Twitter"} sartIcon={<TwitterIcon/>}/></div>
            <div onClick={no}><NavFiels text={"Notion"} sartIcon={<NotionIcon2/>}/></div>
        </div>

    </div>
    </>
}