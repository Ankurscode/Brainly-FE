import { useRef } from "react";
import { Button } from "../component/button/Button";
import { Input } from "../component/input/Input";
import axios from "axios";
import { BASE_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function SignIn(){
    
     const usernameRef=useRef<HTMLInputElement>();
     const passwordRef=useRef<HTMLInputElement>();
     const navigate=useNavigate()

async function signin() {
    const username=usernameRef.current.value;
    const password=passwordRef.current.value;
    const response=await axios.post(BASE_URL+"/api/v1/signIn",{
        username,
        password
    })
    const jwt=response.data.token;
    localStorage.setItem("token",jwt)
    navigate("/dashboard")
}
    

    return <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
        
        <div className="bg-white rounded-xl  border-2 min-w-73 p-10">
                <Input reference={usernameRef} placeholder={"Enter unsername"} />
                <Input reference={passwordRef} placeholder={"Enter Password"}/>
                 <div className="flex justify-center pt-4">
                <Button onClick={signin} varients="primery" text="SignIn" fullWidth={true} loading={false} />
                </div>
        </div>
    
    </div>
}