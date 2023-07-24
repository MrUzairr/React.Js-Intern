import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import BlogHeader from './blogHeader'

class BlogData {
  constructor(id, content) {
    this.id = id;
    this.content = content;
  }
}

export default function CreateBlog() {
  const quillRef = useRef(null);
  const [text, setText] = useState('');
  const [blogs, setBlogs] = useState([]);

  const modules = {
    toolbar: [
      [{ header: [1, false] }],
      ['link'],
      ['image'],
      ['clean'],
    ],
  };
  const formats = ['header', 'link', 'image'];

  const handleText = () => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      const content = editor.root.innerHTML;
      setText(content);
    }
  };

  const handleSaveBlog = () => {
    // Generate a unique ID for each blog
    if (text.trim() !== '') {
      const blogId = new Date().getTime().toString();
      const newBlog = { id: blogId, content: text };

      // Add the new blog to the existing blogs list
      setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
      let blogArray = JSON.parse(localStorage.getItem('blogData')) || [];
      let blogObject = new BlogData(newBlog.id, newBlog.content);
      blogArray.push(blogObject);
      localStorage.setItem('blogData', JSON.stringify(blogArray));
      // Clear the editor after saving
      setText('');
      window.open('/','_self');
    } else {
      alert('Please enter some content before saving the blog.');
    }
  };

  return (
    <center>
    <BlogHeader/>
      <div style={{ width: '70%', marginTop: '20px' }}>
        <ReactQuill
          ref={quillRef}
          modules={modules}
          formats={formats}
          value={text}
          onChange={handleText}
          theme='snow'
          style={{ height: '400px' }}
        />
      </div>
      {/* Add parentheses to handleSaveBlog function call */}
      <button className='saveBtn' onClick={() => handleSaveBlog()}>Save Blog</button>
    </center>
  );
}

// import React, { useEffect, useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// class BlogData {
//   constructor(id, content) {
//     this.id = id;
//     this.content = content;
//   }
// }

// const CreateBlog = () => {
//   const [text, setText] = useState('');
//   const [getData, setGetData] = useState([]);

//   const modules = {
//     toolbar: [
//       [{ header: [1, false] }],
//       ['link'],
//       ['image'],
//       ['clean'],
//     ],
//   };
//   const formats = ['header', 'link', 'image'];

//   const handleText = (content) => {
//     setText(content);
//   };

//   const handleSaveBlog = () => {
//     if (text.trim() !== '') {
//       const blogId = new Date().getTime().toString();
//       const newBlog = { id: blogId, content: text };

//       setGetData((prevData) => [...prevData, newBlog]);
//       localStorage.setItem('blogData', JSON.stringify([...getData, newBlog]));
//       setText('');
//     } else {
//       alert('Please enter some content before saving the blog.');
//     }
//   };

//   const processBlogContent = (content) => {
//     const parser = new DOMParser();
//     const parsedContent = parser.parseFromString(content, 'text/html');

//     const images = parsedContent.getElementsByTagName('img');

//     const imageWidth = '200px'; // Set your desired width here

//     for (let i = 0; i < images.length; i++) {
//       images[i].style.width = imageWidth;
//     }

//     return parsedContent.documentElement.outerHTML;
//   };

//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem('blogData')) || [];
//     setGetData(storedData);
//   }, []);

//   const getDataWithStyles = getData.map((blog) => {
//     const contentWithStyles = processBlogContent(blog.content);
//     return { ...blog, contentWithStyles };
//   });

//   return (
//     <center>
//       <div style={{ width: '50%', marginTop: '20px' }}>
//         <ReactQuill
//           modules={modules}
//           formats={formats}
//           value={text}
//           onChange={handleText}
//           theme='snow'
//           style={{ height: '400px' }}
//         />
//       </div>
//       <button className='saveBtn' style={{ cursor: 'pointer' }} onClick={handleSaveBlog}>
//         Save Blog
//       </button>
//       {/* <div>
//         {getDataWithStyles.map((blog) => (
//           <div className='blog-content' key={blog.id}>
//             <div
//               className='blog-content-data'
//               dangerouslySetInnerHTML={{ __html: blog.contentWithStyles }}
//             />
//           </div>
//         ))}
//       </div> */}
//     </center>
//   );
// };

// export default CreateBlog;




// import React, { useRef, useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// class BlogData {
//   constructor(id, content) {
//     this.id = id;
//     this.content = content;
//   }
// }

// export default function CreateBlog() {
//   const quillRef = useRef(null);
//   const [text, setText] = useState('');
//   const [blogs, setBlogs] = useState([]);

//   const modules = {
//     toolbar: [
//       [{ header: [1, false] }],
//       ['link'],
//       ['image'],
//       ['clean'],
//     ],
//   };
//   const formats = ['header', 'link', 'image'];

//   const handleText = () => {
//     if (quillRef.current) {
//       const editor = quillRef.current.getEditor();
//       const content = editor.root.innerHTML;
//       setText(content);
//     }
//   };

//   const handleSaveBlog = () => {
//     // Generate a unique ID for each blog
//     if (text.trim() !== '') {
//       const blogId = new Date().getTime().toString();
//       const newBlog = { id: blogId, content: text };

