import {AppBar} from "@/components/AppBar";
import {VIDEOS} from "@/VideoProps";
import {VideoSuggestionCard} from "@/components/VideoSuggestionCard";


export default function VideoPage(){
    return <div>
        <AppBar/>
        <div className='flex max-lg:flex-col p-3 '>
            <div className='max-lg:w-[100%] lg:w-[65%] flex justify-end pr-3 pl-3'>
                <div className=' max-xl:w-[100%] xl:w-[90%] rounded-xl overflow-hidden'>
                    <video width={"100%"} controls src='/Channel%20Intro%20video.mp4'/>
                    <div>
                        How to get better at coding.
                    </div>
                </div>
            </div>
            <div className='max-lg:w-[100%] lg:w-[29%] pr-3 pl-3'>
                {VIDEOS.map(x => <VideoSuggestionCard video={x}/>)}
            </div>
        </div>
    </div>
}
