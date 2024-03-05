'use client'
import Image from "next/image";
import hero from '../public/second-body.webp';
import firstBody from '../public/first-body.webp';
import consider from '../public/considerations-2.webp';
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef(null);
  return (
    <>
    <div className="
          relative
          flex 
          w-[100%]
          
        ">
        <Image
          className=""
          src={hero}
          alt="HB Electric best commercial electrician in Utah"
          sizes='80vw'
         priority
        />
        <a className="
        absolute 
        font-[encyclopaediea]
        text-xs
        min-[360px]:text-lg
        bg-[#164775]
        opacity-75
        w-[40%]
        text-center
        rounded-md
        text-[#ebebeb]
        p-1
        hover:bg-[#164775]
        hover:opacity-100
        right-[5.2rem] 
        bottom-16
        min-[360px]:right-[6.5rem]
        min-[360px]:bottom-24
        min-[375px]:right-26
        min-[390px]:right-[7rem]
        min-[390px]:bottom-28
        min-[412px]:right-34
        min-[540px]:bottom-36
        min-[540px]:right-36
        min-[768px]:bottom-56
        min-[768px]:right-64
        min-[768px]:w-[30%]
        min-[820px]:right-72
        min-[912px]:right-76
        min-[1024px]:bottom-96
        min-[1024px]:right-[23rem]
        min-[1280px]:right-[28rem]
        min-[1280px]:bottom-[22rem]
        min-[1366px]:p-4
        min-[1366px]:text-2xl
        min-[1366px]:right-[30rem]
        min-[1366px]:bottom-[25rem]
        min-[1920px]:right-[48rem]
        min-[1920px]:bottom-[42rem]
        min-[1920px]:w-[20%]
        min-[2560px]:right-[70rem]
        min-[2560px]:bottom-[52rem]
        min-[2560px]:w-[15%]
        " 
        href="tel:385-233-0350">Click To Call Now</a>
       
      </div>
   <div className="
    text-gray-800 
    font-sans 
    p-4
    flex
    flex-col
    items-center
    min-[1024px]:p-14
    min-[1280px]:p-28
    min-[1920px]:p-48
    ">
    <section className="
    container 
    mx-auto 
    my-4 
    px-4
    py-4
    border-[#b46f40]
    shadow-lg
    border
    md:border-4
    rounded-md
    min-[1024px]:mt-14
    min-[1024px]:flex
    min-[1024px]:flex-col
    min-[1024px]:items-center
    min-[1920px]:mt-0
    ">
        <h1 className="
        text-center
        text-3xl 
        text-[#164775] 
        font-bold 
        font-[encyclopaediea] 
        mb-4 
        min-[1024px]:text-center
        min-[1024px]:mb-8
        min-[1920px]:mb-14
       
        ">
          Power Utah's Progress with HB Electric Utah's most competent commercial and industrial electricians
         </h1>
         <div className="
          relative
          flex 
          w-[100%]
          min-[1024px]:w-[80%]
          mb-4
          min-[1024px]:mb-8
          min-[1920px]:mb-14
        ">
        <Image
          className=""
          src={firstBody}
          alt="HB electric built in electrical"
          sizes='80vw'
         
        />
      </div>
         <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <p className="
        text-center 
        mb-6 
        font-[gillsans]   
        min-[1024px]:text-center 
        md:px-24
        min-[1024px]:px-36 
        min-[1920px]:px-72
        min-[1920px]:mb-14
        ">
        Elevate your commercial space with our custom electrical solutions in Utah.
         Our expert team specializes in designing
         and implementing tailored electrical systems to meet your specific needs.
        </p>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <p className="
        text-center 
        mb-6 
        font-[gillsans]   
        min-[1024px]:text-center 
        md:px-24
        min-[1024px]:px-36 
        min-[1920px]:px-72
        min-[1920px]:mb-14
        ">
         Whether you require comprehensive wiring and rewiring,
         efficient power distribution, or the installation of advanced security
          and safety systems, we've got you covered.
        </p>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <p className="
        text-center 
        mb-6 
        font-[gillsans]   
        min-[1024px]:text-center 
        md:px-24
        min-[1024px]:px-36 
        min-[1920px]:px-72
        min-[1920px]:mb-14
        ">
        Our skilled electricians ensure the seamless integration of data and communication systems,
         including structured cabling,
         data center installations, and telecommunication setups.
        </p>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <p className="
        text-center 
        mb-6 
        font-[gillsans]   
        min-[1024px]:text-center 
        md:px-24
        min-[1024px]:px-36 
        min-[1920px]:px-72
        min-[1920px]:mb-14
        ">
        We also offer HVAC electrical services, energy efficiency solutions,
          and specialized installations for machinery and equipment.
        </p>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <p className="
        text-center 
        mb-6 
        font-[gillsans]   
        min-[1024px]:text-center 
        md:px-24
        min-[1024px]:px-36 
        min-[1920px]:px-72
        min-[1920px]:mb-14
        ">
           Trust us for reliable electrical maintenance, code compliance, and inspections,
         ensuring a safe and efficient electrical
         environment for your commercial endeavors.
        </p>
       </motion.div>
       <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <p className="
        text-center 
        mb-6 
        font-[gillsans]   
        min-[1024px]:text-center 
        md:px-24
        min-[1024px]:px-36 
        min-[1920px]:px-72
        min-[1920px]:mb-14
        ">
         Experience top-notch craftsmanship as we transform your
          space with innovative and custom electrical solutions in Utah.
          &nbsp;
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#164775]
        " 
        href="tel:385-233-0350">Call 385-233-0350 to get started now</a>
        </p>
        </motion.div>
    </section>
   
    <section className="
    container 
    mx-auto 
    my-14 
    px-4
    py-4
    border-[#b46f40]
    rounded-md
    shadow-lg
    border
    md:border-4
    min-[1024px]:flex
    min-[1024px]:flex-col
    min-[1024px]:items-center
    ">
       <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <h2 className="
    text-3xl 
    text-center
    text-[#164775] 
    mb-4 
    font-bold 
    font-[encyclopaediea] 
    min-[1024px]:text-center
    min-[1024px]:mb-8
    ">Considerations When hiring a commercial electrician in Utah</h2>
    </motion.div>
    <div className="
          relative
          flex 
          w-[100%]
          mb-4
          min-[1024px]:w-[80%]
          min-[1024px]:mb-8
        ">
        <Image
          className=""
          src={consider}
          alt="HB electric built in electrical"
          sizes='80vw'
         
        />
      </div>
    <p className="
    text-center 
    mb-6 
    font-[gillsans]    
    md:px-24 min-[1024px]:px-36 
    min-[1920px]:px-72">
    
When hiring a commercial electrical contractor in Utah, it's crucial to consider key factors for
 a successful project.
 Verify the contractor's licenses and certifications to ensure compliance with state regulations.
    </p>
    <p className="
    text-center 
    mb-6 
    font-[gillsans]   
    md:px-24 
    min-[1024px]:px-36 
    min-[1920px]:px-72
    ">
    Evaluate their experience with similar projects to gauge proficiency in meeting the specific
     needs of commercial spaces. Seek references
     and reviews from previous clients to assess the contractor's reputation and work quality. 
    </p>
    <p className="
    text-center 
    mb-6 
    font-[gillsans]   
    md:px-24 
    min-[1024px]:px-36 
    min-[1920px]:px-72
    ">
    Additionally, confirm that the contractor carries adequate insurance coverage, including
     liability and worker's compensation, to protect all parties involved. Effective communication
     and responsiveness are essential attributes for smooth collaboration throughout the project
    </p>
    <p className="
    text-center 
    mb-6 
    font-[gillsans]   
    md:px-24 
    min-[1024px]:px-36 
    min-[1920px]:px-72
    ">
    Obtain a detailed and transparent cost estimate, along with a well-defined project timeline,
     for accurate budget planning and management. Lastly, ensure the contractor is familiar
     with local building codes and regulations in Utah to guarantee compliance and project success.
    </p>
    <div className="
    text-gray-800 
    font-[gill sans]   
    min-[1024px]:flex 
    min-[1024px]:flex-row 
    min-[1024px]:justify-center 
    min-[1024px]:mt-12
    min-[1024px]:mb-12
    ">
    <ul className="list-disc pl-6 min-[1024px]:w-[50%] font-[gillsans]">
    <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <li className="mb-4">
          <span className='font-bold text-[#164775]'>License and Certification:</span>
        &nbsp;
        Verify necessary licenses and certifications for commercial electrical work in Utah.
        </li>
      </motion.div>
      <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <li className="mb-4">
          <span className='font-bold text-[#164775]'>Experience:</span>
        &nbsp;
        Evaluate experience with similar projects to ensure proficiency in commercial spaces.
        </li>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <li className="mb-4">
          <span className='font-bold text-[#164775]'>References and Reviews:</span>
        &nbsp;
        Seek client references and reviews to assess reputation and work quality.
        </li>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <li className="mb-4">
          <span className='font-bold text-[#164775]'>Insurance Coverage:</span>
        &nbsp;
        Confirm adequate insurance coverage, including liability and worker's compensation.
        </li>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <li className="mb-4">
          <span className='font-bold text-[#164775]'>Communication Skills:</span>
        &nbsp;
        Assess communication and responsiveness for effective collaboration.
        </li>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <li className="mb-4">
          <span className='font-bold text-[#164775]'>Transparent Cost Estimate:</span>
        &nbsp;
        Request a detailed cost estimate for accurate budget planning.
        </li>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <li className="mb-4">
          <span className='font-bold text-[#164775]'>Familiarity with Local Codes:</span>
        &nbsp;
        Confirm knowledge of and compliance with local building codes in Utah.
        </li>
        </motion.div>
    </ul>
    </div>
    </section>
   

    <div className="
    grid 
    grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-3 
    
    gap-8 
    container 
    mx-auto 
    my-8 
    px-4
    "
    > <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
     border-[#b46f40]
    rounded-md
    p-4
     shadow-lg
     border
     md:border-4
     h-full
    " 
    id="ei"
    >
        <h2 className="text-center text-3xl text-[#164775] mb-8  font-[encyclopaediea]">Electrical Installations</h2>
        <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={builtInCabinet}
          alt="HB electric built in electrical"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8 '>Wiring and rewiring</li>
        <li className='mb-8'>Lighting installations (including LED lighting)</li>
        <li className='mb-8'>Outlet and switch installations</li>
        <li className='mb-8'>Panel installations and upgrades</li>
        <li className='mb-8'>Circuit installations</li>
      </ul>
          <p className="text-center mb-6">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#b46f40]
        " 
        href="tel:385-233-0350">Learn More...</a>
          </p>
    </section>
    </motion.div>
 <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
     border-[#b46f40]
    rounded-md
     p-4
      shadow-lg
     border
     md:border-4
     h-full
    " 
    id="pd"
    >
        <h2 className="text-center text-3xl text-[#164775] font-[encyclopaediea]  mb-8">Power Distribution</h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">

        {/*<Image
          className=""
          src={customDoor}
          alt="HB electric custom door"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Distribution panel installs and maintenance</li>
        <li className='mb-8'>Sub-panel installations</li>
        <li className='mb-8'>Transformer installs</li>
        <li className='mb-8'>Power factor correction</li>
     </ul>
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#b46f40]
        " 
        href="tel:385-233-0350">Learn More...</a>
          </p>
    </section>
    </motion.div>
 <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
     border-[#b46f40]
    rounded-md
     p-4
      shadow-lg
     border
     md:border-4
     h-full
    " 
    id="emes"
    >
        <h2 className="text-center text-3xl text-[#164775] font-[encyclopaediea]  mb-8">Emergency Electrical Services</h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={customStairs}
          alt="HB electric custom staircase"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Emergency lighting installations</li>
        <li className='mb-8'>Generator installations and maintenance</li>
        <li className='mb-8'>Uninterruptible Power Supply (UPS) installations</li>
     </ul>
          <p className="text-center mb-6 font-[gill sans]  ">
         
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#b46f40]
        " 
        href="tel:385-233-0350">Learn More...</a>
          </p>
    </section>
    </motion.div>
 <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    text-center 
    mb-8 
    flex 
    flex-col 
    items-center
     border-[#b46f40]
    rounded-md
     p-4
      shadow-lg
     border
     md:border-4
     h-full
    " 
    id="sss"
    >
        <h2 className="text-center text-3xl text-[#164775] font-[encyclopaediea]  mb-8">Security and Safety Systems</h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={woodenFloor}
          alt="HB electric wooden flooring"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Fire alarm system installations and maintenance</li>
        <li className='mb-8'>Security system installations (CCTV, access control)</li>
        <li className='mb-8'>Smoke and carbon monoxide detector installations</li>
     </ul>
        <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#b46f40]
        " 
        href="tel:385-233-0350">Learn More...</a>
          </p>
    </section>
    </motion.div>
 <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
     border-[#b46f40]
    rounded-md
     p-4
      shadow-lg
     border
     md:border-4
     h-full
    " 
    id="dcs"
    >
        <h2 className="text-center text-3xl text-[#164775] font-[encyclopaediea]  mb-8">Data and Communication Systems</h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={woodRestore}
          alt="HB electric wood restoration and replication"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Structured cabling installations</li>
        <li className='mb-8'>Data center electrical installations</li>
        <li className='mb-8'>Telecommunication system installations</li>
    </ul>
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#b46f40]
        " 
        href="tel:385-233-0350">Learn More...</a>
          </p>
    </section>
    </motion.div>
 <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
     border-[#b46f40]
    rounded-md
     p-4
      shadow-lg
     border
     md:border-4
     h-full
    " 
    id="hes"
    >
        <h2 className="text-center text-3xl text-[#164775] font-[encyclopaediea]  mb-8">HVAC Electrical Services</h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={millwork}
          alt="HB electric custom millwork"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li>Installation and maintenance of electrical components in heating, ventilation, and air conditioning (HVAC) systems</li>
     </ul>
          <p className="text-center mb-6 font-[gill sans]  ">
         
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#b46f40]
        " 
        href="tel:385-233-0350">Learn More...</a>
          </p>
    </section>
    </motion.div>
 <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
     border-[#b46f40]
    rounded-md
     p-4
      shadow-lg
     border
     md:border-4
     h-full
    " 
    id="ees"
    >
        <h2 className="text-center text-3xl text-[#164775] font-[encyclopaediea]  mb-8">Energy Efficiency Solutions</h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={remodeling}
          alt="HB electric home renovation and remodeling"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Energy audits</li>
        <li className='mb-8'>Installation of energy-efficient lighting and appliances</li>
        <li className='mb-8'>Power monitoring and management systems</li>
     </ul>
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#b46f40]
        " 
        href="tel:385-233-0350">Learn More...</a>
          </p>
    </section>
    </motion.div>
 <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
     border-[#b46f40]
    rounded-md
     p-4
      shadow-lg
     border
     md:border-4
     h-full
    " 
    id="ldc"
    >
        <h2 className="text-center text-3xl text-[#164775] font-[encyclopaediea]  mb-8">Lighting Design and Control</h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={shelving}
          alt="custom shelving and storage from HB electric in utah"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Interior and exterior lighting design</li>
        <li className='mb-8'>Lighting control system installations (smart lighting systems)</li>
    </ul>
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#b46f40]
        " 
        href="tel:385-233-0350">Learn More...</a>
          </p>
    </section>
    </motion.div>

 <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >

    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
     border-[#b46f40]
    rounded-md
     p-4
      shadow-lg
     border
     md:border-4
     h-full
    " 
    id="em"
    >
        <h2 className="text-center text-3xl text-[#164775] font-[encyclopaediea]  mb-8">Electrical Maintenance</h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={shelving}
          alt="custom shelving and storage from HB electric in utah"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Regular inspections and maintenance of electrical systems</li>
        <li className='mb-8'>Troubleshooting and repairs</li>
        <li className='mb-8'>Electrical system upgrades</li>
    </ul>
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#b46f40]
        " 
        href="tel:385-233-0350">Learn More...</a>
          </p>
    </section>
    </motion.div>
    <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
     border-[#b46f40]
    rounded-md
     p-4
      shadow-lg
     border
     md:border-4
     h-full
    " 
    id="cci"
    >
        <h2 className="text-center text-3xl text-[#164775] font-[encyclopaediea]  mb-8">Code Compliance and Inspections</h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={shelving}
          alt="custom shelving and storage from HB electric in utah"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Ensuring compliance with local electrical codes and regulations</li>
        <li className='mb-8'>Conducting electrical inspections</li>
    </ul>
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#b46f40]
        " 
        href="tel:385-233-0350">Learn More...</a>
          </p>
    </section>
    </motion.div>
    <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
     border-[#b46f40]
    rounded-md
     p-4
      shadow-lg
     border
     md:border-4
     h-full
    " 
    id="si"
    >
        <h2 className="text-center text-3xl text-[#164775] font-[encyclopaediea]  mb-8">Specialized Installations</h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={shelving}
          alt="custom shelving and storage from HB electric in utah"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Installation of specialized equipment (e.g., machinery, industrial equipment)</li>
        <li className='mb-8'>Power quality analysis and solutions</li>
    </ul>
        <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#b46f40]
        " 
        href="tel:385-233-0350">Learn More...</a>
          </p>
    </section>
    </motion.div>
    <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
    border-[#b46f40]
    rounded-md
     p-4
     shadow-lg
     border
     md:border-4
     h-full
    " 
    id="ti"
    >
        <h2 className="text-center text-3xl text-[#164775] font-[encyclopaediea]  mb-8">Tenant Improvements</h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={shelving}
          alt="custom shelving and storage from HB electric in utah"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Electrical work to accommodate changes or improvements in commercial spaces</li>
        <li className='mb-8'>Upgrades to meet the electrical needs of new tenants</li>
      </ul>
        
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#b46f40]
        " 
        href="tel:385-233-0350">Learn More...</a>
          </p>
    </section>
    </motion.div>
</div>

      
    </div>
    </>
  );
}
