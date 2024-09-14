import React from 'react';
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {DeckModelView} from "@/models-view/deck-view";

import {observer} from "mobx-react-lite";



type TDataTableComponentProps = {
    items: DeckModelView[]
}

export const DataTableComponent: React.FC<TDataTableComponentProps> = observer( ({
                                                                                     items
                                                                                 }) => {

    return (
        <div>
            <DataTable value={items}
                       showGridlines
                       paginator={false}
                responsiveLayout="scroll"
            >
                <Column field="name" header=" Name"/>
                <Column field="cardsCount" header="Cards Count"/>
                <Column field="updated" header="Last Updated"/>
                <Column field="author.name" header="Created by"/>
            </DataTable>

        </div>
    );
})



