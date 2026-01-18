import  GoogleSignInButton  from "./googleSignIn"
export const RegisterPage=()=>{
    return <div className="flex">
        <div className="h-screen w-[50vw] bg-slate-300  flex flex-col justify-center items-center  ">
            <div>
                <div className="text-3xl font-semibold">
                <h1>Welcome to  <span className="text-3xl text-blue-400">Second Brain</span></h1>
                </div>
                <div className="text-2xl font-semibold">
                    Create your account
                </div>
                <form className="mt-7 flex flex-col gap-2">
                    <input type="text" placeholder="Username" required name="username" className="outline-none h-12 w-[22vw] rounded-lg p-2 hover:bg-slate-100"/>
                    <input type="email" placeholder="Email" required name="email" className="outline-none h-12 w-[22vw] rounded-lg p-2 hover:bg-slate-100"/>
                    <input type="password" placeholder="Password" required name="password" className="outline-none h-12 w-[22vw] rounded-lg p-2 hover:bg-slate-100"/>
                    <GoogleSignInButton></GoogleSignInButton>
                </form>
               
            </div>
        </div>
    </div>
    
}