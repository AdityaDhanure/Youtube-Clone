import {SearchBar} from "@/components/SearchBar";
import {LogoBurgerIcon} from "@/components/Logo&BurgerIcon";
import {VideoNotifyProfile} from "@/components/VideoNotifyProfile";

export const AppBar = ()=>{
    return <div className='w-[100%] fixed'>
        <div className='flex justify-between p-2 pb-2 bg-zinc-950'>
            <div>
                <LogoBurgerIcon/>
            </div>
            <div>
                <SearchBar/>
            </div>
            <div>
                <VideoNotifyProfile/>
            </div>
        </div>
    </div>
}