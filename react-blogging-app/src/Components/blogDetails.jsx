import React from 'react'
import BlogDetailHeader from './blogDetailHeader'

export default function BlogDetails() {
    
    let getId = localStorage.getItem('blogId');
    let getData = JSON.parse(localStorage.getItem('blogData'));
        const processBlogContent = (content) => {
            const parser = new DOMParser();
            const parsedContent = parser.parseFromString(content, 'text/html');
        
            const images = parsedContent.getElementsByTagName('img');
        
            const imageWidth = '450px'; // Set your desired width here
            for (let i = 0; i < images.length; i++) {
              images[i].style.maxWidth = imageWidth;
            }
        
            return parsedContent.documentElement.outerHTML;
          };
          const getDataWithStyles = getData.map((blog) => {
            const contentWithStyles = processBlogContent(blog.content);
            return { ...blog, contentWithStyles };
          });

  return (
      <div>
        <BlogDetailHeader/>
        <div className='bloglist'>
        {
        <div className='bloglist-wrap'>
       {getDataWithStyles.map((blog) => (
           getId===blog.id?(
          <div className='blog-content' key={blog.id}>
            <div
              className='blog-content-data'
              dangerouslySetInnerHTML={{ __html: blog.contentWithStyles }}
            />
          </div>
        ):console.log('wait for matching')
        ))}
        </div>
        }
    </div>

    </div>
  )
}
