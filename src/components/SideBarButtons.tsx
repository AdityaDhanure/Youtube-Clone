// Structure of the SideBar buttons

export const SideBarButtons = (props: any) => {
    return <div className='pl-4 pr-5'>
        <div className='flex h-10 pt-2 cursor-pointer hover:bg-zinc-800 rounded-md'>
            <div className='pl-2'>
                {props.icon}
            </div>
            <div className='pl-6 pr-14 truncate'>
                {props.title}
            </div>
        </div>
    </div>
}