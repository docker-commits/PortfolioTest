import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sai Kumar Vutti',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='snap-y snap-mandatory h-screen overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#a7c1f8]/80'>
      <body className={`${inter.className} bg-slate-50 text-gray-950`}>
      {/* <div className= 'absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
      <div className=' absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div> */}

        {children}
        </body>
    </html>
  )
}
