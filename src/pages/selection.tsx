import Link from "next/link"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SelectionSort from "../algoritm/selection";

const springAnim = {
    type: "spring",
    damping: 20,
    stiffness: 300
};
const Sorting = () => {
    const [dropdown, setDropdown] = useState(false);
    const [screenWidth, setScreenWidth] = useState<number>(600);
    type arrayish = {
        arr: { value: Number, id: String, style?: string }[],
        method: string,
        length: number,
        compare: { i: any, j: any },
        sorted: { value: Number, id: String }[],
        speed: number
    }
    const [state, setState] = useState<arrayish>({
        arr: [],
        method: "Algorithms",
        length: 0,
        compare: { i: null, j: null },
        sorted: [],
        speed: 100
    })

    useEffect(() => {
        createArray();
    }, [])

    const createArray = (e = Math.floor(window.innerWidth / 50) / 2) => {
        console.log(Math.floor(window.innerWidth / 50) / 2, e)
        setScreenWidth(window.screen.width);
        let arra: { value: Number, id: String }[];
        arra = [];
        for (let i = 0; i < e; i++) {
            arra = [{
                value: Math.floor(Math.random() * ((window.innerHeight / 4) - 30 + 1)) + 30,
                id: "id-" + i
            }, ...arra];
        }
        setState({
            arr: arra,
            method: "Algorithm",
            length: e,
            sorted: [],
            compare: { i: null, j: null },
            speed: 100
        })
    }

    const handleSpeed = (e: any) => {
        console.log(e.currentTarget.value);
        setState({
            ...state, speed: 1100 - e.currentTarget.value
        })

    }
    const changeArray = (e: any) => {
        createArray(e.target.value)
    }

    const sortFucn = (e: any) => {
        e.preventDefault();
        var arr = state.arr;
        let length = state.arr.length;
        var results: any = [];
        results = SelectionSort(arr, length);
        for (let i = 0; i < results.length; i++) {
            setTimeout(() => {
                setState({
                    ...state, arr: results[i]
                })
            }, state.speed * i)
        }

    }


    return (
        <div className="relative flex flex-col content-between">
            <div>
                <nav className="flex flex-row items-center  justify-between px-4 py-2 bg-gray-200 drop-shadow-lg">
                    <div className="sm:w-[90%] w-full flex flex-row items-center ">
                        <h1 className="sm:text-3xl text-2xl sm:mr-8 mr-0">Selection Sort</h1>
                        <ul className="flex flex-row justify-between sm:w-[45%]">
                            <li className="cursor-pointer py-1 px-4 hover:bg-[#5BC9B1] hover:rounded-md hover:text-white"><Link href="/">Home</Link></li>
                            <li className="cursor-pointer py-1 px-4 hover:bg-[#5BC9B1] hover:rounded-md hover:text-white" onClick={() => createArray()}>Reset</li>
                            <li>
                                <h1 className="cursor-pointer py-1 px-4 hover:bg-[#5BC9B1] hover:rounded-md hover:text-white" onClick={() => setDropdown(!dropdown)}>Controls</h1>
                            </li>
                        </ul>
                    </div>

                    <button onClick={(e) => sortFucn(e)} className="p-2 px-4 border-[1px] sm:flex hidden justify-self-end  cursor-pointer rounded-md text-[#5BC9B1] hover:bg-[#5BC9B1] hover:text-white border-[#5BC9B1]">
                        Sort
                    </button>
                </nav>
                <div className={` ${dropdown ? "block" : "hidden"} absolute left-[42%] z-10 bg-white p-4`}>
                    <li className="flex flex-col">
                        <input type="range" min="100" max="1000" onChange={(e) => handleSpeed(e)} defaultValue={"500"} />
                        <a>Increase Speed</a>
                        <input type="range" min="2" onChange={(e) => changeArray(e)} max={Math.floor(screenWidth / 50)} defaultValue={Math.floor((screenWidth / 50) / 2)} />
                        <a>Increase Array size</a>
                    </li>
                </div>
                <div className=" flex justify-center text-center" onClick={() => setDropdown(false)} style={{ margin: "20px" }}>
                    {
                        (state.arr.map((element: any, index: number) =>
                            <motion.div
                                key={element.id}
                                layout transition={springAnim}
                                className={`pt-2 inline-block text-white w-10 ml-2 bg-[#5bc9b1] ${element.style}`}
                                id={element.id}
                                style={{ height: element.value * 3, order: index }}
                            >

                                {element.value}
                            </motion.div>

                        ))}
                </div>
            </div>
            <button onClick={(e) => sortFucn(e)} className="p-2 px-4 border-[1px] sm:hidden block justify-self-end  cursor-pointer rounded-md text-[#5BC9B1] hover:bg-[#5BC9B1] hover:text-white border-[#5BC9B1]">
                Sort
            </button>
        </div>
    )
}

export default Sorting