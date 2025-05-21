
export const LogoBurgerIcon = ()=>{
    return <div className='flex items-center pl-1.5 cursor-pointer '>
        <div className=' rounded-full hover:bg-zinc-800'>
            <div className='p-2.5'   >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </div>
        <div className='pl-3'>
            <img className='h-8 w-28' src={'/YTLogo.png'} alt='youtube'/>
        </div>
    </div>
}