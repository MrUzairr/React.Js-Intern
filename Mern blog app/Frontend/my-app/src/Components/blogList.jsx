import React, { useEffect, useState } from 'react';

export default function BlogList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://working-separate-gateway.glitch.me/getBlogData');
      const jsonData = await response.json();
      setData(jsonData);
    }
    getData();
  }, []);


  return (
    <div className='bloglist'>
      <div className='bloglist-wrap'>
        {data.map((item) => (
          <div className='blog-content' key={item.id}>
            <div>
              <img
                src={`https://working-separate-gateway.glitch.me/images/${item.image}`}
                className='blog-content-image'
                width={'300px'}
                height={'300px'}
                alt=''
              />
              <p style={{fontSize:'20px',textAlign:'center',backgroundColor:'#C9EDF4',margin:'0 20px',borderRadius:'10px'}}>Author:<span style={{color:'#0f52ba',textTransform:'capitalize'}}> {item.author}</span></p>
              <div
                style={{margin:'10px 20px'}}
                className='blog-content-data'
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

