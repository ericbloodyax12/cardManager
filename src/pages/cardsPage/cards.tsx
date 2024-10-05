import React, {useEffect} from 'react';
import {Typography} from "@/components/ui/typography";
import {Button} from "@/components/ui/button";
import {observer} from "mobx-react-lite";
import {useStores} from "@/contexts/storeContext/storeContext";
import {DataTableComponent} from "@/components/ui/dataTable/dataTable";
import {Paginator} from "primereact/paginator";

import "./cards.scss"



type TCardsProps = {
    deckId: string;
}


export const Cards: React.FC<TCardsProps> = observer(({deckId}) => {
        const {cardsStore} = useStores()!
        const {
            Cards,
            pagination
        } = cardsStore;

        const deckIdTest = 'cm0yinlwv000njq0183emcyfj'
         deckId = deckIdTest
        useEffect(() => {
            cardsStore.getCards(deckId)
        }, []);

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
                    <Button>Add New Card</Button>
                </div>

                <DataTableComponent items={Cards} header={{
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

