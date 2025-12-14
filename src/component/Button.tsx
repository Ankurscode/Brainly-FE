import type { ReactElement } from "react"

interface ButtonPropo{
    varients:"primery"|"secondary",
    text:string,
    satrtIcon?:ReactElement,
    endIcon?:ReactElement,
    // size:"sm"|"md"|"lg"
    onClick:()=>void
}

const varientStyle={
    "primery":"bg-purple-600 text-white",
    "secondary":"bg-purple-200 text-purple-500"
}

// const sizeStyling={
//     "sm":"py-1 px-2 text-sm " ,
//     "md":"py-2 px-4 text-md ",
//     "lg":"py-4 px-6 text-xl "
// }

const defaultStyling=" px-7 py-2 rounded-md flex items-center font-light"



export const Button=(props:ButtonPropo)=>{
    return <button className={`${varientStyle[props.varients]} </div>:null} ${defaultStyling}  `}>{props.satrtIcon ?<div className="pr-2">{props.satrtIcon}</div>:null} {props.text}{props.endIcon}</button>
}