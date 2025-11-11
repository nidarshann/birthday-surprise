// middleware.ts - Basic auth for surprise site
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Change these credentials before deploying
const USERNAME = 'guest';
const PASSWORD = 'surprise123';

export function middleware(req: NextRequest) {
  const auth = req.headers.get('authorization');
  const expected = 'Basic ' + Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64');

  // Allow Vercel health checks and static file access without auth
  const url = req.nextUrl.clone();
  if (url.pathname.startsWith('/_next/') || url.pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  if (!auth || auth !== expected) {
    return new Response('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Birthday Surprise"',
        'Content-Type': 'text/plain'
      }
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/'] // Protect the root path; adjust as needed
};
