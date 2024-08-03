import { Provider } from 'react-redux'

import { store } from '@/store/reduxToolkit/store'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {RouterWrapper} from "@/routing/routerWrapper";
import {StoreProvider} from "@/contexts/storeContext/storeContext";

export function App() {
  return (

    <Provider store={store}>
      <StoreProvider>
        <RouterWrapper/>
        <ToastContainer />
      </StoreProvider>
    </Provider>
  )
}
