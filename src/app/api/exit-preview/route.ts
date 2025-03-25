import { exitPreview } from "@prismicio/next";

import { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request: NextRequest) {
  return new Response(null, {
    status: 307,
    headers: {
      'Set-Cookie': 'prerender-bypass=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT',
      'Location': '/'
    }
  })
}
