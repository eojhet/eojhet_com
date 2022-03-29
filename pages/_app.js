import '../styles/globals.css'
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import ErrorBoundary from '../components/errorBoundary';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
      <Footer />
    </>
  )
}

export default MyApp
