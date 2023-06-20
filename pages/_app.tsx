import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { allReducers } from '../redux_store/reducers'
import { legacy_createStore as createStore} from 'redux'

const store = createStore(allReducers)

export default function App({ Component, pageProps }: AppProps) {
  return (<Provider store = {store}><Component {...pageProps} /></Provider>)
}
