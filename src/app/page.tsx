'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaXingSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Suspense, useEffect, useState } from 'react';
import { Post, createData, getData } from '../../server-actions/actions';

const skills = [
  'reactjs',
  'html',
  'css',
  'sass',
  'bootstrap',
  'github',
  'javascript',
  'reduxjs',
  'nextjs',
  'typescript',
  'graphql',
  'prismajs',
  'react native',
  'figma',
  'scrum',
  'kanban',
  'jira',
  'git',
];

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.currentTarget.value);
  };

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.currentTarget.value);
  };

  const handleSubmit = async () => {
    await createData(content, author);
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
      <div className={styles.guestbook}>
        <p>Guestbook</p>
      </div>
      <div className={styles.centered_container}>
        <div className={styles.headline}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
            }}>
            <Suspense>
              <Image src="/me1.png" width={100} height={120} alt="meik" />
            </Suspense>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1>meik bolender</h1>
              <h4>frontend developer</h4>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <p>
            i'm a german frontend developer located in frankfurt am main, i have
            been practicing since may 2017, and i enjoy developing frontends
            with react.js mostly
          </p>
        </div>
        <div className={styles.contact}>
          <span>skills: </span>
          <ul>
            {skills.map((skill) => (
              <li key={skill} className={styles.list_item}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contact}>
          <span>contact: </span>
          <ul>
            <li className={styles.list_item}>
              <a
                href="https://www.linkedin.com/in/meik-bolender-652554269"
                target="_blank">
                <FaLinkedin color="#99ff00" />
              </a>
            </li>
            <li className={styles.list_item}>
              <a
                href="https://www.xing.com/profile/Meik_Bolender"
                target="_blank">
                <FaXingSquare color="#99ff00" />
              </a>
            </li>
            <li className={styles.list_item}>
              <a href="mailto:bolendermeik@gmail.com">
                <MdEmail color="#99ff00" />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.guestbook}>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              placeholder="who leaves a comment?"
              onChange={handleAuthorChange}
            />
            <input
              type="text"
              placeholder="leave a nice comment :)"
              onChange={handleTextChange}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
          <div>
            {posts.map((post, index) => (
              <div
                key={index}
                style={{
                  marginTop: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                <p className={styles.guestbook_author}>#{post.author}</p>
                <p className={styles.guestbook_title}>Title: {post.title}</p>
                <p className={styles.guestbook_content}>
                  Comment: {post.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
