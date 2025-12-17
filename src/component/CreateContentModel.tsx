import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"
export function CreateContentModel({open,onClose}){
    return <div>
        { open && <div className="w-screen h-screen bg-slate-800 fixed top-0 left-0 opacity-70  flex justify-center ">
            <div className="flex flex-col justify-center ">
                <span className="bg-white p-4 rounded justify-center opacity-100">
                    <div className="flex justify-end cursor-pointer" onClick={onClose}>
                    <CrossIcon/>
                    </div>
                    <div >
                        <div >
                            <div className="font-semibold">
                                Tilte:
                            </div>
                            <Input  placeholder={"Title"}/>
                        </div>
                        <div>
                            <div className="font-semibold">
                                Link:
                            </div>
                            <Input  placeholder={"Link"}/>
                        </div>
                        
                        
                        
                    </div>
                    <div className="flex justify-center">
                        <Button varients="primery" text="Submit"/>
                    </div>
                   
                    
                </span>
              
            </div>

        </div>

        }
    </div>

}

