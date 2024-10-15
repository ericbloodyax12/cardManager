import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {Typography} from "@/components/ui/typography";
import {Button} from "@/components/ui/button";
import {observer} from "mobx-react-lite";
import {useStores} from "@/contexts/storeContext/storeContext";
import {DataTableComponent} from "@/components/ui/dataTable/dataTable";
import {Paginator} from "primereact/paginator";
import {useDialogs} from "@/contexts/dialogProvider/DialogStoreContext";
import {AddNewCard} from "@/pages/cardsPage/addNewCard/addNewCard";

import "./cards.scss"

type TCardsProps = {

}

export const Cards: React.FC<TCardsProps> = observer(({}) => {
        const {cardsStore} = useStores()!
        const {dialogStore} = useDialogs()
        const location = useLocation();
        const {
            Cards,
            pagination
        } = cardsStore;

        const {selectedDeckParam} = location.state || {};

        useEffect(() => {
            cardsStore.getCards(selectedDeckParam.id)
        }, []);

    const addNewDeck = () => {
        dialogStore.openNewDialog({
            headerTitle: 'Create New Card',
            isVisible: true,
            dialogContent: () => <AddNewCard selectedDeck={selectedDeckParam} />
        })
    };

    const onPageChange = (e: any) => {
        const curretntPage = e.page + 1 // PrimeReact paginator начинает с 0, поэтому прибавляем 1
        if (pagination.currentPage !== curretntPage) {
            cardsStore.setPage(curretntPage);
        } else if (pagination.itemsPerPage !== e.rows) {
            cardsStore.setItemsPerPage(e.rows);
        }
    };


        return (
            <div>
                <div className="header-container">
                    <Typography>{selectedDeckParam.name}</Typography>
                    <Button onClick={addNewDeck}> Add New Card </Button>
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
                />
                <Paginator
                    first={(pagination.currentPage - 1) * pagination.itemsPerPage}
                    rows={pagination.itemsPerPage}
                    totalRecords={pagination.totalItems}
                    onPageChange={onPageChange}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    className="paginator"
                />

            </div>
        );
    }
)

