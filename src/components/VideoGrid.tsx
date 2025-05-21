import {VideoCard} from "@/components/VideoCard";
import {VIDEOS} from "@/VideoProps";

export const VideoGrid = ()=>{
    return <div className='max-h-screen overflow-auto hover:overflow-ellipsis no-scrollbar'>
        <div className='grid grid-cols-1   md:grid-cols-2   lg:grid-cols-3    pt-8 pb-8    pl-4 pr-4'>
            {VIDEOS.map(video => <div><VideoCard video={video}/></div>)}
        </div>
    </div>
}