import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'

const ContactUs = () => {

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        formData.append("access_key", "7f496fad-ab59-477d-95fa-1bc517c5a3cc");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Thank you for your submission!')
                event.target.reset();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }


    }


    return (
        <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

            <Title
                title='با ما در ارتباط باشید'
                desc='برای هرگونه همکاری، راهنمایی یا پروژه می‌توانید از طریق این فرم با ما تماس بگیرید و پیام خود را ارسال کنید.'
            />

            <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>

                <div>
                    <p className='mb-2 text-sm font-medium'>نام شما</p>
                    <div className='flex pr-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.person_icon} alt="" />
                        <input name='name' type="text" placeholder='اسم خود را وارد کنید' className='w-full p-3 text-sm outline-none' required />
                    </div>
                </div>

                <div>
                    <p className='mb-2 text-sm font-medium'>ایمیل</p>
                    <div className='flex pr-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.email_icon} alt="" />
                        <input name='email' type="email" placeholder='ایمیل خود را وارد کنید' className='w-full p-3 text-sm outline-none' required />
                    </div>
                </div>

                <div className='sm:col-span-2'>
                    <p className='mb-2 text-sm font-medium'>پیام</p>
                    <textarea name='message' required rows={8} placeholder='پیام خود را وارد کنید ' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' />
                </div>

                <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
                    ارسال <img className='w-4' src={assets.arrow_icon} alt="" />
                </button>


            </form>



        </div>
    )
}

export default ContactUs