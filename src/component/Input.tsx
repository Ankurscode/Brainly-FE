 export const Input=({reference ,placeholder}:{
    reference :any
    placeholder:string
 })=>{
    return <div>
        <input ref={reference} placeholder={placeholder} type={"text"} className="px-4 py-2 boader  rounded m-2" />
    </div>
}