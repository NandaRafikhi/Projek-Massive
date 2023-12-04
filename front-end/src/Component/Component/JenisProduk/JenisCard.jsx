export default function JenisCard({ children, imgSrc, ... props}) {
    return(
        <div {... props} className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group"
        >
            <img
            src={imgSrc}
            alt=""
            className=" transition-transform group-hover:scalle-110 duration-200"
            />
            <div>
                <div >{children}</div>
            </div>
        </div>
    )
}
   