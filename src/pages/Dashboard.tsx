import { useState } from 'react'

import { Button } from '../component/Button'
import { ShareIcon } from '../icons/ShareIcon'
import { PluseIcon } from '../icons/PlusIcon'
import { Card } from '../component/Card'
import { TwitterIcon } from '../icons/TwitterIcon'
import { CreateContentModel } from '../component/CreateContentModel'
import { Sidebar } from '../component/Sidebar'

function Dashboard() {
const [modelOpen,setModelOpen]=useState(false);

  return (
    <div>
      <Sidebar/>
      <div className='p-4 ml-72 min-h-screen bg-gray-300 border-2'>
      <CreateContentModel open={modelOpen} onClose={()=>{
        setModelOpen(false)
      }}/>

    <div className='flex justify-end gap-4 '>
   <Button onClick={()=>{setModelOpen(true)}} varients='primery' text='Add content' satrtIcon={<PluseIcon size='md'/>}/>
    <Button  varients='secondary' text='Share' satrtIcon={<ShareIcon size='md'/>}/>
    
    </div>
 
    <div className='flex gap-4'>
      <Card title='YouterBanney' link='https://www.youtube.com/watch?v=aKPaxQJs-30' type='Youtube'/>
             <Card title='TwitterBanayney' link='https://x.com/_isha_here/status/2000511400633057357?s=20' type='Twitter'/>
    </div>
    

    </div>

    </div>
  )
}

export default Dashboard
