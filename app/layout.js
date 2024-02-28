import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
//#b46f40 orange
// #164775 blue
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const currentYear = new Date().getFullYear();
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}  style={{ height: '100%' }}>

    <header className="bg-white">
    <div
            className="
            pointer-events-none
            flex place-items-center  
            gap-2 
            
            lg:pointer-events-auto 
            lg:p-0"
            
            target="_blank"
            rel="noopener noreferrer"
          >
            
            <Image
              src="/HB-Electric.webp"
              alt="HB Electric Utahs best commercial electrician contractor"
              className=""
              width={118}
              height={24}
              priority
            />
          </div>
    </header>

      <main className="
      mainClass 
      flex 
      min-h-screen 
      pb-[11rem]
       max-w-[100%] 
      flex-col 
      items-center 
      justify-between
      " >
        {children}
      </main> 
        
      <footer className="bg-white p-2 text-center w-[100%]">
        <div className="container mx-auto w-[100%]">
          <div className="
          flex 
          flex-row 
          justify-evenly 
          mb-2 
          min-[1024px]:mb-8
          min-[1024px]:mt-4
          "
          >
          </div>
          <div className="flex flex-col justify-between items-center w-full min-[540px]:flex-row">
          <p className="text-[#fde1e2] text-[.6em] ">
            &copy; {currentYear} HB Electric
          </p>
          <p className="text-[#fde1e2] text-[.7em]">Built with ✊ by&nbsp;<a
          className="text-[#fee084]"
           href="https://topdev.tech/" 
           target="_blank">TopDev_Tech
           </a>
          </p>
          </div>
        </div>
      </footer>

      </body>
    </html>
  );
}
