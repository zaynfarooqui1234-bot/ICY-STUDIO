import { motion } from 'framer-motion';
import { cloneElement, useState, type ReactNode } from 'react';
import logo from '../images/logo-with-a-dot.png';
import decoration from '../images/9(WHITE).png';
import React from 'react';
import footer1 from '../images/footer1.svg';
import {Facebook, Instagram, Linkedin, Twitter, Youtube, Behance,} from './hooks/Svgs';
import ArrowButton from './hooks/Svgs';

type FooterCompComponents = {
    indexPage? : Boolean,
    noPadding?: Boolean,
    blackText?: Boolean
}


export const Footer = ({indexPage, noPadding, blackText}: FooterCompComponents) => {
  return (
    
<div className= { `${(indexPage ? ' flex flex-col gap-10 sm:flex-row sm:justify-between w-full pb-28 ' : ' flex flex-col gap-10 sm:flex-row sm:justify-between w-full '  )} ${(noPadding ? ' p-0 sm:p-0  ' : ' p-5 sm:px-20'  )} ${(blackText ? 'text-black ' : ' text-white'  )}` }>
    <div className={ `${(indexPage ? 'sm:w-[25%] flex flex-col gap-10 sm:gap-14' : 'flex flex-col gap-10 sm:gap-14'  )}`} >
        <div className='flex gap-1'>
            <div>
                <img src={logo.src} alt='logo' className='min-w-10 min-h-10 mb-1'></img>
                <h2 className=' font-glancyrThin text-xs'>By <span className=' font-glancyrMediumItalic'>ICY STUDIOS.</span></h2>
            </div>
            {indexPage&& <img src={decoration.src} alt='decoration' className='max-w-20 max-h-20 rotate-[135deg]'>
            </img>}
        </div>

        <div className='flex gap-4 size-2 h-auto sm:size-4  '>
        
            <SocialMediaButton href='#' >
                <Facebook isHover/>
            </SocialMediaButton>
        
            <SocialMediaButton href='#' >
                <Instagram isHover/>
            </SocialMediaButton>

            <SocialMediaButton href='#' >
                <Linkedin isHover/>
            </SocialMediaButton>

            <SocialMediaButton href='#' >
                <Twitter isHover/>
            </SocialMediaButton>

            <SocialMediaButton href='#' >
                <Behance isHover/>
            </SocialMediaButton>

            <SocialMediaButton href='#' >
                <Youtube isHover/>
            </SocialMediaButton>

        </div>

        <div className='flex flex-col gap-4 '>
            <p className=' font-glancyrThin text-xs'>
            All company names, brand names, trademarks, logos, illustrations, videos and any other intellectual property (Intellectual Property) published on this website are the property of their respective owners. Any non-authorized usage of Intellectual Property is strictly prohibited and any violation will be prosecuted under the law.
            </p>

        <div className='mb-4'>
            <p className=' font-glancyrThin text-xs'>
            © 2024 ICYSTUDIO Ltd dba Icy Studios. All rights reserved.
            </p>
            <div className='flex justify-between font-glancyrThin text-xs'>
                <motion.a href='#' 
                    whileHover={{color: '#EE4140'}}
                >
                    Privacy Policy
                </motion.a>
                <motion.a href='#'
                    whileHover={{color: '#EE4140'}}
                >
                    Cookies Policy
                </motion.a>
            </div>
        </div>
                <div className='flex gap-4 items-center'>
                    <motion.input 
                    whileFocus={{ outlineColor: '#89b11b'}}
                    whileHover={{ outlineColor: '#89b11b'}}
                    
                    type='text' placeholder='YOUR EMAIL' className=' p-4 
                    sm:max-w-[200px]  sm:max-h-[50px] font-glancyrThin text-xs rounded-full outline outline-2 outline-neon-green bg-transparent'>
                    </motion.input>
                    
                    <motion.button 
                    
                    whileHover={{ scale: 1.15, color: '#ee4140' }}
                    className="pl-1 rounded-full xl:size-12 overflow-hidden object-cover bg-neon-green" >
                        <ArrowButton/>
                    </motion.button>
                </div>
        </div>
    </div>
    {indexPage&& 
    <>
        <div className='w-fit gap-5 hidden md:flex items-start justify-center flex-col '>
        <button className="btn border-none h-8 w-48 text-base xl:h-16 xl:w-[216px] text-center xl:text-2xl">
                        <div className="btn__bg">
                            <span className="btn__bg__layer btn__bg__layer-first"></span>
                            <span className="btn__bg__layer btn__bg__layer-second"></span>
                            <span className="btn__bg__layer btn__bg__layer-third"></span>
                        </div>
                        <span className="btn__text-out text-white font-glancyrLight">+1 222 222 222</span>
                        <span className="btn__text-in text-white font-glancyrLight">+1 222 222 222</span>
                    </button>
        <button className="btn border-none h-8 w-48 text-xs xl:h-16 xl:w-[300px] text-center xl:text-2xl">
                        <div className="btn__bg" >
                            <span className="btn__bg__layer btn__bg__layer-first"></span>
                            <span className="btn__bg__layer btn__bg__layer-second"></span>
                            <span className="btn__bg__layer btn__bg__layer-third"></span>
                        </div>
                        <span className="btn__text-out text-white font-glancyrLight">INFO@ICYSTUDIO.CO</span>
                        <span className="btn__text-in text-white font-glancyrLight">INFO@ICYSTUDIO.CO</span>
            </button>
            <div className='self-end mt-14'>
            <img src={footer1.src} alt='footer image' className='self-end ml-auto size-[130px] xl:size-[150px]' />
            </div>
        </div>
    </>
    }
</div>

  )
}




type SocialMediaButtonProps = {
    children: ReactNode
    href: string
}

export const SocialMediaButton = ({ children, href }: SocialMediaButtonProps) => {
    const [isHover, setHover] = useState(false);
  
    const clonedChild = cloneElement(children as React.ReactElement, { isHover });
  
    return (
      <a href={href}>
        <motion.button
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          animate={{
            backgroundColor: isHover ? '#B3E823' : 'transparent',
            transition: { duration: 0.8 }
            
          }}
          className='p-2 rounded-full outline outline-3 outline-neon-green'
        >
          <div className='flex justify-center items-center rounded-full'>
            {clonedChild}
          </div>
        </motion.button>
      </a>
    );
  };
