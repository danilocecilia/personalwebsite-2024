import Image from 'next/image'
import { Folder } from 'lucide-react'
import { Icons } from './components/icons'

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#e7e5e3] flex-col items-center justify-center px-10">
      <div className="flex justify-around">
        <div className="flex flex-col text-[#2F4858] space-y-4">
          <div className="flex justify-center py-10">
            <span className="rounded-full overflow-hidden border-[1px] border-gray-300 shadow-lg opacity-85">
              <Image
                src="/photo.jpg"
                width={220}
                height={220}
                alt="Picture of the author"
              />
            </span>
          </div>
          <p className="text-[#005B4A] text-2xl font-bold">Hi there!! 👋</p>
          <p className="text-4xl">I'm Danilo Cecilia</p>
          <p>I'm a software engineer who loves to build things for the web.</p>

          <button className="bg-[#3C665F] w-56 h-16 text-white px-4 py-2 rounded-sm">
            Download Resume
          </button>
        </div>

        <div className="flex space-x-10 flex-wrap">
          <div className="flex space-y-3 flex-col text-[#005B4A] justify-center items-center rounded-lg border-[#3C665F] transparent border-2 w-36 h-36">
            <Folder size={40} />
            <span className="font-bold">My Projects</span>
          </div>

          <div className="flex space-y-3 flex-col text-[#005B4A] justify-center items-center rounded-lg border-[#3C665F] transparent border-2 w-36 h-36">
            <Folder size={40} />
            <span className="font-bold">About me</span>
          </div>

          <div className="flex space-y-3 flex-col text-[#005B4A] justify-center items-center rounded-lg border-[#3C665F] transparent border-2 w-36 h-36">
            <Icons.chat width={42} height={40} />
            <span className="font-bold">ChatGPT me</span>
          </div>

          <div className="flex items-center space-x-2"></div>
        </div>
      </div>
    </main>
  )
}
