import '../styles/globals.css'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import { Provider } from 'react-redux'
import store from '../components/redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}

export default MyApp
