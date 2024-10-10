import React, {useEffect} from 'react';
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
    deckId: string;
}


export const Cards: React.FC<TCardsProps> = observer(({deckId}) => {
        const {cardsStore} = useStores()!
        const {dialogStore} = useDialogs()
        const {
            Cards,
            pagination
        } = cardsStore;

        const selectedDeck = {
            "id": "cm23kf7rp030vjq01t0hem8wh",
            "userId": "31689a85-4371-4c3d-8a4c-77d782ed960d",
            "name": "Mr Erikson",
            "isPrivate": false,
            "cover": null,
            "created": "2024-10-10T17:21:15.541Z",
            "updated": "2024-10-10T17:44:31.731Z",
            "cardsCount": 0,
            "isFavorite": false,
            "author": {
                "id": "31689a85-4371-4c3d-8a4c-77d782ed960d",
                "name": "erikbonopart12"
            }
        }
        const deckIdTest = 'cm23kf7rp030vjq01t0hem8wh'
         deckId = deckIdTest
        useEffect(() => {
            cardsStore.getCards(deckId)
        }, []);

    const addNewDeck = () => {
        dialogStore.openNewDialog({
            headerTitle: 'Create New Card',
            isVisible: true,
            dialogContent: () => <AddNewCard selectedDeck={selectedDeck} />
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
                    <Typography>{"as"}</Typography> {/* // заголовок деки которая будет прокидываться через props */}
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

