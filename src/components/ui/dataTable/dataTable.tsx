import React from 'react';
import {Column} from "primereact/column";
import {DataTable, DataTableRowClickEvent} from "primereact/datatable";
import {observer} from "mobx-react-lite";


import {useDialogs} from "@/contexts/dialogProvider/DialogStoreContext";
import {DeckModelView} from "@/models-view/deck-view";


import './dataTable.scss'
import {DeckInfoDialog} from "@/components/ui/dataTable/deckInfoDialog/deckInfoDialog";
import {CardModelView} from "@/models-view/cards-view";


type TDataTableComponentProps = {
  items: DeckModelView[] | CardModelView[],
  header: {
    first: string,
    second: string,
    third: string,
    fourth: string,
  }
}

export const DataTableComponent: React.FC<TDataTableComponentProps> = observer(({
  items,header
}) => {

  const {dialogStore} = useDialogs();

  const onRowDoubleClick = (e: DataTableRowClickEvent) => {
    const deckDataInfo = e.data as DeckModelView;
    dialogStore.openNewDialog({
      headerTitle: `Deck info of : ${deckDataInfo.name}`,
      isVisible: true,
      dialogContent: () => <DeckInfoDialog selectedDeck={deckDataInfo}/>
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
        <Column field="name" header={header.first}/>
        <Column field="cardsCount" header={header.second}/>
        <Column field="updated" header={header.third}/>
        <Column field="author.name" header={header.fourth}/>
      </DataTable>

    </div>
  );
})

