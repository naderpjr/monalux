import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"


const Hero = () => {
    return (
        <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-black-700 dark:text-white'>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className='inline-flex items-center border border-gray-300 p-1.5 px-4 rounded-full'>
                {/* <img src={assets.group_profile} className='w-20' alt="" /> */}
                <p className='text-xs font-medium'>هنر و تکنولوژی در یک قاب</p>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}

                className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px]    font-black xl:leading-[95px] max-w-5xl leading-[1.5]'>ایده‌پردازی <br /> که به   <span className='bg-gradient-to-r from-[#ec2154] to-[#800020] bg-clip-text text-transparent'>تجربه</span>  تبدیل می‌شود
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}

                className='text-sm sm:text-lg font-medium text-black-500 leading-[2] dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>ما اندیشه‌های بزرگ را به تجربه‌های دیجیتالی زنده بدل می‌سازیم و میان شما و مخاطبان‌تان پیوندی ماندگار ایجاد می‌کنیم</motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2 }}
                viewport={{ once: true }}

                className='relative'>
                <img src={assets.hero_img} className='w-full max-w-6xl' alt="" />
                {/* <img src={assets.bgImage1} className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden ' alt="" /> */}
            </motion.div>

        </div>
    )
}

export default Hero