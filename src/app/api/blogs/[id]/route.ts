import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { BlogPost } from '@/types/Blog-types';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  console.log('id is ', id);
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);
  const post = data.find((post: BlogPost) => post._id === id);
  console.log(post, 'post');
  if (!post) {
    return NextResponse.error();
  }
  return NextResponse.json(post);
}
