import arrow from '../images/arrow-scroll.png';

export const CategoriesNav = () => {
  return (
    <div className="sm:mb-32 px-5 pb-10 xl:px-24 sm:pb-0 sm:pt-16 flex justify-center w-full">
        <div className="flex gap-16 items-center justify-start h-[67px] rounded-[74px]
            pt-2 text-sm xl:text-2xl font-glancyrRegular bg-transparent outline outline-neutral-50 
            outline-1 text-white px-6 xl:px-16 ">
            <a href="">ALL</a>
            <a href="">
                <div className="flex items-center gap-2 sm:gap-12 ">
                    <div className="flex items-center">
                        <span className=" font-glancyrRegular text-neon-green"> WEB DEVELOPMENT </span>
                        <img src={arrow.src} className=" size-4 xl:size-8" alt=""/> 
                    </div>    
                </div>
            </a>
            <a href="">CREATIVE DESIGN</a>
            <a href="">TECHNICAL DESIGN</a>
            <a href="">MARKETING</a>
        </div>
    </div>
  )
}