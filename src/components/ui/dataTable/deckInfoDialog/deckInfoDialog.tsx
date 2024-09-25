import React, {ReactNode} from 'react';
import {DeckModelView} from "@/models-view/deck-view";


import {DeleteIcon} from "@/components/assets/icons/componentSvg/deleteIcon";

import './deckInfoDialog.scss'
import {PlayIcon} from "@/components/assets/icons/componentSvg/playIcon";
import {EditIcon} from "@/components/assets/icons/componentSvg/editIcon";


type TDataProps = {
    selectedDeck: DeckModelView
}

export const DeckInfoDialog: React.FC<TDataProps> = ({selectedDeck}) => {


    const createButtonIcon = (
        label: string,
        iconComponent: ReactNode,
        method?: any
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
            <p><strong>Name:</strong> {selectedDeck?.name}</p>
            <p><strong>Cards Count:</strong> {selectedDeck?.cardsCount}</p>
            <p><strong>Last Updated:</strong> {selectedDeck?.updated}</p>
            <p><strong>Created by:</strong> {selectedDeck?.author.name}</p>
                <div className={"div-ButtonIconsWrapper"} >
                    {createButtonIcon("learn",<PlayIcon/>)}
                    {createButtonIcon("edit",<EditIcon/>)}
                    {createButtonIcon("delete",<DeleteIcon/>)}
                </div>
        </div>
    );
}

