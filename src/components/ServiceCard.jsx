import React from 'react'
import { motion } from "motion/react"

const ServiceCard = ({ service, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 
                 dark:border-gray-700 shadow-md bg-white dark:bg-gray-900 
                 flex flex-col h-full"
        >
            <div className="flex flex-col sm:flex-row sm:items-start items-center gap-6 p-6 flex-1 h-full">

                {/* آیکون */}
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-3 flex-shrink-0">
                    <img
                        src={service.icon}
                        className="w-16 h-16 object-contain"
                        alt={service.title}
                    />
                </div>

                {/* متن‌ها */}
                <div className="flex-1 text-center sm:text-right flex flex-col justify-center">
                    <h3 className="font-semibold text-lg text-black dark:text-white">
                        {service.title}
                    </h3>
                    <p className="text-sm text-black dark:text-gray-300 mt-2 leading-relaxed">
                        {service.description}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default ServiceCard
