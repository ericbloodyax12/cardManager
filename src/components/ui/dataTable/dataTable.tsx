import React from 'react';
import {Column} from "primereact/column";
import {DataTable, DataTableRowClickEvent} from "primereact/datatable";
import {observer} from "mobx-react-lite";


import {useDialogs} from "@/contexts/dialogProvider/DialogStoreContext";
import {DeckModelView} from "@/models-view/deck-view";


import './dataTable.scss'
import {Data} from "@/components/ui/dataTable/data/data";


type TDataTableComponentProps = {
  items: DeckModelView[]
}

export const DataTableComponent: React.FC<TDataTableComponentProps> = observer(({
  items
}) => {

  const {dialogStore} = useDialogs();

  const onRowDoubleClick = (e: DataTableRowClickEvent) => {
    const deckDataInfo = e.data as DeckModelView;
    dialogStore.openNewDialog({
      headerTitle: `Deck info of : ${deckDataInfo.name}`,
      isVisible: true,
      dialogContent: () => <Data selectedDeck={deckDataInfo}/>
    })
  };

  return (
    <div>
      <DataTable value={items}
                 showGridlines
                 paginator={false}
                 responsiveLayout="scroll"
                 selectionMode="single"
                 onRowDoubleClick={onRowDoubleClick}
      >
        <Column field="name" header=" Name"/>
        <Column field="cardsCount" header="Cards Count"/>
        <Column field="updated" header="Last Updated"/>
        <Column field="author.name" header="Created by"/>
      </DataTable>
    </div>
  );
})



