import {FC} from 'react';

import {DialogStore} from '@/store/dialogStore/dialogStore'
import {Dialog} from "primereact/dialog";
import {observer} from "mobx-react-lite";

type TDialogsProps = {
  dialogStore: DialogStore;
};

export const DialogContainer: FC<TDialogsProps> = observer(({dialogStore}) => {
  console.log('dialogStore.IsDialogVisible', dialogStore.IsDialogVisible)
  return (
    <Dialog header="New Card" visible={dialogStore.IsDialogVisible} style={{width: '70vw'}}
            onHide={() => dialogStore.setIsDialogVisible(false)}>
      <div>
        <p><strong>Name:</strong> as</p>
        <p><strong>Cards Count:</strong> sa</p>
        <p><strong>Last Updated:</strong>ass</p>
        <p><strong>Created by:</strong> ssa</p>
      </div>
    </Dialog>
  );
})
