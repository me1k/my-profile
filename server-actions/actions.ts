'use server';
import prisma from '../lib/prisma';

export const getData = async (): Promise<Post[]> => {
  const posts = await prisma.post.findMany();
  console.log({ posts });

  return posts;
};

export type Post = {
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
      content,
      published: new Date(),
    },
  });

  return post;
};
