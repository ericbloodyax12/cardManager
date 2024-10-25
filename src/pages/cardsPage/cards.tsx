import React, {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Typography} from "@/components/ui/typography";
import {Button} from "@/components/ui/button";
import {observer} from "mobx-react-lite";
import {useStores} from "@/contexts/storeContext/storeContext";
import {DataTableComponent} from "@/components/ui/dataTable/dataTable";
import {useDialogs} from "@/contexts/dialogProvider/DialogStoreContext";
import {AddNewCard} from "@/pages/cardsPage/addNewCard/addNewCard";
import {StorageHelper, StorageTypeNames} from "@/helpers/storage-helper";
import {DeckModelView} from "@/models-view/deck-view";

import "./cards.scss"
import {paths} from "@/routing/routesList/Routes";
import {DataTableRowClickEvent} from "primereact/datatable";
import {CardModelView} from "@/models-view/cards-view";
import {CardInfoDialog} from "@/pages/cardsPage/cardsInfoDialog/cardInfoDialog";
import {PaginatorComponent} from "@/components/ui/paginator/paginator";


type TCardsProps = {
    selectedDeck?:DeckModelView
}

export const Cards: React.FC<TCardsProps> = observer(({selectedDeck}) => {
        const {cardsStore} = useStores()!
        const {dialogStore} = useDialogs()
        const location = useLocation();
        const navigate = useNavigate()
        const {
            Cards,
            pagination
        } = cardsStore;

        const authorId = StorageHelper.getData(StorageTypeNames.UserInfoData)?.id
        const {selectedDeckParam} = location.state || {};
        selectedDeck = selectedDeckParam
        useEffect(() => {
            if (selectedDeck) {
                cardsStore.getCards(selectedDeck.id)
            }
        }, []);
        const isOwnOfDeck = authorId === selectedDeck?.userId

    const addNewDeck = () => {
        dialogStore.openNewDialog({
            headerTitle: 'Create New Card',
            isVisible: true,
            dialogContent: () => <AddNewCard selectedDeck={selectedDeck as DeckModelView} />
        })
    };
    const onRowDoubleClick = (e: DataTableRowClickEvent) => {
        const cardDataInfo = e.data as CardModelView;
        dialogStore.openNewDialog({
            headerTitle: `Card info of : ${selectedDeck?.name}`,
            isVisible: true,
            dialogContent: () => <CardInfoDialog selectedDeck={selectedDeck as DeckModelView} selectedCard={cardDataInfo}/>
        })
    };

    const onPageChange = (e: any) => {
        const currentPage = e.page + 1 // PrimeReact paginator начинает с 0, поэтому прибавляем 1
        if (pagination.currentPage !== currentPage) {
            cardsStore.setPage(currentPage);
        } else if (pagination.itemsPerPage !== e.rows) {
            cardsStore.setItemsPerPage(e.rows);
        }
    };


        return (
            <div>
                <div className={"backDiv-Container"}>
                    <Button onClick={() => navigate(paths.DECKS)}>Back to Decks</Button>
                </div>
                <div className="header-container">
                    <Typography>{selectedDeck?.name}</Typography>
                    {isOwnOfDeck ? <Button onClick={addNewDeck}> Add New Card </Button> : <></>}
                </div>

                <DataTableComponent
                                    items={Cards}
                                    field={{
                                        first: "question",
                                        second: "answer",
                                        third: "updated",
                                        fourth: "grade",
                                    }}
                                    header={{
                                        first: "Questions",
                                        second: "Answer",
                                        third: "Last Updated",
                                        fourth: "Grade",
                                    }}
                                    onRowDoubleClick={onRowDoubleClick}
                />
                <PaginatorComponent
                    first={(pagination.currentPage - 1) * pagination.itemsPerPage}
                                    rows={pagination.itemsPerPage}
                                    totalRecords={pagination.totalItems}
                                    onPageChange={onPageChange}
                                    rowsPerPageOptions={[5, 10, 25, 50]}
                />
            </div>
        );
    }
)

