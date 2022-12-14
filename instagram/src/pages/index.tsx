import Head from 'next/head'
import AuthLayout from '~/components/organisms/AuthLayout'
import IGPhone from '~/components/organisms/IGPhone'
import { ChevronDown } from 'react-feather'
import { styles } from '~/shared/twin/login.styles'
import Footer from '~/components/templates/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#fafafa]">
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Instagram by NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main css={styles.main} className="justify-center">
        <div className="mt-8 flex gap-8">
          <IGPhone />
          <AuthLayout />
        </div>
      </main>
      <Footer />
    </div>
  )
}
