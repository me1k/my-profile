'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaXingSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Suspense } from 'react';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  return (
    <>
      <div
        className={styles.guestbook}
        onClick={() => router.push('/guestbook')}>
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
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1>meik bolender</h1>
              <h4>frontend developer</h4>
            </div>
            <Suspense>
              <Image src="/me1.png" width={100} height={120} alt="meik" />
            </Suspense>
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
      </div>
    </>
  );
}
