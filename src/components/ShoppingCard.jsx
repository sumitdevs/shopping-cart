import {useState} from 'react'
import { MdDelete } from "react-icons/md";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";
import { BsFillTagFill } from "react-icons/bs";

function ShoppingCard({item,onAdd,onMinus}) {
    const {imgUrl,title,price} = item;
    const [count,setCount] = useState(1);
  return (
            <div className="flex gap-x-4 sm:gap-x-10 justify-between shadow-lg p-4 bg-white rounded-lg">
                <div className="h-36 w-36">
                    <img className="h-full w-full object-fill " src={imgUrl} alt="" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <div>
                            <h5>{title}</h5>
                            <p className="text-heading-h6">${price}</p>
                        </div>
                        <a href="#"><MdDelete className="text-4xl" /></a>
                    </div>
                    <div className="flex justify-end">
                        <div className="flex gap-x-4">
                            <button onClick={()=>{if(count>1){onMinus(item);setCount(count-1)}}} ><TiMinus /></button>
                            <span className="bg-accent-900 text-white rounded-sm px-3 py-0.5 sm:px-6 sm:py-1.5 ">AddTo&nbsp;{count}</span>
                            <button onClick={()=>{onAdd(item);setCount(count+1)}}><FaPlus /></button>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default ShoppingCard