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
  field: {
    first: string,
    second: string,
    third: string,
    fourth: string,
  }
  onRowDoubleClick?: (e: DataTableRowClickEvent) => void
}

export const DataTableComponent: React.FC<TDataTableComponentProps> = observer(({
  items,header, onRowDoubleClick, field
}) => {


  return (
    <div className={"div-dataTable-container"}>
      <DataTable value={items}
                 showGridlines
                 paginator={false}
                 responsiveLayout="scroll"
                 selectionMode="single"
                 onRowDoubleClick={onRowDoubleClick}
                 onRowClick={(e) => {
                     const userAgent = navigator.userAgent;

                     // Проверяем, мобильное это устройство или нет
                     const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

                     if (isMobile) {
                         onRowDoubleClick && onRowDoubleClick(e)
                     } else {
                         console.log("Нажатие с компьютера");
                     }
                 }}
                 className="dataTable"

                 pt={{
                   bodyRow: {className:"dataTableRowTest"},
                     // tbody: {root: {className:"dataTableRowTest"}}
                   }
                 }
      >
        <Column field={field.first} header={header.first}/>
        <Column field={field.second} header={header.second}/>
        <Column field={field.third} header={header.third}/>
        <Column field={field.fourth} header={header.fourth}/>
      </DataTable>

    </div>
  );
})

