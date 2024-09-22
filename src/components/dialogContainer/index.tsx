import {FC} from 'react';
import {Dialog} from "primereact/dialog";
import {observer} from "mobx-react-lite";

import {DialogStore} from '@/store/dialogStore/dialogStore'

import './index.scss';

type TDialogsProps = {
  dialogStore: DialogStore;
};

export const DialogContainer: FC<TDialogsProps> = observer(({dialogStore}) => {

  const dialogState = dialogStore.DialogState;

  if (dialogState === null) return <></>
  {/** ВНИМАНИЕ !!! ПРАВИЛА ХУКОВ !!!**/}

  console.log('dialogState.dialogContent', dialogState.dialogContent)
  return (
    <Dialog
      className={'dialog-root-container'}
      header={dialogState.headerTitle}
      visible={dialogState.isVisible}
      style={{width: '70vw'}}

      onHide={() => dialogStore.closeDialog()}
    >
      there will be content
      {dialogState.dialogContent()}
    </Dialog>
  );
})
