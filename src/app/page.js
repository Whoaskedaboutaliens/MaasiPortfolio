"use client"

import { Limelight } from "next/font/google";
import Image from "next/image";
import Link from "next/link";


const limelight = Limelight(
  {
    preload: false,
    subsets:['latin'],
    weight:['400']
  }
);

export default function Home() {


  const handleMainImage = (num) =>{
    const imageElement = document.getElementById('center-image');

    // Clear any existing image content
    imageElement.innerHTML = '';
  
    // Construct the image path based on the passed number
    const imagePath = `/p${num}.jpeg`; // Assuming image names follow the format p<num>.jpeg
  
    // Create the image element with dynamic attributes
    const image = document.createElement('img');
    image.src = imagePath;
    image.width = 200;
    image.height = 500;
    image.alt = "bruh"
    image.className = "group-hover:scale-110 transition duration-300 ease-in-out"

    // Create a container element (optional for styling)
    const container = document.createElement('span');
    container.className = 'cursor-grabbing'; // Add any desired class names here
  
    // Append the image to the container (optional)
    container.appendChild(image);
  
    // Append the container (or directly append the image) to the center-image div
    imageElement.appendChild(container); // Or imageElement.appendChild(image);
  }

  return (
    <div className="">
    <div className={` ${limelight.className} `}>
      <div className=" text-center text-4xl mt-16 p-2 ">
        Shweta Tyagi
      </div>
      
      <nav className="text-2xl flex text-center justify-center flex-wrap">
        <div className="m-4 px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out group"> 
          <Link href='/'> <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out" >HOME</span></Link>
        </div>
        <div className="m-4 px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out group"> 
         <Link href='/Opus'> <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out" >OPUS</span></Link>
        </div>
        {/* <div className="m-4 py-2 cursor-pointer transition-all duration-300 ease-in-out group"> 
        <Link href='/About'>  <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out" >ABOUT</span></Link>
        </div> */}
        <div className="m-4 p-2 cursor-pointer transition-all duration-300 ease-in-out group"> 
        <Link href='/Contact'>  <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out" >CONTACT</span></Link>
        </div>
      </nav>
        <div id="image-showcase" className="flex flex-col items-center">
            <div id="center-image" className="m-16 group p-4">
            <span className="cursor-grabbing "><Image src='/p1.jpeg' className="group-hover:scale-110 transition duration-300 ease-in-out" width={200} height={500}/></span>
            </div>
            <div id="image-list" className="m-4 p-4">
              <div className="flex flex-wrap">
                <Image onClick={()=>handleMainImage(1)} className="p-4 hover:transform hover:translate-y-4 hover:cursor-grab transition duration-300 ease-in-out" src='/p1.jpeg' width={100} height={100}/>
                <Image onClick={()=>handleMainImage(2)} className="p-4 hover:transform hover:translate-y-4 hover:cursor-grab transition duration-300 ease-in-out" src='/p2.jpeg' width={100} height={100}/>
                <Image onClick={()=>handleMainImage(3)} className="p-4 hover:transform hover:translate-y-4 hover:cursor-grab transition duration-300 ease-in-out" src='/p3.jpeg' width={100} height={100}/>
                <Image onClick={()=>handleMainImage(4)} className="p-4 hover:transform hover:translate-y-4 hover:cursor-grab transition duration-300 ease-in-out" src='/p4.jpeg' width={100} height={100}/>
                <Image onClick={()=>handleMainImage(5)} className="p-4 hover:transform hover:translate-y-4 hover:cursor-grab transition duration-300 ease-in-out" src='/p5.jpeg' width={100} height={100}/>
                <Image onClick={()=>handleMainImage(6)} className="p-4 hover:transform hover:translate-y-4 hover:cursor-grab transition duration-300 ease-in-out" src='/p6.jpeg' width={100} height={100}/>
              </div>
            
            </div>
        </div>
      
    </div>
    </div>
  );
}
