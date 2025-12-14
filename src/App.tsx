import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './component/Button'
import { ShareIcon } from './icons/ShareIcon'
import { PluseIcon } from './icons/PlusIcon'

function App() {
 

  return (
    <>
     
      <Button varients='primery' satrtIcon={<PluseIcon size='lg'/>} text='Add contenct'></Button>
      <Button varients='secondary' satrtIcon={<ShareIcon size='lg'/>}  text='Share brain'></Button>  
          
    </>
  )
}

export default App
