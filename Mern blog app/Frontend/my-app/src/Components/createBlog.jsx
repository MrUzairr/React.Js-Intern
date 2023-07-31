import React, { useRef, useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import BlogHeader from './blogHeader'

import { MDBIcon, MDBInput } from 'mdb-react-ui-kit'; 
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function CreateBlog() {
  const quillRef = useRef(null);
  const [text, setText] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1,2,3,4,5,6, false] }],
      ['bold','italic','underline','strike'],
      [{indent:'+1'},{indent:'-1'}],
      ['link'],
      [{list:'ordered'},{list:'bullet'}],
      [{align:[]}],
      ['clean'],
    ],
  };
  const formats = ['header', 'link', 'image','list','align','bold','italic','underline','strike'];

  const handleText = () => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      const content = editor.root.innerHTML;
      setText(content);
    }
  };

  // Try to retrieve the userLogin data from localStorage
  let getUser = null;
  try {
    getUser = JSON.parse(localStorage.getItem('userLogin'));
  } catch (error) {
    console.error('Error parsing userLogin data from localStorage:', error);
  }

   // Initialize firstname and lastname with empty strings
   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
 
   // Check if getUser is not null and has the expected properties
   useEffect(() => {
     if (getUser && getUser.hasOwnProperty('firstname') && getUser.hasOwnProperty('lastname')) {
       setFirstname(getUser.firstname);
       setLastname(getUser.lastname);
     } else {
       console.log('userLogin data not found or incomplete.');
     }
   }, [getUser]);

   // Create state for the author input field
  const [author, setAuthor] = useState('');

  // Use useEffect to set the author state once the component is mounted
  useEffect(() => {
    setAuthor(firstname + ' ' + lastname);
  }, [firstname, lastname]);

  
  return (

    <center>
    <BlogHeader/>
    <form action={`https://working-separate-gateway.glitch.me/blog?text=${text}&author=${author}`} method='post' encType='multipart/form-data'>
    <div className='author-data'> Author:
      <span className='author' style={{textTransform:'capitalize'}}>{author}</span>
    </div>
      <div style={{ width: '70%', marginTop: '20px' }} className='blogCreateContent'>
        <ReactQuill ref={quillRef} modules={modules} formats={formats} value={text} onChange={handleText}  theme='snow' style={{ height: '400px' }} />
      </div>

      <div className='d-flex flex-row align-items-center mb-4 imageData' style={{marginTop:'60px',width:'70%'}}>
        <MDBIcon fas icon='file me-3' size='lg'/>
        <MDBInput id='form4' type='file' name='image' className='image' style={{width:'340px'}}/>
      </div>
      {/* Add parentheses to handleSaveBlog function call */}
      <button className='saveBtn'>Save Blog</button>
      </form>
    </center>
  );
}
