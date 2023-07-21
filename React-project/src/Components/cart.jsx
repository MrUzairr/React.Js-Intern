import React, { useState, useEffect } from 'react';
import Navbar from './Extra_Components/navbar';
import Footer from './Extra_Components/footer';

export default function Cart() {
  const [data,setData] = useState([]);
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem('Data')) || [];
    setData(getData.map((item) => ({ ...item, count: 0 })));
  }, []);
  const handleClick = (price) => {
    // setCount((count) => count + 1);
    setData((prevData) =>
    prevData.map((item) =>
      item.price === price ? { ...item, count: item.count + 1 } : item
    )
  );
    // You can perform additional logic here based on the productId, like updating the quantity of the specific product in the local storage.
  };
  const handleData = () => {
    localStorage.removeItem('Data');
    window.open('/cart','_self');
    alert('Your Order is placed');
  }

  return (
    <div>
      <Navbar />
      <div className='cart-container'>
        <table className='cart-table'>
          <thead className='table-head'>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Order Now</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element,index)=>(
              <tr key={element.id}>
                <td><img src={element.image} width="100px" alt="productImage" /></td>
                <td>{element.title}</td>
                <td>{element.price}</td>
                <td>{element.category}</td>
                <td>{element.count}</td>
                <td><button onClick={() => handleClick(element.price)} style={{backgroundColor: '#007bff', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px'}} value='checkout'>Checkout</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className='submitData' onClick={handleData}>Add Your Cart</button>
      </div>
      <Footer />
    </div>
  );
}

    // let getData = JSON.parse(localStorage.getItem('Data')) || [];
    // text = getData.map((element) => (
    //   `<tr key="${element.id}">
    //     <td><img src=${element.image} width="100px" alt="productImage" /></td>
    //     <td>${element.title}</td>
    //     <td>${element.price}</td>
    //     <td>${element.category}</td>
    //     <td>${count}</td>
    //     <td><button onClick="${() => handleClick()}" style="background-color: #007bff; color: #fff; padding: 8px 16px; border: none; border-radius: 4px; ::" value='checkout'>Checkout</button></td>
    //   </tr>`
    // )).join('');
  
    // document.getElementById("cartData").innerHTML = text;

// import {React,useState,useEffect} from 'react'
// import Navbar from './navbar'
// import Footer from './footer'

// export default function Cart() {
//   const [count,setCount] = useState(0);
//   let text = '';
//   useEffect(()=>{
//     let getData = JSON.parse(localStorage.getItem('Data'));
    
//     getData.forEach((element)=(
//       text+=`
//       <tr>

//         <td><img src=${element.image} alt="productImage" /></td>
//         <td>${element.title}</td>
//         <td>${element.price}</td>
//         <td>${element.category}</td>
//         <td>${count}</td>
//         <td><button onClick=${handleClick}>checkout</button></td>
//       </tr>
//       `
//     ));
//   document.getElementById("cartData").innerHTML = text;
    
//   },[])
//   const handleClick = () =>{
//     setCount(count+1);
//   }
//   return (
//     <div>
//         <Navbar/>
//         <div className='cart-container'>
//           <table className='cart-table'>
//             <thead className='table-head'>
//               <tr>
//                 <th>Product</th>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Category</th>
//                 <th>Quantity</th>
//                 <th>Order Now</th>
//               </tr>
//             </thead>
//             <tbody id='cartData'>

//             </tbody>
//           </table>
//         </div>
//         <Footer/>
//     </div>
//   )
// }
