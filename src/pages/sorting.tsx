import Link from "next/link"
import { useEffect, useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/Ai"
import {Button, Menu, MenuItem,Select} from '@mui/material';
const Sorting = () => {
    const [algo, setAlgo] = useState<String>("Algorithm");
    const [show, setShow] = useState(false);
  
    const [state, setState] = useState<any> ({
        arr: [{value:  Number,id:String}] ,
        method: "Algorithms",
        length:0,
        compare: { i: null, j: null},
        sorted: [],
        speed: 100
    })
    
    useEffect(() => {
        createArray();
    },[])

    const createArray = (e = Math.floor(window.innerWidth / 50) / 2) => {
        let arra: any[];
        arra = [];
        for (let i = 0; i < e; i++) {
             arra = [{
                 value: Math.floor(Math.random() * ((window.innerHeight / 4) - 30 + 1)) + 30,
                 id: "id-" + i
             }, ...arra];
         }
         setState({
             arr:arra,
             length: e,
             sorted: [],
             compare: { i: null, j: null } })
    }
    
  return (
      <div>
          <nav className="flex flex-row items-center justify-between px-4 py-2 bg-gray-200 drop-shadow-lg">
              <div className="w-[40%] flex flex-row items-center justify-between">    
              <h1 className="text-3xl mr-8">Sorting</h1>
              <ul className="flex flex-row justify-between w-[85%]">
                  <li><Link href="/">Home</Link></li>
                  <li className="cursor-pointer" onClick={()=>createArray()}>Reset</li>
                      <li>   
                          <h1 className='relative flex flex-row justify-between items-center gap-2 w-28' onMouseEnter={() => setShow(!show)}  >{algo} {show ? <AiOutlineArrowUp />:<AiOutlineArrowDown />}</h1>
                          <div className={`${show ? "block" : "hidden"} absolute bg-white  py-2  mt-4`} onMouseLeave={() => setShow(!show)}>
                              <li className="py-2 px-6 cursor-pointer hover:bg-gray-100" onClick={() => (setAlgo("Merge"), setShow(!show))}>Merge</li>
                              <li className="py-2 px-6 cursor-pointer hover:bg-gray-100" onClick={() => (setAlgo("Quick"), setShow(!show))}>Quick</li>
                              <li className="py-2 px-6 cursor-pointer hover:bg-gray-100" onClick={() => (setAlgo("Selection"), setShow(!show))}>Selection</li>
                          </div>
                      </li>

                  <li>Controls</li>
              </ul>
              </div>
              <button className="p-2 px-3 border-[1px] flex justify-self-end  cursor-pointer rounded-md text-[#2ed327] hover:bg-[#2ed327] hover:text-white border-[#2ed327]">
                  Sort
              </button>
          </nav>
    </div>
  )
}

export default Sorting