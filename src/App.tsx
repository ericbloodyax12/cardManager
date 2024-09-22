
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {RouterWrapper} from "@/routing/routerWrapper";
import {StoreProvider} from "@/contexts/storeContext/storeContext";
import {DialogStoreProvider} from "@/contexts/dialogProvider/DialogStoreProvider";

export function App() {
  return (
      <StoreProvider>
        <DialogStoreProvider>
          <RouterWrapper/>
          <ToastContainer />
        </DialogStoreProvider>
      </StoreProvider>
  )
}
