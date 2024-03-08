'use client';
import { useState,useEffect, useRef  } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
//hover coler #fde1e2
const Dropdown = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  const displayContact = pathname === '/Contact' ;
    // Close the dropdown when a link is clicked
    const closeDropdown = () => {
        setIsOpen(false);
      };
    

    // Close the dropdown when clicking outside
    useEffect(() => {
      //console.log(dropdownRef.current);
      
        function handleClickOutside(event) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
            console.log('clicking outside');
           // console.log(event.target);
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isOpen,dropdownRef]);

  return (
    <div className="relative inline-block text-left">
      <div className='p-2'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label="Dropdown menu button"
          className="text-[#8d6f57] hover:underline"
        >
          <FaBarsStaggered size={28} style={{color:'#b46f40'}} />
        </button>
      </div>

      {isOpen && (
        <div className="
         z-50
         origin-top-right
         absolute right-0
         mt-2
         w-48
         rounded-md
         shadow-lg 
         bg-[#FFFFFF] 
         ring-1 
         ring-black 
         ring-opacity-5 
         focus:outline-none
         "
         
         >
          <div 
          className="py-1" 
          role="menu" 
          aria-orientation="vertical" 
          aria-labelledby="options-menu" 
          ref={dropdownRef}>
        
         

         <Link
         onClick={() => {
          closeDropdown();
         }}
         href='/Contact'   
            className="
            block 
            px-4 
            py-2 
            text-[.8em] 
            text-[#164775] 
            hover:bg-[#b46f40]
            hover:text-[#d9b061]
            
             
            font-[encyclopaediea]
            " 
           
          
            >
              Contact Us
            </Link>
         <Link
         onClick={() => {
          closeDropdown();
         }}
         href='/'   
            className="
            block 
            px-4 
            py-2 
            text-[.8em] 
            text-[#164775] 
            hover:bg-[#b46f40]
            hover:text-[#d9b061]
            
             
            font-[encyclopaediea]
            " 
           
          
            >
              Home
            </Link>

{!displayContact ?
<>
         <span   
            className="
            block 
            px-4 
            py-2 
            text-[.8em] 
            text-[#164775] 
            hover:bg-[#b46f40]
            hover:text-[#d9b061]
            cursor-pointer
             
            font-[encyclopaediea]
            " 
            role="menuitem" 
            onClick={() => {
               const element = document.getElementById('ei');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
              Electrical Installations
            </span>
          <span 
            className="
            block 
            px-4 
            py-2 
            text-[.8em] 
            text-[#164775] 
            hover:bg-[#b46f40] 
            hover:text-[#d9b061]
            cursor-pointer
             
            font-[encyclopaediea]
            " 
            role="menuitem" 
            onClick={() => {
               const element = document.getElementById('pd');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
           Power Distribution
            </span>
           
            
            <span 
             
            className="
            block 
            px-4 
            py-2 
            text-[.8em] 
            text-[#164775] 
            hover:bg-[#b46f40]
            hover:text-[#d9b061]
             cursor-pointer
            font-[encyclopaediea]
            " 
            role="menuitem" 
            onClick={() => {
               const element = document.getElementById('emes');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
             Emergency Electrical Services
            </span>
            <span 
            className="
            block 
            px-4 
            py-2 
            text-[.8em] 
            text-[#164775] 
            hover:bg-[#b46f40] 
            hover:text-[#d9b061]
           cursor-pointer
            font-[encyclopaediea]
            " 
            role="menuitem" 
            onClick={() => {
               const element = document.getElementById('sss');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
              Security and Safety Systems
            </span>
            <span 
            className="
            block 
            px-4 
            py-2 
            text-[.8em] 
            text-[#164775] 
            hover:bg-[#b46f40] 
            hover:text-[#d9b061]
           cursor-pointer
            font-[encyclopaediea]
            " 
            role="menuitem" 
            onClick={() => {
               const element = document.getElementById('dcs');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
             Data and Communication Systems
            </span>
            <span
             className="
             block 
             block
             px-4 
             py-2 
             text-[.8em] 
             text-[#164775] 
             hover:bg-[#b46f40] 
             hover:text-[#d9b061]
            cursor-pointer
            font-[encyclopaediea]
             " 
             onClick={() => {
                const element = document.getElementById('hes');
                element?.scrollIntoView({
                    block:'nearest',
                 behavior: 'smooth'
                });
                 closeDropdown();
             }}
            >
                HVAC Electrical Services
              </span>
              <span 
            className="
            block 
            px-4 
            py-2 
            text-[.8em] 
            text-[#164775] 
            hover:bg-[#b46f40] 
            hover:text-[#d9b061]
            cursor-pointer
            font-[encyclopaediea]
            " 
            role="menuitem" 
            onClick={() => {
               const element = document.getElementById('ees');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
             Energy Efficiency Solutions
            </span>
            <span 
            className="
            block 
            px-4 
            py-2 
            text-[.8em] 
            text-[#164775] 
            hover:bg-[#b46f40] 
            hover:text-[#d9b061]
           cursor-pointer
            font-[encyclopaediea]
            " 
            role="menuitem" 
            onClick={() => {
               const element = document.getElementById('ldc');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
             Lighting Design and Control
            </span>

            <span 
            className="
            block 
            px-4 
            py-2 
            text-[.8em] 
            text-[#164775] 
            hover:bg-[#b46f40] 
            hover:text-[#d9b061]
           cursor-pointer
           
            font-[encyclopaediea]
            " 
            role="menuitem" 
            onClick={() => {
               const element = document.getElementById('em');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
           Electrical Maintenance
            </span>

            <span 
            className="
            block 
            px-4 
            py-2 
            text-[.8em] 
            text-[#164775] 
            hover:bg-[#b46f40] 
            hover:text-[#d9b061]
           cursor-pointer
           
            font-[encyclopaediea]
            " 
            role="menuitem" 
            onClick={() => {
               const element = document.getElementById('cci');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
           Code Compliance and Inspections
            </span>
            <span 
            className="
            block 
            px-4 
            py-2 
            text-[.8em] 
            text-[#164775] 
            hover:bg-[#b46f40] 
            hover:text-[#d9b061]
          cursor-pointer
            font-[encyclopaediea]
            " 
            role="menuitem" 
            onClick={() => {
               const element = document.getElementById('si');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
            Specialized Installations
            </span>
            <span 
            className="
            block 
            px-4 
            py-2 
            text-[.8em] 
            text-[#164775] 
            hover:bg-[#b46f40] 
            hover:text-[#d9b061]
            cursor-pointer
             
            font-[encyclopaediea]
            " 
            role="menuitem" 
            onClick={() => {
               const element = document.getElementById('ti');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
             Tenant Improvements
            </span>
           </>
            : null}
             
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;