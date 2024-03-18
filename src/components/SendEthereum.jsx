import { curve, heroBackground } from "../assets";
import Button from "./Button";
import React, { useState } from 'react'
// import Web3 from 'web3'
// import ABI from "./ABI.json"

import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { useNavigate } from "react-router-dom";

const SendMoney = () => {
  const parallaxRef = useRef(null);
 
 
  //   const [Options , setOptions] = useState([]);
// const web3=new Web3(window.ethereum);
const contactAdd="0x6Bf83e97d528548cfc2cF1112E2da5a41d6Ea087";
const [receiver,setRecevier]=useState("0xc2Dc8760d8eA1027F066829123Ecdb7698861545");
const [amount,setAmount]=useState(null);
const [message,setMessage]=useState(null);
const [keyword,setKeyword]=useState(null);
const [contract,setContract]=useState(null);


  const sendEther=async(e)=>{
//      e.preventDefault();
//     setContract(new web3.eth.Contract(ABI,contactAdd));
//       const ca=await window.ethereum.request({method:"eth_requestAccounts"});

//     // get sender from db
//      const sender=ca[0];

//    let params=[{
//     from:sender,
//     to:receiver,
//     gas:Number(21000).toString(16),
//     gasPrice:Number(2500000).toString(16),
//     value:Number(1000000000000).toString(16),

//    }]
//    let res=await window.ethereum.request({method:"eth_sendTransaction",params}).catch((err)=>console.log(err));
// const res1=contract.methods.addToBlockchain(receiver,amount,message,keyword).send({from:sender});
    
// console.log(res);

}



  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
         
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                {/* send money component */}
                <form className="max-w-sm mx-auto mt-8 gap-4">
    
    <form className="max-w-sm mx-auto gap-4">
      <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 text-white">Select the sender</label>
      <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    
        <option>Prakhar</option>
        <option>Nouditya</option>
        <option>Neeraj</option>
        <option>Natwar</option>
      </select>
    </form>
    
        <div className="mb-5 text-black">
        <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 text-white">Amount</label>
        <input onChange={(e)=>setAmount(e.target.value)} type="" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter amount" required />
      </div>
      <div className="mb-5">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 text-white">Your Message</label>
        <input onChange={(e)=>setMessage(e.target.value)} type="text" id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Message" required />
      </div>
      <div className="mb-5">
        <label htmlFor="keyword" className="block mb-2 text-sm font-medium text-white ">Your keyword</label>
        <input onChange={(e)=>setKeyword(e.target.value)} type="text" id="keyword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Keyword' required />
      </div>
      
      <Button className="hidden lg:flex" href="#login" onClick={sendEther}>
          Send Money
        </Button>
    </form>
    
               
               
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      </div>

      <BottomLine />
    </Section>
  );
};

export default SendMoney;
