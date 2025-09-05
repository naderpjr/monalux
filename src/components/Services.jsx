import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {

    const servicesData = [
        {
            title: 'طراحی گرافیک و تبلیغات',
            description: 'ما طرح‌های خلاقانه، هویت بصری ماندگار و کمپاین‌های تبلیغاتی هدفمند می‌سازیم که برند شما را متفاوت و برجسته نشان دهد',
            icon: assets.ads_icon
        },
        {
            title: 'ساخت و توسعه وبسایت',
            description: 'از دیزاین تا توسعه، وبسایت‌های مدرن و واکنش‌گرا می‌سازیم که تجربه‌ی کاربری و حضور آنلاین شما را تقویت کند.',
            icon: assets.marketing_icon
        },
        {
            title: 'تیزر و ویدیوهای تبلیغاتی',
            description: 'تیزرهای تبلیغاتی خلاقانه، فیلم‌برداری حرفه‌ای و ویدیوهای اثرگذار تولید می‌کنیم تا پیام شما با جذابیت بیشتر منتقل شده و برندتان در ذهن مخاطب ماندگار شود.',
            icon: assets.content_icon
        },
        {
            title: 'عکاسی محصول و رسانه‌های اجتماعی',
            description: 'عکس‌های باکیفیت محصول و مدیریت محتوای شبکه‌های اجتماعی را فراهم می‌کنیم تا ارتباط شما با مشتریان پررنگ‌تر شود.',
            icon: assets.social_icon
        }



    ]

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}

            id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
            {/* <img src={assets.bgImage2} className='absolute -top-110 -left-70 -z-1 dark:hidden' alt="" /> */}

            <Title title='چطور میتوانیم کمک کنیم؟' desc='هر گام از راهبرد تا اجرا، برای ما فرصتی است تا دنیای دیجیتالی بسازیم که برند شما را به جلو براند.' />

            <div className='flex flex-col md:grid grid-cols-2'>
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>

        </motion.div>
    )
}

export default Services