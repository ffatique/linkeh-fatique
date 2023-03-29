import { AppProps } from 'next/app'
import '../styles/global.scss'

export default function App({
  Component, pageProps: { session, ...pageProps }
}: AppProps) {
   return (
      <>
        <Component {...pageProps}/>
      </>
)
}


