import {useEffect} from "react"
import {observer} from "mobx-react-lite";
import {Paginator} from "primereact/paginator";

import {Button} from "@/components/ui/button";
import {useDialogs} from "@/contexts/dialogProvider/DialogStoreContext";
import {useStores} from "@/contexts/storeContext/storeContext";
import {DataTableComponent} from "@/components/ui/dataTable/dataTable";

import s from './decks.module.scss'

export const Decks = observer(() => {
    const { decksStore} = useStores()!
    const { dialogStore} = useDialogs();

    // const [newDeckModel, setNewDeckModel] = useState(); todo @Erik - реализовать логику и шаблон создания



    const {
        decks,
        pagination,
    } = decksStore;

    useEffect(() => {
        decksStore.getDecks(pagination.currentPage, pagination.itemsPerPage);
    }, [pagination.currentPage, pagination.itemsPerPage]);


    const onPageChange = (e: any) => {
        const curretntPage = e.page + 1 // PrimeReact paginator начинает с 0, поэтому прибавляем 1
        if (pagination.currentPage !== curretntPage) {
            decksStore.setPage(curretntPage);
        } else if (pagination.itemsPerPage !== e.rows) {
            decksStore.setItemsPerPage(e.rows);
        }
    };


    const addNewDeck = () => {
      dialogStore.openNewDialog({
        headerTitle: 'Create New Deck',
        isVisible: true,
        dialogContent: () => <div>Test</div>
      })
    };

    return (
        <div className={s.divMainContainer}>
            <div className={s.divMainContainer__dataTable}>
                <div className={s.divMainContainer__dataTable__div}>
                    <Button onClick={addNewDeck}>Add new Deck</Button>
                </div>
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
