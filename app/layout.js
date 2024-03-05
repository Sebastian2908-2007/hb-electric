import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { FaFacebookSquare } from "react-icons/fa";
import Dropdown from "@/components/Dropdown";
import Link from "next/link";
//#b46f40 orange
// #164775 blue
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HB Electric || The most experienced commercial electrical contractor in Utah",
  description: "Empower your business with the expertise of Utah's premier commercial electricians. From robust wiring solutions to cutting-edge electrical installations, we specialize in comprehensive commercial electrical services. Trust our skilled team to illuminate your success, ensuring a seamless and reliable power infrastructure for your enterprise. Contact us today for unmatched professionalism and excellence in commercial electrical work throughout Utah.",
  keywords: [
    'commercial electrician utah', 
    'commercial electrical contractor utah',
  ],
  metadataBase: new URL('https://www.hbelectricutah.com/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/og-image.png',
  },
};


const currentYear = new Date().getFullYear();
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}  style={{ height: '100%' }}>

    <header className="bg-white flex flex-row justify-between items-center">
    <Link
    href='/'
            className="
            
            flex place-items-center  
            gap-2 
            
            lg:pointer-events-auto 
            lg:p-0"
            
          
          >
            
            <Image
              src="/HB-Electric.webp"
              alt="HB Electric Utahs best commercial electrician contractor"
              className=""
              width={118}
              height={24}
              priority
            />
          </Link>
          <div className="p-4">
          <Dropdown/>
          </div>
    </header>

      <main className="
      mainClass 
      flex 
      min-h-screen 
      pb-[3rem]
       max-w-[100%] 
      flex-col 
      items-center 
      justify-between
      " >
        {children}
      </main> 
        
      <footer className="bg-[#164775] p-2 text-center w-[100%]">
        <div className="container mx-auto w-[100%]">
          <div className="
          flex 
          flex-col 
          justify-evenly 
          mb-2 
          min-[1024px]:mb-8
          min-[1024px]:mt-4
          "
          >
            <Link href='/Contact' className="
            text-white 
            font-[toroka] 
            text-xl 
            mb-4 
            min-[412px]:text-2xl
            min-[768px]:text-3xl
            underline
            hover:text-[#b46f40]
            ">Contact us</Link>
            <div className="
            min-[1024px]:flex
            min-[1024px]:flex-row
            min-[1024px]:items-center
            ">
            <div className="
            flex 
            flex-row 
            items-center 
            px-8 min-[360px]:px-14 
            min-[412px]:px-28
            min-[540px]:px-44
            min-[768px]:px-64
            min-[1024px]:px-8
            mb-4
            ">
            <span className="text-white font-[toroka]">Phone:</span>
            &nbsp;
            <a className=" 
        font-[toroka] 
        text-lg
        text-white
        hover:text-[#b46f40]
        " 
        href="tel:385-233-0350">
          385-233-0350
          </a>
            </div>
            <div className="
            flex 
            flex-row 
            items-center 
            px-4 min-[360px]:px-10 
            min-[412px]:px-20
            min-[540px]:px-40
            min-[768px]:px-64
            min-[1024px]:pl-[32rem]
            min-[1024px]:pr-0
            min-[1280px]:pl-[46rem]
            min-[1366px]:pl-[50rem]
            min-[1920px]:pl-[66rem]
            ">
            <span className="text-white font-[toroka]">Email:</span>
            &nbsp;
            <a className=" 
        font-[toroka] 
        text-lg
        text-white
        hover:text-[#b46f40]
        " 
        href="mailto:office@hbelectricutah.com">
          office@hbelectricutah.com
          </a>
            </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
          <p className="text-white text-[.6em] ">
            &copy; {currentYear} HB Electric
          </p>
          <a
          alt='facebook page for HB Electric'
           href="https://www.facebook.com/hbelectric/"
           target="_blank"
           rel="noopener noreferrer"
          className="p-4 hover:bg-[#b46f40] rounded-xl">
          <FaFacebookSquare size={28} style={{color:'white'}}/>
          </a>
          <a
            className="
            pointer-events-none 
            flex 
            place-items-center 
            gap-2 
            p-2
            font-[manhattan] 
            lg:pointer-events-auto 
            lg:p-0
            text-[.65rem]
            text-white
            "
            href="https://topdev.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            built By{" "}
            <Image
              src="/td.png"
              alt="Tiny Topdev Tech Logo"
              width={15}
              height={15}
              
            />
          </a>
          </div>
        </div>
      </footer>

      </body>
    </html>
  );
}
