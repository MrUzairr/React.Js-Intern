import React from 'react'

export default function BlogList(/*blogs*/) {

  const handleDeleteBlog = () => {
    localStorage.removeItem('blogData');
    window.open('/','_self');
    alert('Successfully Deleted');
    alert('Created Another');
    window.open('/create','_self');    
  }
  const handleClick = (id) =>
  {
    localStorage.setItem('blogId',id);
    window.open('/blog-detail','_self');
  } 
  let getData = JSON.parse(localStorage.getItem('blogData'));
  const processBlogContent = (content) => {
    const parser = new DOMParser();
    const parsedContent = parser.parseFromString(content, 'text/html');

    const images = parsedContent.getElementsByTagName('img');

    const imageWidth = '350px'; // Set your desired width here
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
    <div className='bloglist'>
        {
        <div className='bloglist-wrap'>
       {getDataWithStyles.map((blog) => (
          <div className='blog-content' key={blog.id}>
            <div onClick={()=>handleClick(blog.id)}
              className='blog-content-data'
              dangerouslySetInnerHTML={{ __html: blog.contentWithStyles }}
            />
          </div>
        ))}
        </div>
        }
      {/* {blogs.map(blog=><BlogItem blog={blog} key={blog.id}/>)} */}
      <center>
      <button className='deleteBtn' onClick={handleDeleteBlog}>Delete Blog</button>
      </center>
    </div>
  )
}
