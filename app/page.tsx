'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, ShoppingBag, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function BeetleStudioLanding() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <div className='relative w-full min-h-screen overflow-y-auto overflow-x-hidden bg-stone-100'>
      {/* Textured background */}
      <div className='absolute inset-0 z-0 h-full w-full'>
        <Image
          src='/image/bg.webp'
          alt='background'
          fill
          className='object-cover'
          priority
        />
      </div>
      <div className='relative z-10 flex min-h-screen flex-col items-center justify-between py-6 w-full px-4'>
        <motion.div
          className='flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 max-w-lg  
                     bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100 
                     w-full'
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {/* Logo */}
          <div className='relative h-32 w-32 sm:h-48 sm:w-36 lg:h-36 lg:w-64'>
            <Image
              src='/image/insectlands_logo.webp'
              alt='Beetle Studio Logo'
              fill
              className='object-contain'
              loading='lazy'
            />
          </div>
          {/* Title */}
          <motion.h1
            className='font-serif text-4xl font-light tracking-wide  biz-udpmincho-bold mt-4  '
            style={{ WebkitTextStroke: '0.1px #0d252c', color: '#0d252c' }}
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            蟲幻之地
            <br />
            INSECT LANDS
          </motion.h1>
          {/* Description */}
          <motion.p
            className='mt-4 max-w-xs font-serif text-xl italic leading-relaxed text-stone-200 biz-udpmincho-regular'
            style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 1.2 }}
            dangerouslySetInnerHTML={{
              __html: `
              <span class='block'> 成立於 2023<br/>源於對獨角仙的熱愛，<br/>從兒時興趣發展至今，<br/>逐步累積甲蟲飼養經驗。<br/><br/>經營蝦皮、Facebook、<br/>Instagram及 Threads，<br/>推廣甲蟲文化與飼養知識<br/><br />歡迎大小朋友加入，<br/>一同探索昆蟲的奇幻世界！<br />如有任何問題，歡迎隨時聯繫，<br />我們竭誠為您服務🥰</span>
              `,
            }}
          ></motion.p>

          <motion.div
            className='mb-6 sm:mb-10 mt-8 flex w-full max-w-xs flex-col gap-4 biz-udpmincho-regular'
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {/* Line Button */}
            <motion.a
              href='https://line.me/ti/p/_tlWddM86R'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-2 rounded-full bg-emerald-800 px-6 py-3.5 text-white shadow-lg transition-all hover:bg-emerald-700 hover:shadow-xl'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={20} />
              <span className='font-medium'>點我添加 Line</span>
            </motion.a>
            {/* Shopee Button */}
            <motion.a
              href='http://shopee.tw/finn777'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-white shadow-lg transition-all hover:bg-orange-400 hover:shadow-xl'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <ShoppingBag size={20} />
              <span className='font-medium'>來逛逛蝦皮賣場</span>
            </motion.a>
            {/* Instagram Button */}
            <motion.a
              href='https://www.instagram.com/liu_0912_7?igsh=MTl6MTlwOW1ndzF6dA%3D%3D&utm_source=qr'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3.5 text-white shadow-lg transition-all hover:from-pink-400 hover:to-purple-500 hover:shadow-xl'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Instagram size={20} />
              <span className='font-medium'>追蹤我們的 Instagram</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
