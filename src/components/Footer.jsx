import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
    return (
        <div className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>

            {/* {Footer top} */}
            <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>

                <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
                    <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-32 sm:w-44' alt="" />
                    <p className='max-w-md'>از ایده تا اجرا، ما راهکارهای دیجیتالی می‌سازیم که کسب‌وکار شما را به جلو می‌برد.</p>

                    <ul className='flex gap-8'>
                        <li><a className='hover:text-primary' href="#hero">صفحه اصلی</a></li>
                        <li><a className='hover:text-primary' href="#services">خدمات</a></li>
                        <li><a className='hover:text-primary' href="#our-work">نمونه کارها</a></li>
                        <li><a className='hover:text-primary' href="#contact-us">تماس با ما</a></li>
                    </ul>
                </div>

                <div className='text-gray-600 dark:text-gray-400'>
                    <h3 className='font-semibold'>عضویت در خبرنامه</h3>
                    <p className='text-sm mt-2 mb-6'>جدیدترین اخبار، مقالات و منابع را هفتگی در ایمیل خود دریافت کنید.</p>

                    <div className='flex gap-2 text-sm'>
                        <input type="email" placeholder='ایمیل خود را وارد کنید' className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500' />
                        <button className='bg-primary text-white rounded px-6'>عضویت</button>
                    </div>
                </div>
            </div>

            <hr className='border-gray-300 dark:border-gray-600 my-6' />

            {/* {footer bottom} */}
            <div className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
                <p>© 2025 استودیو مونالوکس - کلیه حقوق محفوظ است</p>
                <div className='flex items-center justify-between gap-4'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.instagram_icon} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Footer
