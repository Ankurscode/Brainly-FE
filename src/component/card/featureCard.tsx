
import type { LucideIcon } from "lucide-react"
import type { ReactElement } from "react"

interface FeatureCardProp{
    icon:LucideIcon,
    title:string,
    description:string,
    variant?:'default'|'compact'
}

export const FeatureCard=({ icon: Icon, title, description, variant = 'default'}:FeatureCardProp)=>{
    return(
        <div className="group bg-white/60 backdrop-blur-sm border boder-gray-200/50 rounded-2xl p-8 horver:shadow-xl horver:shadow-blue-500/10 transition-all hover:-translate-y-1" >
            <div className="relative inline-block mb-6">
            <div className="absolute insert-0 bg-gradient-to-br  from-blue-500 to-purple-600 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-xl">
                <Icon className="w-6 h-6 text-white"/>
            </div>
            </div>
            <h3 className={`font-bold mb-3 text-gray-900 ${variant===`compact`?"text-xl":"text-2xl"}`}>
                {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    )
}