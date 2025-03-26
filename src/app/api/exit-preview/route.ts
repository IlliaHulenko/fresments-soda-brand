
import { NextRequest } from 'next/server'
import { draftMode } from 'next/headers'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  // Check the secret and slug (adjust this to match your preview logic)
  if (secret !== process.env.PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  (await draftMode()).enable()

  return new Response(null, {
    status: 307,
    headers: {
      'Location': slug || '/'
    }
  })
}
