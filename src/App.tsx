import { Provider } from 'react-redux'

import { store } from '@/store/reduxToolkit/store'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {RouterWrapper} from "@/routing/routerWrapper";

export function App() {
  return (
    <Provider store={store}>
      <RouterWrapper/>
      <ToastContainer />
    </Provider>
  )
}
