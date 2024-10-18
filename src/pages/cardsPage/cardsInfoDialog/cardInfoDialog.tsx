import React from 'react';

import {DeleteIcon} from "@/components/assets/icons/componentSvg/deleteIcon";
import {EditIcon} from "@/components/assets/icons/componentSvg/editIcon";
import {useStores} from "@/contexts/storeContext/storeContext";
import {useDialogs} from "@/contexts/dialogProvider/DialogStoreContext";
import {StorageHelper, StorageTypeNames} from "@/helpers/storage-helper";
import {DeckModelView} from "@/models-view/deck-view";
import {IconButton} from "@/components/ui/iconButton/iconButton";
import {CardModelView} from "@/models-view/cards-view";

import './cardInfoDialog.scss'
import {EditCardDialog} from "@/pages/cardsPage/cardsInfoDialog/editCardDialog/editCardDialog";


type TDataProps = {
    selectedCard: CardModelView;
    selectedDeck: DeckModelView;
}

export const CardInfoDialog: React.FC<TDataProps> = (props) => {

    const { cardsStore} = useStores()!
    const {dialogStore} = useDialogs()

    const authorId = StorageHelper.getData(StorageTypeNames.UserInfoData)?.id
    const isOwnOfDeck = authorId === props.selectedDeck.userId

    const deleteCardHandleClick = async () => {
        console.log("props.selectedCard.id",props.selectedCard.id)
        await cardsStore.deleteCard(props.selectedCard.id)
        await cardsStore.getCards(props.selectedDeck.id)
        dialogStore.closeDialog()
    }
    const editCardHandleClick = () => {
        dialogStore.openNewDialog(
            {
                headerTitle: `Card info of : ${props.selectedDeck.name}`,
                isVisible: true,
                dialogContent: () => <EditCardDialog selectedDeck={props.selectedDeck} selectedCard={props.selectedCard}/>,
            }
        )
    }

    return (
        <div className={"div-root-container"}>
            <p><strong>Question:</strong> {props.selectedCard.question}</p>
            <p><strong>Answer:</strong> {props.selectedCard.answer}</p>
            <p><strong>Last Updated:</strong> {props.selectedCard.updated}</p>
            <p><strong>Grade:</strong> {props.selectedCard.grade}</p>

            <div className={"div-ButtonIconsWrapper"} >
                {
                    (isOwnOfDeck)
                        ? <IconButton label={"edit"} iconComponent={<EditIcon/>} method={editCardHandleClick}/>
                        : <></>
                }
                {
                    (isOwnOfDeck)
                        ? <IconButton label={"delete"} iconComponent={<DeleteIcon/>} method={deleteCardHandleClick}/>
                        : <></>
                }

            </div>
        </div>
    );
}

