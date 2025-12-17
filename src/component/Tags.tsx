interface TagsProps{
    tagTypes:"Productivity" | "Tech & Tools" | "Mindset" | "Learning & Skills" | "Workflows" | "Inspiration"
}


export const Tags=(props:TagsProps)=>{
    return <div>
    #{props.tagTypes}
    </div>
}