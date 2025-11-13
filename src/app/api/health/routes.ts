import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const payload = {
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
    return NextResponse.json(payload);
  } catch (error) {
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}