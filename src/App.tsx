import { Provider } from 'react-redux'

import { Router } from '@/router'
import { store } from '@/services/rtk/store'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <Provider store={store}>
      <Router />
      <ToastContainer />
    </Provider>
  )
}
