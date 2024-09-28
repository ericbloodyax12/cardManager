import React, {ReactNode} from 'react';
import {DeckModelView} from "@/models-view/deck-view";


import {DeleteIcon} from "@/components/assets/icons/componentSvg/deleteIcon";

import './deckInfoDialog.scss'
import {PlayIcon} from "@/components/assets/icons/componentSvg/playIcon";
import {EditIcon} from "@/components/assets/icons/componentSvg/editIcon";
import {useStores} from "@/contexts/storeContext/storeContext";
import {useDialogs} from "@/contexts/dialogProvider/DialogStoreContext";
import {UpdateInfoDialog} from "@/components/ui/dataTable/deckInfoDialog/updateInfoDialog/updateInfoDialog";
import {StorageHelper, StorageTypeNames} from "@/helpers/storage-helper";



type TDataProps = {
    selectedDeck: DeckModelView
}


export const DeckInfoDialog: React.FC<TDataProps> = (props) => {

    const {decksStore} = useStores()!
    const {dialogStore} = useDialogs()

    const tokensData = StorageHelper.getData(StorageTypeNames.UserToken)
    const createButtonIcon = (
        label: string,
        iconComponent: ReactNode,
        method?: () => void
    ): ReactNode => {

        return (
            <button onClick={method} className={"button-icon"} data-hover={label}>
                <div className={"div-icon"}>
                    {iconComponent}
                </div>
            </button>
    )
    }


    return (
        <div className={"div-root-container"}>
            <p><strong>Name:</strong> {props.selectedDeck?.name}</p>
            <p><strong>Cards Count:</strong> {props.selectedDeck?.cardsCount}</p>
            <p><strong>Last Updated:</strong> {props.selectedDeck?.updated}</p>
            <p><strong>Created by:</strong> {props.selectedDeck?.author.name}</p>

                <div className={"div-ButtonIconsWrapper"} >
                    {createButtonIcon("learn",<PlayIcon/>)}
                    {createButtonIcon("edit",<EditIcon/>, () => dialogStore.openNewDialog(
                            {
                                headerTitle: `Deck info of : ${props.selectedDeck.name}`,
                                isVisible: true,
                                dialogContent: () => <UpdateInfoDialog selectedDeck={props.selectedDeck}/>,
                            }
                    )
                    )}
                    {
                        createButtonIcon("delete", <DeleteIcon/>, async () => {
                             await decksStore.deleteDeck(props.selectedDeck?.id, tokensData!.accessToken, props.selectedDeck)
                             dialogStore.closeDialog()
                        })
                    }
                </div>
        </div>
    );
}

