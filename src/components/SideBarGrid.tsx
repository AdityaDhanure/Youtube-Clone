import {SideBarButtons} from "@/components/SideBarButtons";
import {
    SideButtonPropsSet1,
    SideButtonPropsSet2,
    SideButtonPropsSet3,
    SideButtonPropsSet4
} from "@/components/SideButtonProps";

export const SideBarGrid = () => {
    return <div className='max-h-screen overflow-auto hover:overflow-ellipsis scrollbar-thin scrollbar-webkit scrollbar-visible'>
        <div>
            {SideButtonPropsSet1.map(button => <div>
                <SideBarButtons
                    icon={button.icon}
                    title={button.title}
                />
            </div>)}
            <div className='border-b-2 border-zinc-800 pb-3 w-[95%]'></div>
            <div className='pl-4 pr-5 pt-3'>
                <div className='flex h-10 pt-2 cursor-pointer hover:bg-zinc-800 rounded-md'>
                    <div className='font-bold pl-1.5'>
                        You
                    </div>
                    <div className='pt-1.5 pl-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="size-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                {SideButtonPropsSet2.map(button => <div>
                    <SideBarButtons
                        icon={button.icon}
                        title={button.title}
                    />
                </div>)}
            </div>
            <div className='border-b-2 border-zinc-800 pb-3 w-[95%]'></div>
            <div className='cursor-pointer p-4 font-bold pl-6'>
                Subscriptions
            </div>
            <div className='border-b-2 border-zinc-800 pb-3 w-[95%]'></div>
            <div className='cursor-pointer p-4 font-bold pl-6'>
                Explore
            </div>
            <div>
                {SideButtonPropsSet3.map(button => <div>
                    <SideBarButtons
                        icon={button.icon}
                        title={button.title}
                    />
                </div>)}
            </div>
            <div className='border-b-2 border-zinc-800 pb-3 w-[95%]'></div>
            <div className='cursor-pointer p-4 font-bold pl-6'>
                More from You Tube
            </div>
            <div className='border-b-2 border-zinc-800 pb-3 w-[95%]'></div>
            <div className='pt-4'>
                {SideButtonPropsSet4.map(button => <div>
                    <SideBarButtons
                        icon={button.icon}
                        title={button.title}
                    />
                </div>)}
            </div>
            <div className='border-b-2 border-zinc-800 pb-3 w-[95%]'></div>
            <div className='p-6 pt-3.5'>
                <div className='text-xs text-zinc-300 font-sans'>
                    About Press Copyright <br></br>
                    Contact Us Creators <br></br>
                    Advertise Developers
                </div>
                <div className='text-xs pt-4 pb-4 text-zinc-300 font-sans'>
                    Terms Privacy Policy & Safety <br></br>
                    How YouTube works <br></br>
                    Test new features
                </div>
                <div className='flex text-xs text-zinc-500'>
                    <div className='pt-0.5 pr-0.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                    </div>
                    2024 Google LLC
                </div>
            </div>
        </div>
    </div>
}

