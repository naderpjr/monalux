import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"

const OurWork = () => {

    const workData = [
        {
            title: 'وبسایت کابل بلاگ',
            description: 'یک وبسایت خبری خلاقانه و مدرن که محتوای شهر کابل را با طراحی جذاب و تجربه کاربری روان به مخاطب ارائه می‌دهد.',
            image: assets.work_mobile_app
        },
        {
            title: 'وبسایت پیش‌بینی آب و هوا',
            description: 'وبسایتی تعاملی و کاربردی برای نمایش وضعیت آب و هوا با طراحی بصری واضح و اطلاعات دقیق در لحظه.',
            image: assets.work_dashboard_management
        },
        {
            title: 'پرتال فیلم و سریال',
            description: 'یک موتور جستجوی حرفه‌ای برای فیلم و سریال‌ها با طراحی مدرن و تجربه کاربری ساده و سریع که دسترسی به محتوا را آسان می‌کند.',
            image: assets.work_fitness_app
        }
    ]


    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}

            id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

            <Title title='نمونه کارهای ما' desc='نمونه‌کارهای ما بازتابی از خلاقیت، دقت و تجربه‌اند؛ هر پروژه داستانی‌ست از اعتماد و نتیجه.' />

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
                {
                    workData.map((work, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}

                            key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                            <img src={work.image} className='w-full rounded-xl' alt="" />
                            <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                            <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                        </motion.div>
                    ))
                }
            </div>

        </motion.div>
    )
}

export default OurWork