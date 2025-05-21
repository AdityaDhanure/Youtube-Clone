import {VideoGrid} from "@/components/VideoGrid";
import {AppBar} from "@/components/AppBar";
import {SideBarGrid} from "@/components/SideBarGrid";
import {ShortSideBarButtons} from "@/components/ShortSIdeBarButtons";

export default function Home() {
    return <div className='no-scrollbar '>
        <AppBar/>
        <HomePage/>
    </div>
}

function HomePage() {
    return <div className='flex pt-11'>
        <div className='pt-6'>
            <div className='max-md:hidden xl:hidden'>
                <ShortSideBarButtons/>
            </div>
            <div className='max-xl:hidden'>
                <SideBarGrid/>
            </div>
        </div>
        <div>
            <VideoGrid/>
        </div>
    </div>
}
