'use client';

import { Suspense, useEffect, useState } from 'react';
import { Post, createData, getData } from '../../../server-actions/actions';
import styles from './page.module.css';
import {
  Button,
  CssBaseline,
  TextField,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Guestbook = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const router = useRouter();

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.currentTarget.value);
  };

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.currentTarget.value);
  };

  const handleSubmit = async () => {
    await createData(content, author).then(() => {
      setPosts([
        ...posts,
        {
          content,
          published: new Date(),
          author,
        },
      ]);
      setAuthor('');
      setContent('');
    });
  };

  useEffect(() => {
    const getPosts = async () => {
      const res = await getData();
      setPosts(res);
    };

    getPosts();
  }, []);

  return (
    <>
      <div className={styles.avatar} onClick={() => router.push('/')}>
        <Suspense>
          <Image src="/me1.png" width={50} height={60} alt="meik" />
        </Suspense>
      </div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <div className={styles.guestbook}>
          <h1>Leave a nice comment :)</h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              width: '100%',
              marginTop: '3rem',
            }}>
            <TextField
              id="outlined-basic"
              label="Author"
              variant="outlined"
              onChange={handleAuthorChange}
              value={author}
            />
            <TextField
              id="outlined-basic"
              label="Text"
              variant="outlined"
              onChange={handleTextChange}
              value={content}
            />

            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
          <div style={{ width: '100%', overflow: 'scroll' }}>
            {posts.length === 0 ? (
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                Loading
              </div>
            ) : (
              posts.map((post, index) => (
                <div
                  key={index}
                  style={{
                    marginTop: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <div>#{index + 1}</div>
                  <p className={styles.guestbook_author}>
                    {'Von' + ' ' + post.author}
                  </p>
                  <p className={styles.guestbook_content}>
                    Comment: {post.content}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Guestbook;
