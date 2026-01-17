import {Brain,Sparkles,ArrowRight} from "lucide-react"
import { Button } from "../component/button/Button"
export const LangPage=()=>{
    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 ">
            <nav className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-lg opacity-30"></div>
                    <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl">
                    <Brain className="w-6 h-6 text-white"/>
                    </div>
                    </div>
                    <span>
                        Second Brain
                    </span>
                </div>
                <Button varients="primery" text="Get Sarted" className="rounded-xl text-white hover:shadow-xl hover:shadow-blue-500/30 transition-all font-semibold "></Button>
            </div>
            </nav>

            <section className="container mx-auto px-6 pt-20 pg-32">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-blue-200/50 rounded-full mb-8 shadow-sm">
                <Sparkles className="w-4 h-4 text-blue-600"/>
                <span className="text-sm font-medium text-gray-700">
                    Your Personal knowledge Manager
                </span>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"> 
                    Build Your
                    </span>
                    <br />
                    <span className="text-gray-900">Second Brain</span>
                </h1> 
                
                <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                 Capture, organize, and retrieve everything you learn. Transform scattered information 
                      into a powerful personal knowledge base.
                </p>   
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Button varients="primery" text="Start Building Now" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all font-semibold text-lg flex items-center gap-2" endIcon={<ArrowRight className="w-5 h-5 group-horver:translate-x-1 transition-transform"/>}></Button>
                    <Button varients="primery" text="Lern More" className="px-8 py-4 bg-white text-gray-700 rounded-xl hover:shadow-lg transition-all font-semibold text-lg border border-gray-200"/>
                </div>
            </div>
            <div className="relative">
                <div className="absolute inset-0 bg-greadient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-3 gap-4 ">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200/50">
                    <div className="w-10 h-10 bg-red-500 rounded-lg mb-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">YT</span>
                    </div>
                    <div className="h-2 bg-blue-300 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-blue-200 rounded w-full"></div>
                    </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200/50">
                  <div className="w-8 h-8 bg-blue-400 rounded-lg mb-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">X</span>
                  </div>
                  <div className="h-2 bg-purple-300 rounded w-2/3 mb-2"></div>
                  <div className="h-2 bg-purple-200 rounded w-full"></div>
                </div>
                 <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-xl border border-indigo-200/50">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg mb-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">N</span>
                  </div>
                  <div className="h-2 bg-indigo-300 rounded w-1/2 mb-2"></div>
                  <div className="h-2 bg-indigo-200 rounded w-full"></div>
                </div>
                </div>
                </div>
            </div>
            </section>
            <section className="container mx-auto px-6 py-24">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Everything you need to
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {" "}
                                remember everything
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Built for thinkers, learners, and creators who want to make the most of their knowledge.
                        </p>
                        
                    </div>
                </div>
            </section>

             {/* <section className="container mx-auto px-6 py-24">
                <div className="max-w-4xl mx-auto">
                    <div className="realtive">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20"> </div>
                        <div className="realtive bg-greadient-to-br form-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mn-6">
                                Ready to build your Second Brain?
                            </h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Join thousands of people who are organizing
                                 their knowledge and unlocking their potential.
                            </p>
                            <Button varients="primery" text="Get Started for free"/>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}