import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET() {
  const h = await headers();
  const keys = ['x-pathname', 'x-invoke-path', 'x-search', 'referer', 'host', 'x-forwarded-for', 'x-real-ip', 'user-agent'];
  const picked: Record<string, string | null> = {};
  for (const k of keys) picked[k] = h.get(k);
  return NextResponse.json({ picked, note: 'edgeone x-pathname probe (SSR layer)' });
}
