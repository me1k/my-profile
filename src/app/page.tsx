'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaXingSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Suspense } from 'react';
import Link from 'next/link';

const skills = [
  'ReactJS',
  'HTML',
  'CSS',
  'SASS',
  'Bootstrap',
  'GitHub',
  'JavaScript',
  'ReduxJS',
  'NextJS',
  'TypeScript',
  'GraphQL',
  'PrismaJS',
  'React Native',
  'Figma',
  'Scrum',
  'Kanban',
  'Jira',
  'Git',
];

export default function Home() {
  return (
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
            <h1>Meik Bolender</h1>
            <h4>Frontend Developer</h4>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <p>
          i'm a german frontend developer practicing since may 2017 and i enjoy
          develop frontends with react mostly
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
  );
}
