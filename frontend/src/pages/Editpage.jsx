import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Editor from '../components/Editor';

const baseURL = import.meta.env.VITE_BASE_URL;

const EditPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}/posts/${id}`);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const postInfo = await response.json();
        setTitle(postInfo.title);
        setSummary(postInfo.summary);
        setContent(postInfo.content);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error (e.g., set error state, show error message)
      }
    };

    fetchData();
  }, [id]);

  const updatePost = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('id', id);

    if (files?.[0]) {
      data.set('file', files[0]);
    }

    try {
      const response = await fetch(`${baseURL}/posts/${id}`, {
        method: 'PUT',
        body: data,
        credentials: 'include',
      });

      if (response.ok) {
        setRedirect(true);
      } else {
        throw new Error('Failed to update post');
      }
    } catch (error) {
      console.error('Error updating post:', error);
      // Handle error (e.g., set error state, show error message)
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <form onSubmit={updatePost}>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="summary"
        value={summary}
        placeholder="Summary"
        onChange={(e) => setSummary(e.target.value)}
        style={{ height: 100 }}
      />
      <input
        type="file"
        name="file"
        id="file"
        onChange={(e) => setFiles(e.target.files)}
      />
      <Editor value={content} onChange={setContent} />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditPage;
