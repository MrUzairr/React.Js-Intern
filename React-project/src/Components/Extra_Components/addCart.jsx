import React from 'react'
import Navbar from './navbar';
import Footer from './footer';

class CartData{
    constructor(image,title,price,category){
        this.image = image;
        this.title = title;
        this.price = price;
        this.category = category;
    }
}
export default function AddCart(props) {
    const { image, title, price, description, category,rating,count } = props.location.state;
    const handleClick=(image,title,price,category)=>{

            let data = new CartData(image,title,price,category);
            let dataArray = JSON.parse(localStorage.getItem('Data')) || [];
            dataArray.push(data);
            localStorage.setItem('Data',JSON.stringify(dataArray));
            if(dataArray!=null){
                window.open('/cart','_self');
            }
          }
  return (
    <div>  
        <Navbar/>
        <div className='cart-container'>
            <div className='cart-content'>
                <div className="left">
                    <img src={image} alt="cartImage" />
                </div>
                <div className="right">
                    <h2>{title}</h2>
                    <h3>${price}</h3>
                    <p>{description}</p>
                    <button className='addcartBtn' onClick={()=>handleClick(image,title,price,category)}>add to cart</button>
                    <h4>category: {category}</h4>
                    <p className='rating'>Rating: {rating}</p>
                    <p className='rating' style={{color:'#143ed7'}}>Reviews: {count}</p>
    
                </div>
            </div>
        </div>
        <Footer/>
    </div>

  )
}
