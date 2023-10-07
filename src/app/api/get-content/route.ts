import { getContent } from '@/helpers/extract-content';
import { NextResponse } from 'next/server';

export async function GET() {
  const response = await getContent();
  return NextResponse.json(response);
}
