interface NavFielsProps{
    text:String,
    sartIcon:React.ReactElement
}

export const NavFiels=(props:NavFielsProps)=>{
    return <div className="flex gap-3 items-center horver:border horver:bg-gray-100 h-[6vh] pl-7 ">
        <div className="pt-2">
            {props.sartIcon} 
        </div>
        <div className="text-xl font-semibold mt-2">
            {props.text}
        </div>
    </div>
}