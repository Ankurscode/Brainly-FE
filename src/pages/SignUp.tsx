import { useRef } from "react";
import { Button } from "../component/Button";
import { Input } from "../component/Input";
import { TitleIcon } from "../icons/TitileIcon";
import axios from "axios";
import { BASE_URL } from "../config";
import { useNavigate } from "react-router-dom";



export function SignUp(){
     const usernameRef=useRef<HTMLInputElement>();
     const passwordRef=useRef<HTMLInputElement>();
     const navigate=useNavigate()

function singUp(){
    const username= usernameRef.current?.value;
    const password= passwordRef.current?.value;   
    
    axios.post(BASE_URL+"/api/v1/signUp",{
        
            username,
            password
        
    })
    alert("You have signed Up!")
    navigate("/signIn")
}

return( <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
        
        <div className="bg-white rounded-xl  border-2 min-w-73 p-10">
                <Input reference={usernameRef}  placeholder={"Enter unsername"} />
                <Input reference={passwordRef} placeholder={"Enter Password"}/>
                    <div className="flex justify-center pt-4">
                <Button  onClick={singUp} varients="primery" text="SignUp" fullWidth={true} loading={false} />
                </div>
        </div>
    
    </div>)
}