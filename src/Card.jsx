export default function Card({advice, onFetchAdvice}){
    return(
        <div className="px-20 py-14 bg-black bg-opacity-30 text-center rounded-lg max-w-2xl">
            <h1 className="mb-5 text-3xl text-slate-300 font-bold animate-wiggle">{advice}</h1>
            <button className="font-extrabold text-slate-300" onClick={() => onFetchAdvice()}>={`>`}</button>
        </div>
    )
}