export default function ContohCard({imgSrc, ...props}) {
    return (
        <div {...props}
        className="relative w-[307px] h-[367px] overflow-hidden rounded-2xl mx-4 shadow-md bg-slate-300">
        <img src={imgSrc} alt="idea" className="w-full h-full object-contain transition-transform hover:scale-105 duration-150" />
      </div>
    )
  }
