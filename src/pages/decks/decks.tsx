import  {useEffect} from "react"
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

import {Button} from "@/components/ui/button";
import {useDialogs} from "@/contexts/dialogProvider/DialogStoreContext";
import {useStores} from "@/contexts/storeContext/storeContext";
import {DataTableComponent} from "@/components/ui/dataTable/dataTable";
import {AddNewDeck} from "@/pages/decks/addNewDeck/addNewDeck";
import {DataTableRowClickEvent} from "primereact/datatable";
import {DeckModelView} from "@/models-view/deck-view";
import {DeckInfoDialog} from "@/components/ui/dataTable/deckInfoDialog/deckInfoDialog";
import {paths} from "@/routing/routesList/Routes";

import  './decks.scss'
import {PaginatorComponent} from "@/components/ui/paginator/paginator";

export const Decks = observer(() => {
    const { decksStore, authStore} = useStores()!
    const { dialogStore} = useDialogs();
    const navigate = useNavigate();

    const {
        Decks,
        pagination,
    } = decksStore;



    useEffect( () => {
        // todo разобрать ситуацию после закрытия браузера и долгого выхода почему не проходит запрос хотя все данные есть, говорит что не авторизован
        if (authStore.IsAuth && authStore.UserTokens?.accessToken) {
            decksStore.getDecks(pagination.currentPage, pagination.itemsPerPage);
        } else {
            navigate(paths.SIGN_IN)
        }
    }, [pagination.currentPage, pagination.itemsPerPage]);



    const onRowDoubleClick = (e: DataTableRowClickEvent) => {
        const deckDataInfo = e.data as DeckModelView;
        dialogStore.openNewDialog({
            headerTitle: `Deck info of : ${deckDataInfo.name}`,
            isVisible: true,
            dialogContent: () => <DeckInfoDialog selectedDeck={deckDataInfo}/>
        })
    };

    const onPageChange = (e: any) => {
        const currentPage = e.page + 1 // PrimeReact paginator начинает с 0, поэтому прибавляем 1
        if (pagination.currentPage !== currentPage) {
            decksStore.setPage(currentPage);
        } else if (pagination.itemsPerPage !== e.rows) {
            decksStore.setItemsPerPage(e.rows);
        }
    };


    const addNewDeck = () => {
      dialogStore.openNewDialog({
        headerTitle: 'Create New Deck',
        isVisible: true,
        dialogContent: () => <AddNewDeck />
      })
    };

    return (
        <div className="divMainContainer">
            <div className="divMainContainer__dataTable">
                <div className="divMainContainer__dataTable__div">
                    <Button onClick={addNewDeck}>Add new Deck</Button>
                </div>
                <DataTableComponent items={Decks}
                                    field={{
                                        first: "name",
                                        second: "cardsCount",
                                        third: "updated",
                                        fourth: "author.name",
                                    }}
                                    header={
                                        {
                                            first: "name",
                                            second: "Cards Count",
                                            third: "Last Updated",
                                            fourth: "Created by"
                                        }
                                    }
                                    onRowDoubleClick={onRowDoubleClick}
                />
            </div>
            <PaginatorComponent
                first={(pagination.currentPage - 1) * pagination.itemsPerPage}
                rows={pagination.itemsPerPage}
                totalRecords={pagination.totalItems}
                onPageChange={onPageChange}
                rowsPerPageOptions={[5, 10, 25, 50]}
            />
        </div>

    );
});
