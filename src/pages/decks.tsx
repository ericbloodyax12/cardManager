import {decksStore} from "@/store/decksStore/decksStore";
import {observer} from "mobx-react-lite";
import {useEffect} from "react";

import s from './decks.module.scss'
import {useStores} from "@/contexts/storeContext/storeContext";



import {DataTableComponent} from "@/components/ui/dataTable/dataTable";

export const Decks = observer(() => {
  console.log("decks component is here")
  const {authStore} = useStores()
  const isAuth = authStore.IsAuth
  console.log('isAuth in Decks',isAuth)
  useEffect(() => {
    decksStore.getDecks();
  }, []);
  const {
    decks,
    // pagination,
    // setPage,
  } = decksStore;
  // const onPageChange = (e) => {
  //   setPage(e.page + 1); // PrimeReact paginator начинается с 0, поэтому прибавляем 1
  // };

  if (decksStore.loading) {
    return <div>Loading...</div>;
  }

  if (decksStore.error) {
    return <div>Error: {decksStore.error}</div>;
  }
  console.log("decks component is here")
  return (
      <div className={s.divMainContainer}>
        <DataTableComponent items={decks}/>

        {/*<Paginator*/}
        {/*    first={(pagination.currentPage - 1) * pagination.itemsPerPage}*/}
        {/*    rows={pagination.itemsPerPage}*/}
        {/*    totalRecords={pagination.totalItems}*/}
        {/*    onPageChange={onPageChange}*/}
        {/*/>*/}
      </div>
  );
});
