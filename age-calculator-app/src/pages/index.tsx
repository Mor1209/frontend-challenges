import localFont from 'next/font/local'
import Head from 'next/head'
import Image from 'next/image'
import { FormEvent } from 'react'
import ArrowIcon from '../../public/icon-arrow.svg'

const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Poppins-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--font-poppins',
  display: 'swap',
})

export default function Home() {
  const formSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    throw new Error('Function not implemented.')
  }

  return (
    <main className={`h-screen p-4 bg-[#f0f0f0] ${poppins.variable} font-sans`}>
      <Head>
        <title>Frontend Mentor | Age calculator app</title>
        <meta property='title' content='My page title' key='title' />
      </Head>
      <div className='bg-white mt-[15%] max-w-[52rem] m-auto rounded-3xl rounded-br-[8rem] md:rounded-br-[11rem] px-6 md:px-12 py-12'>
        <form onSubmit={formSubmitHandler}>
          <div className='grid grid-cols-3 gap-4 md:gap-8 max-w-xl'>
            <div className='flex flex-col gap-1'>
              <label
                htmlFor='day'
                className='text-[#716f6f] text-xs font-bold tracking-[0.2rem]'
              >
                DAY
              </label>
              <input
                type='text'
                name='day'
                id='day'
                placeholder='DD'
                value={''}
                className='border text-xl leading-[1px] md:text-[32px] p-3 px-4 font-bold border-[#f0f0f0] rounded-lg text-[#141414] md:indent-1 focus:border-[#854dff] caret-[#854dff] cursor-pointer outline-none'
              />
              <span className='font-normal text-sm italic text-[#ff5757]'></span>
            </div>
            <div className='flex flex-col gap-1'>
              <label
                htmlFor='month'
                className='text-[#716f6f] text-xs font-bold tracking-[0.2rem]'
              >
                MONTH
              </label>
              <input
                type='text'
                name='month'
                id='month'
                placeholder='MM'
                value={''}
                className='border text-xl leading-[1px] md:text-[32px] p-3 px-4 font-bold border-[#f0f0f0] rounded-lg text-[#141414] md:indent-1 focus:border-[#854dff] caret-[#854dff] cursor-pointer outline-none'
              />
              <span className='font-normal text-sm italic text-[#ff5757]'></span>
            </div>
            <div className='flex flex-col gap-1'>
              <label
                htmlFor='year'
                className='text-[#716f6f] text-xs font-bold tracking-[0.2rem]'
              >
                YEAR
              </label>
              <input
                type='text'
                name='year'
                id='year'
                placeholder='YYYY'
                value={''}
                className='border text-xl leading-[1px] md:text-[32px] p-3 px-4 font-bold border-[#f0f0f0] rounded-lg text-[#141414] md:indent-1 focus:border-[#854dff] caret-[#854dff] cursor-pointer outline-none'
              />
              <span className='font-normal text-sm italic text-[#ff5757]'></span>
            </div>
          </div>
          <div className='flex justify-center items-center my-8 md:my-0'>
            <hr className='bg-[#f0f0f0] flex-1' />
            <button type='submit' className='bg-[#854dff] rounded-full p-5'>
              <ArrowIcon
                viewBox='0 0 46 44'
                // strokeWidth='4'
                className='h-[28px] md:h-[46px] w-[28px] md:w-[44px] stroke-[4px] md:stroke-2'
              />
            </button>
            <hr className='bg-[#f0f0f0] flex-1 md:bg-transparent md:flex-none' />
          </div>
        </form>
        <p className='text-[#854dff] font-extrabold italic text-[3.25rem] md:text-[6rem] leading-[3.5rem] md:leading-[6.5rem]'>
          - -<span className='text-[#141414] ml-2'>years</span>
        </p>
        <p className='text-[#854dff] font-extrabold italic text-[3.25rem] md:text-[6rem] leading-[3.5rem] md:leading-[6.5rem]'>
          - -<span className='text-[#141414] ml-2'>months</span>
        </p>
        <p className='text-[#854dff] font-extrabold italic text-[3.25rem] md:text-[6rem] leading-[3.5rem] md:leading-[6.5rem]'>
          - -<span className='text-[#141414] ml-2'>days</span>
        </p>
      </div>
    </main>
  )
}
