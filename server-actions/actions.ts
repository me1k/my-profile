'use server';
import prisma from '../lib/prisma';

export const getData = async (): Promise<Post[]> => {
  const posts = await prisma.post.findMany();
  console.log({ posts });

  return posts;
};

export type Post = {
  title: string;
  content: string;
  published: Date;
  author: string;
};

export const createData = async (
  content: string,
  author: string
): Promise<Post> => {
  const post = await prisma.post.create({
    data: {
      author,
      title: 'hello',
      content,
      published: new Date(),
    },
  });

  return post;
};
