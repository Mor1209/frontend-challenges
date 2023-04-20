import localFont from 'next/font/local'
import Head from 'next/head'
import Image from 'next/image'
import { FormEvent, useState } from 'react'
import ArrowIcon from '../../public/icon-arrow.svg'
import { intervalToDuration } from 'date-fns'

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
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [dayTouched, setDayTouched] = useState(false)
  const [monthTouched, setMonthTouched] = useState(false)
  const [yearTouched, setYearTouched] = useState(false)

  const inputIsValid = (
    inputValue: string,
    maxValue: number,
    maxInputLength: number,
    errorMessage: string
  ): string | undefined => {
    console.log(inputValue)
    if (!inputValue) {
      return 'This field is required'
    }

    if (
      !(+inputValue >= 0 && +inputValue <= maxValue) ||
      inputValue.length < maxInputLength ||
      +inputValue === 0
    ) {
      return errorMessage
    }

    return
  }

  const dayErrorMessage = dayTouched
    ? inputIsValid(day, 31, 2, 'Must be a valid day')
    : ''
  const monthErrorMessage = monthTouched
    ? inputIsValid(month, 12, 2, 'Must be a valid month')
    : ''
  const yearErrorMessage = yearTouched
    ? inputIsValid(year, 9999, 4, 'Must be a valid year')
    : ''
  const [dateErrorMessage, setDateErrorMessage] = useState('')
  const [result, setResult] = useState<{
    days: number | undefined
    months: number | undefined
    years: number | undefined
  }>({
    days: undefined,
    months: undefined,
    years: undefined,
  })

  const formSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    if (!(day && month && year)) return
    if (dayErrorMessage || monthErrorMessage || yearErrorMessage) return

    let dateString = `${year}-${month}-${day}`
    let timestamp = Date.parse(dateString)
    const currentTimestamp = Date.now()

    if (isNaN(timestamp) && timestamp < currentTimestamp) {
      setDateErrorMessage('Must be a valid date')
      return
    }

    const duration = intervalToDuration({
      start: timestamp,
      end: currentTimestamp,
    })

    setResult({
      days: duration.days,
      months: duration.months,
      years: duration.years,
    })
  }

  console.log('render ' + dayErrorMessage)

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
                className='text-[#716f6f] text-xs font-bold tracking-[0.2rem] pb-[0.1rem] md:pb-1'
              >
                DAY
              </label>
              <input
                type='number'
                name='day'
                id='day'
                placeholder='DD'
                value={day}
                onBlur={() => setDayTouched(true)}
                onChange={e => {
                  e.currentTarget?.value?.length <= 2 &&
                    setDay(e.currentTarget.value)
                }}
                className={`border text-xl leading-[1px] md:text-[32px] p-3 px-4 font-bold rounded-lg text-[#141414] md:indent-1 focus:border-[#854dff] caret-[#854dff] cursor-pointer outline-none ${
                  dayErrorMessage ? 'border-[#ff5757]' : 'border-[#f0f0f0]'
                }`}
              />
              <span className='font-normal text-sm italic text-[#ff5757]'>
                {dayErrorMessage || dateErrorMessage}
              </span>
            </div>
            <div className='flex flex-col gap-1'>
              <label
                htmlFor='month'
                className='text-[#716f6f] text-xs font-bold tracking-[0.2rem] pb-[0.1rem] md:pb-1'
              >
                MONTH
              </label>
              <input
                type='number'
                name='month'
                id='month'
                placeholder='MM'
                value={month}
                onChange={e =>
                  e.currentTarget?.value?.length <= 2 &&
                  setMonth(e.currentTarget.value)
                }
                className='border text-xl leading-[1px] md:text-[32px] p-3 px-4 font-bold border-[#f0f0f0] rounded-lg text-[#141414] md:indent-1 focus:border-[#854dff] caret-[#854dff] cursor-pointer outline-none'
              />
              <span className='font-normal text-sm italic text-[#ff5757]'>
                {monthErrorMessage}
              </span>
            </div>
            <div className='flex flex-col gap-1'>
              <label
                htmlFor='year'
                className='text-[#716f6f] text-xs font-bold tracking-[0.2rem] pb-[0.1rem] md:pb-1'
              >
                YEAR
              </label>
              <input
                type='number'
                name='year'
                id='year'
                placeholder='YYYY'
                value={year}
                onChange={e =>
                  e.currentTarget?.value?.length <= 4 &&
                  setYear(e.currentTarget.value)
                }
                className='border text-xl leading-[1px] md:text-[32px] p-3 px-4 font-bold border-[#f0f0f0] rounded-lg text-[#141414] md:indent-1 focus:border-[#854dff] caret-[#854dff] cursor-pointer outline-none'
              />
              <span className='font-normal text-sm italic text-[#ff5757]'>
                {yearErrorMessage}
              </span>
            </div>
          </div>
          <div className='flex justify-center items-center my-8 md:my-0'>
            <hr className='bg-[#f0f0f0] flex-1' />
            <button type='submit' className='bg-[#854dff] rounded-full p-5'>
              <ArrowIcon
                viewBox='0 0 46 44'
                className='h-[28px] md:h-[46px] w-[28px] md:w-[44px] stroke-[4px] md:stroke-2'
              />
            </button>
            <hr className='bg-[#f0f0f0] flex-1 md:bg-transparent md:flex-none' />
          </div>
        </form>
        <p className='text-[#854dff] font-extrabold italic text-[3.25rem] md:text-[6rem] leading-[3.5rem] md:leading-[6.5rem]'>
          {result.years || '- -'}
          <span className='text-[#141414] ml-2'>years</span>
        </p>
        <p className='text-[#854dff] font-extrabold italic text-[3.25rem] md:text-[6rem] leading-[3.5rem] md:leading-[6.5rem]'>
          {result.months || '- -'}
          <span className='text-[#141414] ml-2'>months</span>
        </p>
        <p className='text-[#854dff] font-extrabold italic text-[3.25rem] md:text-[6rem] leading-[3.5rem] md:leading-[6.5rem]'>
          {result.days || '- -'}
          <span className='text-[#141414] ml-2'>days</span>
        </p>
      </div>
    </main>
  )
}
