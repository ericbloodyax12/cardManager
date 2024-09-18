
import {observer} from "mobx-react-lite";

import s from './decks.module.scss'




import {DataTableComponent} from "@/components/ui/dataTable/dataTable";
import { useEffect} from "react";
import {Paginator} from "primereact/paginator";
import {useStores} from "@/contexts/storeContext/storeContext";

export const Decks = observer(() => {
  const {  decksStore} = useStores()!

  console.log('decksStore.UserTokensUpdateCount', decksStore.UserTokensUpdateCount);

  const {
    decks,
    pagination,
  } = decksStore;

  useEffect(() => {
    decksStore.getDecks(pagination.currentPage, pagination.itemsPerPage);
  }, [pagination.currentPage, pagination.itemsPerPage]);


  const onPageChange = (e: any) => {
    const curretntPage = e.page+1 // PrimeReact paginator начинает с 0, поэтому прибавляем 1
    if (pagination.currentPage !== curretntPage) {
        decksStore.setPage(curretntPage);
    } else if (pagination.itemsPerPage !== e.rows)  {
        decksStore.setItemsPerPage(e.rows);
    }
  };


  return (
      <div className={s.divMainContainer}>
          <div className={s.divMainContainer__dataTable}>
              <DataTableComponent items={decks}/>

          </div>
          <Paginator
              first={(pagination.currentPage - 1) * pagination.itemsPerPage}
              rows={pagination.itemsPerPage}
              totalRecords={pagination.totalItems}
              onPageChange={onPageChange}
              rowsPerPageOptions={[5, 10, 25, 50]}
              className={s.paginator}
          />
      </div>

  );
});
