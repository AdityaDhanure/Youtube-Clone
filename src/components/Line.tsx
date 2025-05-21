export const Line = ({progress}: {progress: number}) => {
    return <div className="w-full h-1 bg-zinc-600">
        <div className="h-1 bg-red-700" style={{width: progress + "%"}}></div>
    </div>
}