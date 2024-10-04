import React, {useEffect} from 'react';
import {Typography} from "@/components/ui/typography";
import {Button} from "@/components/ui/button";

import "./cards.scss"
import {observer} from "mobx-react-lite";
import {useStores} from "@/contexts/storeContext/storeContext";
import {DataTableComponent} from "@/components/ui/dataTable/dataTable";


type TCardsProps = {
    deckId: string;
}


export const Cards: React.FC<TCardsProps> = observer(({deckId}) => {
        const {cardsStore} = useStores()!
        const {
            Cards,
            pagination
        } = cardsStore;

        // useEffect(() => {
        //     cardsStore.getCards(deckId)
        // }, []);



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

            </div>
        );
    }
)

