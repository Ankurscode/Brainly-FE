import { Button } from "../component/Button";
import { Input } from "../component/Input";
import { TitleIcon } from "../icons/TitileIcon";

export function SignUp(){
    return <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
        
        <div className="bg-white rounded-xl  border-2 min-w-73 p-10">
                <Input placeholder={"Enter unsername"} />
                <Input placeholder={"Enter Password"}/>
                    <div className="flex justify-center pt-4">
                <Button varients="primery" text="SignUp" fullWidth={true} />
                </div>
        </div>
    
    </div>
}