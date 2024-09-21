import React, {useState} from 'react';
import {Column} from "primereact/column";
import {DataTable, DataTableSelectEvent} from "primereact/datatable";
import {DeckModelView} from "@/models-view/deck-view";

import {observer} from "mobx-react-lite";
import {Dialog} from "primereact/dialog";
import {useStores} from "@/contexts/storeContext/storeContext";

import './dataTable.scss'

type TDataTableComponentProps = {
    items: DeckModelView[]
}

export const DataTableComponent: React.FC<TDataTableComponentProps> = observer( ({
                                                                                     items
                                                                                 }) => {
    const {  decksStore} = useStores()!
    const {
        decks
    } = decksStore
    console.log(decks)
    const  [selectedDeck, setSelectedDeck] = useState<DeckModelView | null>(null);
    const [isDialogVisible, setDialogVisible] = useState(false)

    const onRowSelect = (e:DataTableSelectEvent) => {
        setSelectedDeck(e.data);
        setDialogVisible(true)
        console.log(e)
    };

    const hideDialog = () => {
        setDialogVisible(false);
        setSelectedDeck(null);
    };

    return (
        <div>
            <DataTable value={items}
                       showGridlines
                       paginator={false}
                responsiveLayout="scroll"
                       selectionMode="single"
                       onRowSelect={onRowSelect}
            >
                <Column field="name" header=" Name"/>
                <Column field="cardsCount" header="Cards Count"/>
                <Column field="updated" header="Last Updated"/>
                <Column field="author.name" header="Created by"/>
            </DataTable>
            <Dialog className={"div-Dialog"} header="Card" visible={isDialogVisible} style={{width: '70vw'}} onHide={hideDialog} >
                <div className={"div-Dialog__div"}>
                    <p><strong>Name:</strong> {selectedDeck?.name}</p>
                    <p><strong>Cards Count:</strong> {selectedDeck?.cardsCount}</p>
                    <p><strong>Last Updated:</strong> {selectedDeck?.updated}</p>
                    <p><strong>Created by:</strong> {selectedDeck?.author.name}</p>
                </div>

            </Dialog>

        </div>
    );
})



