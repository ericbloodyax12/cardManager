import React from 'react';
import {DeckModelView} from "@/models-view/deck-view";


import {DeleteIcon} from "@/components/assets/icons/componentSvg/deleteIcon";
import {PlayIcon} from "@/components/assets/icons/componentSvg/playIcon";
import {EditIcon} from "@/components/assets/icons/componentSvg/editIcon";
import {useStores} from "@/contexts/storeContext/storeContext";
import {useDialogs} from "@/contexts/dialogProvider/DialogStoreContext";
import {UpdateInfoDialog} from "@/components/ui/dataTable/deckInfoDialog/updateInfoDialog/updateInfoDialog";
import {StorageHelper, StorageTypeNames} from "@/helpers/storage-helper";

import './deckInfoDialog.scss'
import {useNavigate} from "react-router-dom";
import {paths} from "@/routing/routesList/Routes";
import {IconButton} from "@/components/ui/iconButton/iconButton";
import {LayersIconComponent} from "@/components/assets/icons/componentSvg/layersIcon";




type TDataProps = {
    selectedDeck: DeckModelView
}

export const DeckInfoDialog: React.FC<TDataProps> = (props) => {

    const {decksStore} = useStores()!
    const {dialogStore} = useDialogs()
    const navigate = useNavigate()

    const tokensData = StorageHelper.getData(StorageTypeNames.UserToken)

    const navigateToAllCardsHandleClick = () => {
        navigate(paths.CARDS, {
            state: {
                selectedDeckParam: props.selectedDeck,
                tokensDataParam: tokensData,
            },
        });
        dialogStore.closeDialog()
    };
    const deleteDeckHandleClick = async () => {
        await decksStore.deleteDeck(props.selectedDeck?.id, tokensData!.accessToken, props.selectedDeck)
        await decksStore.getDecks()
        dialogStore.closeDialog()
    }

    return (
        <div className={"div-root-container"}>
            <p><strong>Name:</strong> {props.selectedDeck?.name}</p>
            <p><strong>Cards Count:</strong> {props.selectedDeck?.cardsCount}</p>
            <p><strong>Last Updated:</strong> {props.selectedDeck?.updated}</p>
            <p><strong>Created by:</strong> {props.selectedDeck?.author.name}</p>

                <div className={"div-ButtonIconsWrapper"} >
                    <IconButton label={"learn"} iconComponent={<PlayIcon/>} method={() => navigate(paths.CARDS)}/>
                    <IconButton label={"all cards"} iconComponent={<LayersIconComponent/>} method={() => navigateToAllCardsHandleClick()}/>
                    <IconButton label={"edit"} iconComponent={<EditIcon/>} method={() => dialogStore.openNewDialog(
                        {
                            headerTitle: `Deck info of : ${props.selectedDeck.name}`,
                            isVisible: true,
                            dialogContent: () => <UpdateInfoDialog selectedDeck={props.selectedDeck}/>,
                        }
                    )}/>
                    <IconButton label={"delete"} iconComponent={<DeleteIcon/>} method={deleteDeckHandleClick}/>
                </div>
        </div>
    );
}

