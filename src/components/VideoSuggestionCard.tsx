// Structure of the VideoCardSuggestion Box

import  {Video} from "@/VideoProps";
import {useRouter} from "next/router";
import {Line} from "@/components/Line";

export const VideoSuggestionCard = ({video}: {video: Video})=>{
    const router = useRouter();
    return <div className="cursor-pointer flex h-[12.5%] p-0.5 pt-2" onClick={async () => {await router.push("/")}}>
        <div className="rounded-md overflow-hidden w-[40%]">
            <div>
                <img src={video.thumbnail} alt='thumbnail'/>
                <Line progress={30}/>
            </div>
        </div>
        <div className="w-[50%] pl-2">
            <div className='text-sm font-medium truncate h-[50%]'>
                {video.title}
            </div>
            <div className='text-zinc-400 text-xs font-normal pb-1'>
                {video.author}
            </div>
            <div className="flex pb-1">
                <div className='text-zinc-400 text-xs font-normal pr-2'>
                    {video.views}
                </div>
                <div className='text-zinc-400 text-xs font-normal'>
                    • {video.timestamp}
                </div>
            </div>
        </div>
        <div className='w-[5%] pl-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0
                1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"/>
            </svg>
        </div>
    </div>
}