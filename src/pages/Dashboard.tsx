import { useEffect, useState } from 'react'

import { Button } from '../component/Button'
import { ShareIcon } from '../icons/ShareIcon'
import { PluseIcon } from '../icons/PlusIcon'
import { Card } from '../component/Card'
import { TwitterIcon } from '../icons/TwitterIcon'
import { CreateContentModel } from '../component/CreateContentModel'
import { Sidebar } from '../component/Sidebar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BASE_URL } from '../config'

function Dashboard() {
const [modelOpen,setModelOpen]=useState(false);
const {contents,effects}=useContent();

useEffect(()=>{
  effects();
},[modelOpen])

async function shareContent(){
 const response= await axios.post(`${BASE_URL}/api/v1/brain/share`,{
    share:true
  },{
    headers:{
      "Authorization":localStorage.getItem("token")
    }
  })
    const shareUrl=`http://localhost:5173/${response.data.hash}`
  alert(shareUrl)
  

}


  return (
    <div>
      <Sidebar/>
      <div className='p-4 ml-72 min-h-screen bg-gray-300 border-2'>
      <CreateContentModel open={modelOpen} onClose={()=>{
        setModelOpen(false)
      }}/>

    <div className='flex justify-end gap-4 '>
   <Button onClick={()=>{setModelOpen(true)}} varients='primery' text='Add content' satrtIcon={<PluseIcon size='md'/>}/>
    <Button onClick={shareContent} varients='secondary' text='Share' satrtIcon={<ShareIcon size='md'/>}/>
    
    </div>
 
    <div className='flex gap-4 flex-wrap'>
      {contents.map(({title,link,type})=> <Card title={title} link={link} type={type}/>)}
     
            
    </div>
    

    </div>

    </div>
  )
}

export default Dashboard
