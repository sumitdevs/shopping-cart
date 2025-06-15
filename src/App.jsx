
import {useState} from "react"
import { FaChevronLeft } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import ShoppingCard from "./components/ShoppingCard";
import products from "./data/products";
import { BsFillTagFill } from "react-icons/bs";


function App() {
  const productObject = Object.fromEntries(
  products.map((item) => [item.id, item])
);
  const [cart, setCart] = useState({...productObject});
  const handleAdd =(item)=>{
    setCart((prev)=>{
      const existing = prev[item.id] || {...item};
      return {
        ...prev,
        [item.id]:{
          ...existing,
          quantity:existing.quantity +1,
        },
      };
    });
  };

  const handleMinus =(item)=>{
    setCart((prev)=>{
      const existing = prev[item.id] || {...item};
      return {
        ...prev,
        [item.id]:{
          ...existing,
          quantity:existing.quantity -1,
        },
      };
    });
    
  };


const cartItems = Object.values(cart);
let total = 0;
  return (
    <>
      <main className="">
        <section id="checkout" className="h-full">
          <div id="checkout-wrapper" className="bg-red-100 py-4  h-full" >
            <div id="checkout-container" className="px-4 rounded-lg h-full pb-10 w-full max-w-5xl mx-auto bg-gray-50">
              <div className="text-xl flex justify-between py-6 items-center">
                <a className="text-4xl" href="#"><FaChevronLeft /></a>
                <h4>Item carts</h4>
                <a className="text-4xl relative" href="#"> 
                  <HiMiniShoppingBag  />
                  <span className=" h-6 w-6 absolute top-0 -right-2 flex items-center justify-center rounded-full bg-white text-accent-900 text-xs">3</span>
                </a>
              </div>
              <div className="mt-10 sm:mt-14">
                <h3>Your Food Cart</h3>
                <div className="mt-8 flex flex-col gap-y-4">
                   {products.map((item,idx)=>(
                    <ShoppingCard onAdd={handleAdd} key={idx} item={item} onMinus={handleMinus} />
                   ))}
                </div>
                <div className="flex border-2 px-4 overflow-hidden rounded-lg mt-16 bg-white  border-gray-300 items-center">
                  <input className="w-full  bg-white  py-4 outline-none" type="text" placeholder="Add Your Promo Code" />
                  <BsFillTagFill className="text-accent-900 text-4xl"/>
                </div>
                <div className="px-6 py-8 rounded-lg shadow-lg bg-white mt-4">
                  {(cartItems).map((data,idx)=>(
                    <div key={idx} className="flex justify-between">
                    <span>{data.title}</span>
                    <span>${(data.quantity*data.price).toFixed(2)}</span>
                  </div>
                  ))}
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <strong>{cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</strong>
                  </div>
                </div>
                <div className="flex gap-y-4 flex-col mt-10">
                  <h3>Payment Method</h3>
                  <div className="flex gap-x-4 shadow-lg bg-white py-8 px-6 rounded-lg">
                    <div className="h-10 w-12 overflow-hidden">
                      <img className="object-cover w-full h-full" src="/img/card.png" alt="" />
                    </div>
                    <p>Credit/Debit card</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
