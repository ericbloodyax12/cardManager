
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {RouterWrapper} from "@/routing/routerWrapper";
import {StoreProvider} from "@/contexts/storeContext/storeContext";

export function App() {
    console.log(1)
  return (
      <StoreProvider>
          <RouterWrapper/>
          <ToastContainer />
      </StoreProvider>
  )
}
