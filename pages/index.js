import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Home() {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/get-started')
  }, [router])

  return (
    <Head>
      <title>Self Cast Studios | Content Creation Made Easy</title>
      <meta name="description" content="Turn a 20-minute call into your month of content. Bio, 4 blogs, and 4 social posts for $99." />
    </Head>
  )
}