//       // Add the new blog to the existing blogs list
//       setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
//       let blogArray = JSON.parse(localStorage.getItem('blogData')) || [];
//       let blogObject = new BlogData(newBlog.id, newBlog.content);
//       blogArray.push(blogObject);
//       localStorage.setItem('blogData', JSON.stringify(blogArray));
//       // Clear the editor after saving
//       setText('');
//     //   window.open('/home','_self');
//     } else {
//       alert('Please enter some content before saving the blog.');
//     }
//   };

//   return (
//     <center>
//       <div style={{ width: '50%', marginTop: '20px' }}>
//         <ReactQuill
//           ref={quillRef}
//           modules={modules}
//           formats={formats}
//           value={text}
//           onChange={handleText}
//           theme='snow'
//           style={{ height: '400px' }}
//         />
//       </div>
//       {/* Add parentheses to handleSaveBlog function call */}
//       <button className='saveBtn' onClick={() => handleSaveBlog()}>Save Blog</button>
//       <div>
//         {blogs.map((blog) => (
//           <div key={blog.id}>
//             {/* Render each blog's content */}
//             <div dangerouslySetInnerHTML={{ __html: blog.content }} />
//             <hr />
//           </div>
//         ))}
//       </div>
//     </center>
//   );
// }


// import React, { useRef, useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';


// class BlogData{
//     constructor(id,content){
//         this.id = id;
//         this.content = content;
//     }
// }

// export default function CreateBlog() {
//   const quillRef = useRef(null);
//   const [text, setText] = useState('');
//   const [blogs, setBlogs] = useState([]);

//   const modules = {
//     toolbar: [
//       [{ header: [1, false] }],
//       ['link'],
//       ['image'],
//       ['clean'],
//     ],
//   };
//   const formats = ['header', 'link', 'image'];

//   const handleText = () => {
//     if (quillRef.current) {
//       const editor = quillRef.current.getEditor();
//       const content = editor.root.innerHTML;
//       setText(content);
//     }
//   };

//   const handleSaveBlog = () => {
//     // Generate a unique ID for each blog
//     if (text.trim() !== '') {
//     const blogId = new Date().getTime().toString();
//     const newBlog = { id: blogId, content: text };

//     // Add the new blog to the existing blogs list
//     setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
//     let blogArray = JSON.parse(localStorage.getItem("blogData")) || [];
//     let blogObject = new BlogData(newBlog.id,newBlog.content);
//     blogArray.push(blogObject);
//     localStorage.setItem("blogData",JSON.stringify(blogArray));
//     // Clear the editor after saving
//     setText('');

//         // window.open("/home","_self");
//       } else {
//         alert('Please enter some content before saving the blog.');
//       }
//   };

//   return (
//     <center>
//       <div style={{ width: '50%', marginTop: '20px' }}>
//         <ReactQuill
//           ref={quillRef}
//           modules={modules}
//           formats={formats}
//           value={text}
//           onChange={handleText}
//           theme='snow'
//           style={{ height: '400px' }}
//         />
//       </div>
//       <button className='saveBtn' onClick={()=>handleSaveBlog}>Save Blog</button>
//       <div>
//         {blogs.map((blog) => (
//           <div key={blog.id}>
//             {/* Render each blog's content */}
//             <div dangerouslySetInnerHTML={{ __html: blog.content }} />
//             <hr />
//           </div>
//         ))}
//       </div>
//     </center>
//   );
// }


// import React,{useRef, useState} from 'react'
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';


// export default function CreateBlog() {
//     const quillref = useRef(null);
//     const [text,setText] = useState("");
//     const module = {
//         toolbar:[
//             [{header:[1,false]}],
//             ["link"],
//             ["image"],
//             ["clean"],
//         ]
//     }
//     const quillFormat = [
//         "header",
//         "link",
//         "image"
//     ]

//     const HtmltoText = ({htmlcode}) => {
//         const styles = {
//             container:{
//                 width:"100%",
//                 wordWrap:"break-word",
//                 height:"600px",
//                 overflowY:"auto",
//             },
//             code:{
//                 display:"block",
//                 lineHeight:'1.2',
//                 padding:'30px',
//                 color:'black',
//                 fontFamily:'times new roman',
//                 textAlign:'justify'
//             }
//         }
//         return(
//             <div style={styles.container}>
//                 <code style={styles.code} dangerouslySetInnerHTML={{__html: htmlcode}}/>
//             </div>
//         );
//     }
//     const handleText = () => {
//         if(quillref.current){
//             const editor = quillref.current.getEditor(); 
//             const content = editor.root.innerHTML;
//             setText(content);
//             console.log(content);
//         }
//     }
//     return (
//     <center>
//     <div style={{width:'50%',marginTop:'20px'}}>
//       <ReactQuill  ref={quillref} modules={module} formats={quillFormat} value={text} onChange={handleText} theme='snow' style={{height:'400px'}}/>
//     </div>
//     <HtmltoText htmlcode={text}/>
//     </center>
//   )
// }
