import { NextResponse } from 'next/server';

export async function POST(request) {
  const data = await request.json();
  console.log('Contact submission received:', data);

  return NextResponse.json({ status: 'ok', message: 'Submission received' });
}
