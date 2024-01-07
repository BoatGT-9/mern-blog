import React from 'react'
import Post from '../components/Post'
import { useEffect,useState } from 'react'

const baseURL = import.meta.env.VITE_BASE_URL;
const IndexPage = () => {
  const [posts, setPosts] = useState([]); // แก้เป็น useState([]) เพื่อให้ `posts` เป็น Array
  useEffect(() => {
    fetch(`${baseURL}/posts`)
      .then((response) => {
        if (response.ok) {
          return response.json(); // ตรวจสอบการคืนค่าของ response ในรูปแบบ JSON
        }
        throw new Error('Network response was not ok.');
      })
      .then((posts) => {
        setPosts(posts); // นำข้อมูลที่ได้รับมาไปตั้งค่า state
      })
      .catch((error) => {
        console.error('Fetch Error:', error);
      });
  }, []);
  return(
    <>
    {
      posts.length > 0 &&
      posts.map((post) => {

      return  <Post key={post._id} {...post}  />
      })
    }
    </>
  )
}

export default IndexPage;