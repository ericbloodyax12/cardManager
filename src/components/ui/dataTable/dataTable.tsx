import React from 'react';
import {Column} from "primereact/column";
import {DataTable, DataTableRowClickEvent} from "primereact/datatable";
import {observer} from "mobx-react-lite";

import {DeckModelView} from "@/models-view/deck-view";
import {CardModelView} from "@/models-view/cards-view";

import './dataTable.scss'



type TDataTableComponentProps = {
  items: DeckModelView[] | CardModelView[],
  header: {
    first: string,
    second: string,
    third: string,
    fourth: string,
  },
  onRowDoubleClick?: (e: DataTableRowClickEvent) => void
}

export const DataTableComponent: React.FC<TDataTableComponentProps> = observer(({
  items,header, onRowDoubleClick
}) => {


  return (
    <div>
      <DataTable value={items}
                 showGridlines
                 paginator={false}
                 responsiveLayout="scroll"
                 selectionMode="single"
                 onRowDoubleClick={onRowDoubleClick}
      >
        <Column field="name" header={header.first}/>
        <Column field="cardsCount" header={header.second}/>
        <Column field="updated" header={header.third}/>
        <Column field="author.name" header={header.fourth}/>
      </DataTable>

    </div>
  );
})

