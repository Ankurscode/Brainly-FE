import { ShareIcon } from "../icons/ShareIcon"

 const defaultStyle="p-4     bg-white rounded-md border-gray-300 max-w-72 border"

export const Card=()=>{
    return <div > 
            <div className={`${defaultStyle}`}>
                <div className="flex justify-between">
                    <div className="flex items-center text-md">
                        <div className="text-gray-500 pr-2">
                            <ShareIcon size="md"/>
                        </div>
                        Project Ideas
                    </div>
                
                    <div className="flex items-center">
                        <div className="pr-2 text-gray-500">
                            <ShareIcon size="md"/>
                        </div>
                        <div className="text-gray-500">
                            <ShareIcon size="md"/>
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                {/* <iframe className="w-full" src="https://www.youtube.com/embed/okh85F29Gjg?si=mRgoElEbAnOVvxrM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                 */}

                 {/* <blockquote className="twitter-tweet"><p lang="en" dir="ltr">be honest.. which one&#39;s best for backend? <a href="https://t.co/ruJRKU0oVH">pic.twitter.com/ruJRKU0oVH</a></p>&mdash; JNS (@_devJNS) <a href="https://twitter.com/_devJNS/status/1999757544282259874?ref_src=twsrc%5Etfw">December 13, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </div> */}
               
                 <iframe className="w-full" src="https://s1.papyruspub.com/files/demos/products/ebooks/novels/science-fiction/Preview-Project-Hail-Mary-by-Andy-Weir.pdf"></iframe>
            </div>
            
            
    </div>
    </div>
}