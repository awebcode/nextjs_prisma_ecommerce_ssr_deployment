// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { MdDelete } from "react-icons/md";
// import toast, { Toaster } from "react-hot-toast";

// function Cart() {
//   let [count, setCount] = useState(1);
//   const [total, setTotal] = useState(0);
//   const [price, setprice] = useState(20);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const cartItems = window.localStorage.getItem("cartItems");
//     if (cartItems) {
//       setCart(JSON.parse(cartItems));
//     }
//   }, []);

//   function removeItem(id) {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.filter((item) => item.id !== id);
//       window.localStorage.setItem("cartItems", JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   }

//   useEffect(() => {
//     // Calculate total price when cart changes
//     let totalPrice = 0;
//     cart.forEach((item) => {
//       totalPrice += item.price * count;
//     });
//     setTotal(totalPrice);
//   }, [cart]);
//   function updateCount(index, action) {}

//   return (
//     <>
//       <Toaster position="top-center" />
//       {/* component */}
//       <div className="bg-white py-16 rounded-md w-full container">
//         <div>
//           <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
//             <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
//               <table className="min-w-full leading-normal">
//                 <thead>
//                   <tr>
//                     <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                       Name
//                     </th>
//                     <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                       Price
//                     </th>
//                     <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                       Quantity
//                     </th>
//                     <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                       Total
//                     </th>
//                     <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>

//                 {cart.map((item, index) => (
//                   <tbody key={index}>
//                     <tr>
//                       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                         <div className="flex items-center">
//                           <div className="flex-shrink-0  ">
//                             <Image
//                               src={item.imagurl}
//                               width={500}
//                               className="w-16 h-16 object-contain  rounded-full"
//                               height={500}
//                               alt="Picture of the author"
//                             />
//                           </div>
//                           <div className="ml-3">
//                             <p className="text-gray-900 whitespace-no-wrap">
//                               Vera Carpenter
//                             </p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                         <p className="text-gray-900 whitespace-no-wrap">
//                           {item.price}
//                         </p>
//                       </td>
//                       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                         <div className="flex gap-3">
//                           <button
//                             onClick={() => updateCount(index, "decrement")}
//                           >
//                             -
//                           </button>
//                           <span>{item.quantity}</span>
//                           <button
//                             onClick={() => updateCount(index, "increment")}
//                           >
//                             +
//                           </button>
//                         </div>
//                       </td>
//                       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                         <p className="text-gray-900 whitespace-no-wrap">
//                           ${total}
//                         </p>
//                       </td>
//                       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                         <span
//                           onClick={() => removeItem(item.id)}
//                           className="relative"
//                         >
//                           <MdDelete size={25} />
//                         </span>
//                       </td>
//                     </tr>
//                   </tbody>
//                 ))}
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cart;
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import Card from "../card";
function Cart({ data }) {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartItems = window.localStorage.getItem("cartItems");
    if (cartItems) {
      const parsedCartItems = JSON.parse(cartItems);
      const uniqueItems = removeDuplicateItems(parsedCartItems);
      setCart(uniqueItems);
      setQuantities(uniqueItems.map((item) => item.quantity));
      // Calculate total price when cart loads
      let totalPrice = 0;
      uniqueItems.forEach((item, index) => {
        totalPrice += item.price * item.quantity;
      });
      setTotal(totalPrice);
    }
  }, []);

  useEffect(() => {
    // Calculate total price when quantities change
    let totalPrice = 0;
    cart.forEach((item, index) => {
      totalPrice += item.price * quantities[index];
    });
    setTotal(totalPrice);
  }, [cart, quantities]);

  function removeItem(id) {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      window.localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
    setQuantities((prevQuantities) => {
      const updatedQuantities = [...prevQuantities];
      const removedItemIndex = cart.findIndex((item) => item.id === id);
      const removedItemQuantity = quantities[removedItemIndex];
      updatedQuantities.splice(removedItemIndex, 1);
      return updatedQuantities;
    });
  }

  function updateCount(index, action) {
    setQuantities((prevQuantities) => {
      const updatedQuantities = [...prevQuantities];
      if (action === "decrement") {
        if (updatedQuantities[index] > 1) {
          updatedQuantities[index]--;
        }
      } else if (action === "increment") {
        updatedQuantities[index]++;
      }
      return updatedQuantities;
    });
  }

  function removeDuplicateItems(items) {
    const uniqueItemsMap = new Map();
    items.forEach((item) => {
      const existingItem = uniqueItemsMap.get(item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        uniqueItemsMap.set(item.id, { ...item, quantity: 1 });
      }
    });
    return Array.from(uniqueItemsMap.values());
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className="bg-white py-16 rounded-md w-full container">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <Image
                            src={item.imagurl}
                            width={500}
                            height={500}
                            className="w-16 h-16 object-contain rounded-full"
                            alt="Product"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        ${item.price}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b select-none border-gray-200 bg-white text-sm">
                      <div className="flex gap-3">
                        <button onClick={() => updateCount(index, "decrement")}>
                          -
                        </button>
                        <span>{quantities[index]}</span>
                        <button onClick={() => updateCount(index, "increment")}>
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        ${item.price * quantities[index]}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span
                        onClick={() => removeItem(item.id)}
                        className="relative"
                      >
                        <MdDelete size={25} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex items-center justify-between w-full  px-5 py-5">
              <h1 className=" text-lg font-medium">Total Price</h1>
              <h1 className="text-lg font-medium">$ {total}</h1>
            </div>
            <div className="flex items-center justify-end w-full  px-5 py-5">
              <Link
                href={`/checkout?total_price=${total}&cart_items=${JSON.stringify(
                  cart
                )}`}
                className=" text-lg hover:bg-red-400 cursor-pointer select-none font-medium bg-red-500 px-3 text-white py-2 rounded-md"
              >
                CheckOut
              </Link>
            </div>
          </div>
        </div>

        <div className="  text-center ">
          <h1 className=" text-[#2B2B2D] text-2xl"> Popular Products</h1>
          <p className=" text-[#7A7A7A] mt-2 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            quas placeat voluptates provident natus vero nemo illo, <br />{" "}
            voluptatibus iure beatae, unde facere sapiente at eligendi. Sint
            maiores officiis et voluptates.
          </p>
          <Card data={data} />
        </div>
      </div>
    </>
  );
}

export default Cart;
