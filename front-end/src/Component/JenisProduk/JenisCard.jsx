export default function JenisCard({ children, imgSrc, ... props}) {
    return(
        <div {... props} className="relative max-w-xs
        overflow-hidden rounded-2xl shadow-lg group  bg-milk-white items-center p-5 m-2"
        >
            <img
            src={imgSrc}
            alt=""
            className="transition-transform group-hover:scalle-110 duration-200"

            />
            <div>
                <div className="p-4 text-white">{children}</div>
            </div>
        </div>
    )
}
   