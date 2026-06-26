import arrow from '../images/arrow-scroll.png';
import checkMark from '../images/check-mark.svg';
import checkMarkBlack from '../images/check-mark-black.svg';

import { ClientLottie } from './ClientLottie';
import '../assets/css/main.css';

import handSprinkles from '../assets/videos/hand-sprinkles.json?url';
import designerServices from '../assets/videos/designer-services.json?url';
import animatedArrowButton2 from '../assets/videos/animated-arrow-button-2.json?url';
import servicesPencil from '../assets/videos/services-pencil.json?url';
import animatedArrowButton1 from '../assets/videos/animated-arrow-button-1.json?url';
import animatedArrowButtonBlack from '../assets/videos/animated-arrow-button-black.json?url';
import birdServicesSection from '../assets/videos/bird-services-section.json?url';
import movingAnimServices from '../assets/videos/moving-anim-services.json?url';
import womanServices from '../assets/videos/woman-services.json?url';

export const ServicesPageComp = () => {


  return (
    <>
        <section className='w-[100%] mb-24'>
            <div className="sm:mb-32 px-5 pb-10 sm:px-24 sm:pb-0 sm:pt-16 flex justify-center ">
                <div className="flex gap-16 items-center justify-start h-[67px] rounded-[74px]
                    pt-2 text-2xl font-glancyrRegular bg-transparent outline outline-neutral-50 
                    outline-1 text-white px-6 sm:px-16 ">
                    <a href="">
                        <div className="flex items-center gap-2 sm:gap-12 ">
                            <div className="flex items-center">
                                <span className=" font-glancyrRegular text-neon-green"> ALL </span>
                                <img src={arrow.src} className=" size-4 sm:size-8" alt=""/> 
                            </div>    
                        </div>
                    </a>
                    <a href="">WEB DEVELOPMENT</a>
                    <a href="">CREATIVE DESIGN</a>
                    <a href="">TECHNICAL DESIGN</a>
                    <a href="">MARKETING</a>
                </div>
            </div>

            <div className="flex ">
                <div className='w-[20%] '>
                    <div className='h-[22%]'></div>
                        <div className='h-[78%] pl-32'>
                            <ClientLottie 
                            src={handSprinkles} 
                            className='w-[550px] ' 
                            style={{ transform: 'scaleX(-1) scaleX(1.5) rotate(-2deg)', 
                                position: 'absolute' }} 
                            />
                        </div>
                    </div>
                    <div className=' w-[80%]'>
                        <h1 className=' pl-12 text-5xl sm:text-8xl sm:mb-24 font-stretchPro bg-clip-text text-transparent gradient-work'>
                            WEBSITEE <br/>
                            DEVELOPMENT
                        </h1>
                        <div className=' flex rounded-[101px] outline sm:p-10 '>
                            <div className='flex items-end  relative z-0 w-[25%]  '>
                                <ClientLottie src={designerServices}   
                                        style={{transform: 'scaleX(-1)', top:'36%', width: '520px', position: 'absolute'}} >
                                </ClientLottie>
                            </div>
                            <div className='w-[75%] z-10 flex flex-col gap-6'>
                                <div className=" p-8 pl-40 text-3xl font-glancyrThin text-right">
                                    <span className="text-white ">We're a team of </span>
                                    <span className="text-[#b3e823] ">SENIOR DEVELOPERS</span>
                                    <span className="text-white ">, Not </span>
                                    <span className="text-[#ee4140] ">ROOKIES</span>
                                    <span className="text-white lowercase ">, WE BUILD PRODUCTS THAT
                                        TRULY CHANGE THE GAME BY STAYING PARALLEL OF MODERN TECHNOLOGIES AND
                                        ADHERING TO THE BEST DEVELOPMENT PRACTICES AND STANDARDS.</span>
                                </div>
                                <div className='flex gap-32 sm:pl-40 justify-end sm:p-8 '>
                                    <div className='flex flex-col items-start gap-2 '>
                                        <WebIcon text='E-COMMERCE' />
                                        <WebIcon text='ARTIFICIAL INTELLEGINCE' />
                                        <WebIcon text='ENTERTAINMENT' />
                                        <WebIcon text='REAL ESTATE' />
                                    </div>
                                    <div className='flex flex-col items-start gap-2 '>
                                        <WebIcon text='FINANCE' />
                                        <WebIcon text='EDUCATION' />
                                        <WebIcon text='MEDICINE' />
                                        <WebIcon text='BLOCKCHAIN' />
                                    </div>
                                    <div className='flex flex-col items-start gap-2  '>
                                        <WebIcon text='SOCIAL' />
                                        <WebIcon text='GAMES' />
                                        <WebIcon text='WEB 3.0' />
                                        <WebIcon text='FASHION' />
                                    </div>
                                    
                                </div>
                                <div className=" p-8 pl-96 flex flex-col gap-10 items-end  text-2xl font-glancyrExtraThin text-right">
                                    
                                    <span className="text-white ">A modern brand is defined by its digital presence,
                                         starting with the website. We focus on creating websites that effectively convey 
                                        the brand's identity and perspective for an enhanced user experience.</span>
                                        
                                    <button data-cursor="pointer2" className="btn bg-transparent border-none  h-10 w-48 text-base sm:h-16 sm:w-[444px]  text-center sm:text-[28px]">
                                    
                                            <div className="btn2__bg flex items-center   ">
                                            
                                                <span className="btn__bg__layer bg-transparent btn__bg__layer-first"></span>
                                                <span className="btn__bg__layer bg-transparent btn__bg__layer-second"></span>
                                                <span className="btn__bg__layer bg-transparent btn__bg__layer-third"></span>
                                            </div>
                                            
                                            <span className="btn__text-out text-white font-glancyrExtraThin "><span className='  pb-2'>
                                                <ClientLottie src={animatedArrowButton2}
                                                    className='w-14'
                                                />
                                            </span>WANT TO &nbsp;<span className=' text-neon-green font-glancyrThin'>STAND OUT </span>?</span>
                                            <span className="btn__text-in text-white font-glancyrExtraThin"><span className='  pb-2'>
                                                <ClientLottie src={animatedArrowButton2}
                                                    className='w-14'
                                                />
                                            </span>WANT TO &nbsp;<span className=' text-neon-green font-glancyrThin'>STAND OUT </span>?</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>  
        </section>




        {/* 2ND SECTION */}





        <section className='flex flex-col w-[100%] mb-28'>

            <div className='flex justify-between sm:mb-20 items-center px-12 '>
                <h1 className=' text-5xl sm:text-8xl  font-stretchPro bg-clip-text text-transparent gradient-work'>
                    CREATIVE <br/>
                    DESIGNN
                </h1>
                <div>
                    <div className="flex flex-col pt-4 gap-2 items-center">
                        <h1 className="outlined-text sm:text-7xl font-glancyrMedium" > AWARD </h1>
                        <div className="flex gap-1 justify-between items-center w-full text-xl ">
                            <h1 className="text-white font-glancyrExtraThinItalic" > WINNING </h1>
                            <img src="src/images/ARROW-SERVICES.png" className='size-[17px] mb-2' alt="decoration" />
                            <h1 className="text-white font-glancyrExtraThinItalic"> DESIGNS</h1>
                        </div>
                            <h1 className="text-center text-[36px] font-glancyrMedium outlined-text-white uppercase leading-[44.52px]">NOTHING LESS</h1>                    
                        </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className=' flex w-[90%] justify-center items-center flex-col rounded-[101px] outline  '>
                    <div className=' px-24 pt-24 pb-6 flex  justify-center items-center text-center flex-col gap-12 '>
                        <div className="flex flex-col gap-12 items-center  text-3xl font-glancyrThin">
                            <p className="text-white ">A brand is more than just a logo and color palette. 
                                We'll craft a distinct visual and verbal identity, create necessary assets, 
                                and establish clear brand guidelines to maintain consistency across all touchpoints. 
                                Let's not forget whether its brand identity or visual identity </p>
                                <button className=" btn border-none bg-transparent h-12 w-48 sm:h-16 sm:w-[490px] text-center text-2xl sm:text-3xl">
                                <div className=" btn__bg  border-[1px] box-shadow-footer border-white bg-transparent">
                                    <span className="btn__bg__layer bg-transparent btn__bg__layer-first"></span>
                                    <span className="btn__bg__layer bg-transparent btn__bg__layer-second"></span>
                                    <span className="btn__bg__layer bg-transparent btn__bg__layer-third"></span>
                                </div>
                                <span className=" box-shadow-footer2 pt-2 btn__text-out text-neon-green font-glancyrLight">DESIGN MEAN’S ALOT TO US!</span>
                                <span className=" box-shadow-footer2 pt-2 btn__text-in text-neon-green font-glancyrLight">DESIGN MEAN’S ALOT TO US!</span>
                            </button>
                            
                            <p className="text-white ">Your brand could emerge and become 
                                    irresistible with an appealing design!</p>
                        </div>
                        <div className='flex gap-32 justify-end  '>
                            <div className='flex flex-col items-start gap-2 '>
                                <WebIcon text='BRAND-IDENTITY' />
                                <WebIcon text='SOCIAL-MEDIA IDENTITY' />
                                <WebIcon text='BROCHURES' />
                                <WebIcon text='AD-CREATIVES' />
                            </div>
                            <div className='flex flex-col items-start gap-2 '>
                                <WebIcon text='LOGO’S' />
                                <WebIcon text='STATIONERY' />
                                <WebIcon text='POSTERS' />
                                <WebIcon text='VFX/SFX EDIT' />
                            </div>
                            <div className='flex flex-col items-start gap-2  '>
                                <WebIcon text='PACKAGING' />
                                <WebIcon text='BRAND GUIDES' />
                                <WebIcon text='ILLUSTRATIONS' />
                                <WebIcon text='MOTION-GRAPHICS' />
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="overflow-hidden w-full flex gap-10 items-center justify-between   text-2xl font-glancyrExtraThin text-right">
                            
                            <ClientLottie src={servicesPencil} className='rotate-[90deg] w-[261px]' />

                           <div className='flex flex-col items-center gap-8'>
                             <div className="text-center">
                                 <span className="text-neutral-50 text-3xl font-normal font-['Glancyr'] leading-[33.45px]">WE </span>
                                 <span className="text-neutral-50 text-3xl font-glancyrThinItalic leading-[33.45px]">MAKE</span>
                                 <span className="text-neutral-50 text-3xl font-normal font-['Glancyr'] leading-[33.45px]"> DESIGN </span>
                                 <span className="text-[#b3e823] text-3xl font-semibold font-['Glancyr'] leading-[33.45px]">POP</span>
                                 <span className="text-neutral-50 text-3xl font-normal font-['Glancyr'] leading-[33.45px]"> :)</span>
                             </div>
                                 
                             <button data-cursor="pointer2" className="btn bg-transparent border-none  h-10 w-48 text-base sm:h-16 sm:w-[320px]  text-center sm:text-[28px]">
                             
                                     <div className="btn2__bg border-[1px] box-shadow-footer border-neon-green bg-transparent flex items-center   ">
                                     
                                         <span className="btn__bg__layer bg-transparent btn__bg__layer-first"></span>
                                         <span className="btn__bg__layer bg-transparent btn__bg__layer-second"></span>
                                         <span className="btn__bg__layer bg-transparent btn__bg__layer-third"></span>
                                     </div>
                                     
                                     <span className="btn__text-out text-white font-glancyrExtraThin "><span className='  pb-2'>
                                         <ClientLottie src={animatedArrowButton1}
                                             className='w-16'
                                         />
                                     </span>GET IN TOUCH!</span>
                                     <span className="btn__text-in text-white font-glancyrExtraThin"><span className='  pb-2'>
                                         <ClientLottie src={animatedArrowButton1}
                                             className='w-16'
                                         />
                                     </span>GET IN TOUCH!</span>
                                 </button>
                           </div>

                           <ClientLottie src={servicesPencil} className=' w-[261px]'
                            style={{transform: 'scaleX(-1) rotate(90deg)'}}
                           />

                    </div>
                </div>
            </div>

        </section>

        {/* slider */}
    <div className= "w-full items-center flex py-6 outline outline-1 mb-28 outline-white">
        <div className="text-wrapper2 font-glancyrExtraThin text-xs sm:text-2xl">
            <h1>
            &nbsp; SERVICES &nbsp; • &nbsp; 
            </h1>
            <h1 >
            &nbsp; <span className=' text-neon-green'>SERVICES</span> &nbsp; • &nbsp; 
            </h1>
            <h1>
            &nbsp; SERVICES &nbsp; • &nbsp; 
            </h1>
            <h1 >
            &nbsp; <span className=' text-neon-green'>SERVICES</span> &nbsp; • &nbsp; 
            </h1>
            <h1>
            &nbsp; SERVICES &nbsp; • &nbsp; 
            </h1>
            <h1 >
            &nbsp; <span className=' text-neon-green'>SERVICES</span> &nbsp; • &nbsp; 
            </h1>
            <h1>
            &nbsp; SERVICES &nbsp; • &nbsp; 
            </h1>
            <h1 >
            &nbsp; <span className=' text-neon-green'>SERVICES</span> &nbsp; • &nbsp; 
            </h1>
            <h1>
            &nbsp; SERVICES &nbsp; • &nbsp; 
            </h1>
            <h1 >
            &nbsp; <span className=' text-neon-green'>SERVICES</span> &nbsp; • &nbsp; 
            </h1>
            <h1>
            &nbsp; SERVICES &nbsp; • &nbsp; 
            </h1>
            <h1 >
            &nbsp; <span className=' text-neon-green'>SERVICES</span> &nbsp; • &nbsp; 
            </h1>
            <h1>
            &nbsp; SERVICES &nbsp; • &nbsp; 
            </h1>
            <h1 >
            &nbsp; <span className=' text-neon-green'>SERVICES</span> &nbsp; • &nbsp; 
            </h1>
            <h1>
            &nbsp; SERVICES &nbsp; • &nbsp; 
            </h1>
            <h1 >
            &nbsp; <span className=' text-neon-green'>SERVICES</span> &nbsp; • &nbsp; 
            </h1>
            <h1>
            &nbsp; SERVICES &nbsp; • &nbsp; 
            </h1>
            <h1 >
            &nbsp; <span className=' text-neon-green'>SERVICES</span> &nbsp; • &nbsp; 
            </h1>
            <h1>
            &nbsp; SERVICES &nbsp; • &nbsp; 
            </h1>
            <h1 >
            &nbsp; <span className=' text-neon-green'>SERVICES</span> &nbsp; • &nbsp; 
            </h1>
            <h1>
            &nbsp; SERVICES &nbsp; • &nbsp; 
            </h1>
            <h1 >
            &nbsp; <span className=' text-neon-green'>SERVICES</span> &nbsp; • &nbsp; 
            </h1>
            <h1>
            &nbsp; SERVICES &nbsp; • &nbsp; 
            </h1>
            <h1 >
            &nbsp; <span className=' text-neon-green'>SERVICES</span> &nbsp; • &nbsp; 
            </h1>
            <h1>
            &nbsp; SERVICES &nbsp; • &nbsp; 
            </h1>
            <h1 >
            &nbsp; <span className=' text-neon-green'>SERVICES</span> &nbsp; • &nbsp; 
            </h1>
            <h1>
            &nbsp; SERVICES &nbsp; • &nbsp; 
            </h1>
            <h1 >
            &nbsp; <span className=' text-neon-green'>SERVICES</span> &nbsp; • &nbsp; 
            </h1>
            <h1>
            &nbsp; SERVICES &nbsp; • &nbsp; 
            </h1>
            <h1 >
            &nbsp; <span className=' text-neon-green'>SERVICES</span> &nbsp; • &nbsp; 
            </h1>
            <h1>
            &nbsp; SERVICES &nbsp; • &nbsp; 
            </h1>
            <h1 >
            &nbsp; <span className=' text-neon-green'>SERVICES</span> &nbsp; • &nbsp; 
            </h1>
            <h1>
            &nbsp; SERVICES &nbsp; • &nbsp; 
            </h1>
            <h1 >
            &nbsp; <span className=' text-neon-green'>SERVICES</span> &nbsp; • &nbsp; 
            </h1>
            <h1>
            &nbsp; SERVICES &nbsp; • &nbsp; 
            </h1>
            <h1 >
            &nbsp; <span className=' text-neon-green'>SERVICES</span> &nbsp; • &nbsp; 
            </h1>
            <h1>
            &nbsp; SERVICES &nbsp; • &nbsp; 
            </h1>
            <h1 >
            &nbsp; <span className=' text-neon-green'>SERVICES</span> &nbsp; • &nbsp; 
            </h1>
            <h1>
            &nbsp; SERVICES &nbsp; • &nbsp; 
            </h1>
            <h1 >
            &nbsp; <span className=' text-neon-green'>SERVICES</span> &nbsp; • &nbsp; 
            </h1>
            
            
            
            
        </div>
    </div> 


    {/* final section  */}


    <section data-cursor="pointer"   className='w-full relative flex justify-center '>

        <section className='w-[97%] relative gap-[52rem] flex flex-col py-24 mb-24 rounded-[101px] bg-white text-black outline'>
    
                    <h1 className='  text-5xl sm:text-8xl sm:mb-24 font-stretchPro px-14  '>
                        TECHNICAL <br/>
                        DESIGNN
                    </h1>
                    <div className=' absolute left-[-8rem] mt-72 w-[80%] flex flex-col rounded-[101px] outline bg-white sm:p-10 '>
                        <div className=' flex pt-16 pl-40  flex-col gap-16 text-left'>
                            <div className=" text-3xl font-glancyrThin ">
                                    <span className="  
                                    leading-[33.45px]">Building digital products from scratch is a fantastic team adventure! Each member adds their own special touch to the project, and it's super important that we all gel together. Having established routines and a tightly-knit team are our secret ingredients to success & don't even get us started on design - IT’S OUR EVERYTHING! A good design can make your interface </span>
                                    <span className=" text-blush-red leading-[33.45px]">Bloom</span>
                                    <span className=" text-3xl leading-[33.45px]"> and become </span>
                                    <span className="text-blush-red leading-[33.45px]">Irresistible!</span>
                            </div>
                           <div className='flex gap-4 '>
                             <div className='flex flex-col pb-8 gap-16 w-[70%]'>
                                <div className='flex gap-20 '>
                                    <div className='flex flex-col items-start gap-4 '>
                                        <WebIcon text='UI/UX DESIGN' black blackIcon />
                                        <WebIcon text='MOTION-DESIGN' black blackIcon />
                                        <WebIcon text='VISUAL-IDENTITY' black blackIcon />
                                    </div>
                                    <div className='flex flex-col items-start gap-4 black '>
                                        <WebIcon text='PRODUCT DESIGN' black blackIcon />
                                        <WebIcon text='APPLICATION DESIGN' black blackIcon />
                                        <WebIcon text='UX-WIREFRAME' black blackIcon />
                                    </div>
                                    <div className='flex flex-col items-start gap-4 black  '>
                                        <WebIcon text='3D-VISUALS'black blackIcon />
                                        <WebIcon text='DESIGN SYSTEMS' black blackIcon />
                                        <WebIcon text='RESPONSIVE DASHBOARD' black blackIcon />
                                    </div>
                                </div>
                                <div className=" flex flex-col gap-10 text-2xl font-glancyrExtraThin">
                                   
                                    <button data-cursor="pointer2" className="btn border-none h-8 w-48 text-base sm:h-16 sm:w-[320px] text-center sm:text-3xl">
                                        <div className="btn__bg box-shadow-footer border-1 border-black bg-transparent">
                                            <span className="btn__bg__layer btn__bg__layer-first"></span>
                                            <span className="btn__bg__layer btn__bg__layer-second"></span>
                                            <span className="btn__bg__layer btn__bg__layer-third"></span>
                                        </div>
                                        <span className="btn__text-out  font-glancyrThin "><span className='  pb-2'>
                                            <ClientLottie src={animatedArrowButtonBlack}
                                                className='w-14'
                                            />
                                        </span>LET'S DISCUSS</span>
                                        <span className="btn__text-in  font-glancyrThin"><span className='  pb-2'>
                                            <ClientLottie src={animatedArrowButtonBlack}
                                                className='w-14'
                                            />
                                        </span>LET'S DISCUSS</span>
                                    </button>
                                    
                                </div>
                             </div>
                             <div className='flex items-end justify-end w-[30%]'>
                                <ClientLottie src={birdServicesSection} className='w-[223px]'/>
                             </div>
                           </div>
                        </div>
                    </div>
    
                <section className='flex flex-col w-[100%] mb-28'>
    
                <div className='flex justify-between sm:mb-20 items-center px-14 '>
                    <h1 className=' text-5xl sm:text-8xl  font-stretchPro '>
                        USER-CENTRIC <br/>
                        MARKETINNG
                    </h1>
                    <div>
                        {/* TODO: MAKE THIS TRANSPARENT */}
                        <ClientLottie src={movingAnimServices} className='w-[162px]' />
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className=' flex w-[90%] justify-center gap-32 items-center flex-col rounded-[101px] outline  '>
                        <div className=' px-24 pt-24 pb-6 flex  justify-center items-center text-center flex-col gap-12 '>
                            <div className="flex flex-col gap-12 items-center  text-3xl font-glancyrThin">
                                    <div className=" text-3xl text-center">
                                        <span className=" leading-[33.45px]">At Icy Studio, 
                                        we place a high value on learning about customer needs and developing methods that work. 
                                        Discover marketing centered around your audience. Our knowledgeable team professionally provides
                                         tailored solutions, assisting you in reaching your goals. With our experience, 
                                         improve your online visibility, maximize interaction, and increase </span>
                                         <span className=" text-blush-red leading-[33.45px]">ROI</span>
                                         <span className=" leading-[33.45px]">. 
                                        Together, let's create campaigns that leave a lasting impression and measurable outcomes.</span>
                                    </div>
                            </div>
                            <div className='flex gap-32 justify-end   '>
                                <div className='flex flex-col items-start gap-2 '>
                                    <WebIcon text='GOOGLE ADS' black blackIcon />
                                    <WebIcon text='ARTICLES/BLOGS' black blackIcon />
                                </div>
                                <div className='flex flex-col items-start gap-2 '>
                                    <WebIcon text='META ADS' black blackIcon />
                                    <WebIcon text='SEO' black blackIcon />
                                </div>
                                <div className='flex flex-col items-start gap-2  '>
                                    <WebIcon text='SOCIAL MEDIA MARKETING' black blackIcon />
                                    <WebIcon text='ORGANIC MARKETING' black blackIcon  />
                                </div>
                                <div className='flex flex-col items-start gap-2  '>
                                    <WebIcon text='INFLUENCER MARKETING' black blackIcon />
                                    <WebIcon text='PUBLIC RELATIONS' black blackIcon />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-center mb-16">
                            <button 
                                data-cursor="pointer2" 
                                className="btn bg-transparent border-none h-10 w-48 text-base sm:h-16 sm:w-[406px] text-center sm:text-[28px] relative overflow-visible"
                            >
                                <div className="btn2__bg border-[1px] box-shadow-footer border-black bg-transparent flex items-center justify-center relative">
                                <span className="btn__bg__layer bg-transparent btn__bg__layer-first"></span>
                                <span className="btn__bg__layer bg-transparent btn__bg__layer-second"></span>
                                <span className="btn__bg__layer bg-transparent btn__bg__layer-third"></span>
                                </div>

                                <span className="btn__text-out outlined-text-white font-glancyrThin z-20">
                                BOOK YOUR SLOT NOW!
                                </span>

                                <span className="btn__text-in outlined-text-white font-glancyrThin z-20">
                                BOOK YOUR SLOT NOW!
                                </span>

                                {/* Lottie Animation Positioned Centrally */}
                                <span className='absolute z-10' style={{ left: '50%', top: '0%', transform: 'translate(-50%, -55%)' }}>
                                <ClientLottie src={womanServices} className='w-[400px]' />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
    
                </section>  
        
        </section>
    </section>

    </>
  )
}

type WebIconProps = {
    text: string;
    black?: boolean;
    blackIcon?: boolean
}

export const WebIcon = ({text, black, blackIcon}:WebIconProps) => {
  return (
    <h2 className={`${black ? "text-black text-sm lg:text-sm xl:text-lg font-glancyrThin flex items-center justify-center gap-4"
     : "text-white text-xs lg:text-sm xl:text-lg font-glancyrThin flex items-center justify-center gap-4"}`}>
        <img className='pb-1' src={ blackIcon? checkMarkBlack.src : checkMark.src} alt="" />
        <span >
            {text}
        </span>
    </h2>
  )
}

