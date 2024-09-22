import React from 'react';
import {Column} from "primereact/column";
import {DataTable, DataTableRowClickEvent} from "primereact/datatable";
import {observer} from "mobx-react-lite";


import {useDialogs} from "@/contexts/dialogProvider/DialogStoreContext";
import {DeckModelView} from "@/models-view/deck-view";


import './dataTable.scss'


type TDataTableComponentProps = {
  items: DeckModelView[]
}

export const DataTableComponent: React.FC<TDataTableComponentProps> = observer(({
  items
}) => {

  const {dialogStore} = useDialogs();

  const decksInfoDialogContent = (selectedDeck: DeckModelView) => {

    return <div>
      <p><strong>Name:</strong> {selectedDeck?.name}</p>
      <p><strong>Cards Count:</strong> {selectedDeck?.cardsCount}</p>
      <p><strong>Last Updated:</strong> {selectedDeck?.updated}</p>
      <p><strong>Created by:</strong> {selectedDeck?.author.name}</p>
    </div>
  }

  const onRowDoubleClick = (e: DataTableRowClickEvent) => {
    const deckDataInfo = e.data as DeckModelView;
    dialogStore.openNewDialog({
      headerTitle: `Deck's info ${deckDataInfo.name}`,
      isVisible: true,
      dialogContent: () => decksInfoDialogContent(deckDataInfo)
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
      {/*<Dialog className={"div-Dialog"} header="Card" visible={isDialogVisible} style={{width: '70vw'}} onHide={hideDialog} >*/}
      {/*    <div className={"div-Dialog__div"}>*/}
      {/*        <p><strong>Name:</strong> {selectedDeck?.name}</p>*/}
      {/*        <p><strong>Cards Count:</strong> {selectedDeck?.cardsCount}</p>*/}
      {/*        <p><strong>Last Updated:</strong> {selectedDeck?.updated}</p>*/}
      {/*        <p><strong>Created by:</strong> {selectedDeck?.author.name}</p>*/}
      {/*    </div>*/} todo @bars - подумать как передать контент



    </div>
  );
})



