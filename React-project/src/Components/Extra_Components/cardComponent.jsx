import {React,useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';

export default function CardComponent(props) {
    const [data,setData] = useState([]);
    useEffect(()=>{
      async function fetchData(){
        const response = await fetch('https://fakestoreapi.com/products');
        const responseData = await response.json();
        setData(responseData);
        console.log(responseData);
  
      }
      fetchData();
    },[]);

    const history = useHistory();
    const handleCart=(image,title,price,description,category,rating,count)=>{
      history.push({
        pathname:'/addcart',
        state:{
          image,
          title,
          price,
          description,
          category,
          rating,
          count
        }

      })
    }
  return (
    <div>
      <div className='container'>
        <h1>{props.pagetitle}</h1>
        <div className="content">
            <div>
                {data.slice(0,props.limit).map((item)=>(
                <div className='card'>
                    <img src={item.image} alt="itemImg" />
                    <h2 className='title'>{item.title}</h2>
                    <h3>Rating {item.rating.rate}</h3>
                    <h2 className='price'>$ {item.price}</h2>
                    <p>{item.description}</p>
                    <button onClick={()=>handleCart(item.image,item.title,item.price,item.description,item.category,item.rating.rate,item.rating.count)}  className='buyBtn'>Buy Now</button>
                </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}
