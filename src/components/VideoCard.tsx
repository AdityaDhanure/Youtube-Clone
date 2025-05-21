// Structure of the 'video card' with "Tailwind CSS" in ".tsx" file

import {useRouter} from "next/router";
import {Video} from "@/VideoProps";
import {Line} from "@/components/Line";

export function VideoCard({video}: {video: Video}) {
    const router = useRouter()

    return <div className='p-2 cursor-pointer' onClick={async ()=>{await router.push('/videos/1')}}>
        <div className='rounded-xl overflow-hidden'>
            <img src={video.thumbnail} alt='kartik'/>
            <Line progress={30}/>
        </div>
        <div className='grid grid-cols-12'>
            <div className='col-span-1 pt-3'>
                <img className={'rounded-full w-15 h-15'} src={video.image} alt='kartik'/>
            </div>
            <div className='col-span-11 pt-3 pl-5'>
                <div>
                    {video.title}
                </div>
                <div className='text-zinc-400 text-base'>
                    {video.author}
                </div>
                <div className='text-zinc-400 text-base'>
                    {video.views} • {video.timestamp}
                </div>
            </div>
        </div>
    </div>
}