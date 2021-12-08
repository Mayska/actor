import Layout from '../components/layout'
import Index from '../components'
import Script from 'next/script'


export default function Home() {
  const props: any = {
    titre: "François Leviste",
    children: <Index></Index>
  }
  return (
    <Layout page={props.titre}>
      <Script src="https://third-party-script.js"></Script>
      {props.children}
    </Layout>
  )
}