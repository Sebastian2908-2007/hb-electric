'use client'
import { useState } from "react";
const Contact = () => {
     // form state
     const [formData,setFormData] = useState({name:'',email:'',phone:'',description:''});
       // function to handle form field changes
       const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {name,email,phone,description} = formData;
       
        try{
      const response = await fetch('/api/Email',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email:email, name:name, phone:phone, description:description }),
        });
        if(response.ok) {
            window.location.reload();
        }
    }catch(e) {
        console.log(e);
    }
        console.log('submitted');
    };

    return(
        
        <div className="
        flex 
        flex-col 
        items-center 
        justify-center 
        min-h-screen 
        bg-gray-100 
        mt-8
        p-4
        min-[390px]:p-6
        min-[430px]:p-8
        min-[768px]:min-h-0
        min-[768px]:mt-44
        min-[1024px]:mt-14
        ">
  <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Name
      </label>
      <input 
      className="
      shadow 
      appearance-none 
      border 
      rounded 
      w-full 
      py-2 
      px-3 
      text-gray-700 
      leading-tight 
      focus:outline-none 
      focus:shadow-outline
      " 
      name="name" 
      type="text" 
      placeholder="Your name"
      onChange={handleChange}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input 
      className="
      shadow 
      appearance-none 
      border 
      rounded 
      w-full 
      py-2 
      px-3 
      text-gray-700 
      leading-tight 
      focus:outline-none 
      focus:shadow-outline
      " 
      name="email" 
      type="email" 
      placeholder="you@example.com"
      onChange={handleChange}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
        Phone Number
      </label>
      <input 
      className="
      shadow 
      appearance-none 
      border 
      rounded 
      w-full 
      py-2 
      px-3 
      text-gray-700 
      leading-tight 
      focus:outline-none 
      focus:shadow-outline
      " 
      name="phone" 
      type="tel" 
      placeholder="123-456-7890"
      onChange={handleChange}
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
        Description
      </label>
      <textarea 
      className="
      shadow 
      appearance-none 
      border 
      rounded 
      w-full 
      py-2 
      px-3 
      text-gray-700 
      leading-tight 
      focus:outline-none 
      focus:shadow-outline
      " 
      name="description" 
      placeholder="Add a small project description"
      onChange={handleChange} 
      rows="3"
      />
    </div>
    <div className="flex items-center justify-between">
      <button className="
      bg-[#b46f40] 
      hover:bg-[#164775] 
      text-white 
      font-bold 
      py-2 
      px-4 
      rounded 
      focus:outline-none 
      focus:shadow-outline
      " type="submit">
        Submit
      </button>
    </div>
  </form>
</div>

    );
};

export default Contact;