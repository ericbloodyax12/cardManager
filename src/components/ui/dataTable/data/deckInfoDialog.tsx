import React from 'react';
import {DeckModelView} from "@/models-view/deck-view";

import './data.scss'

type TDataProps = {
    selectedDeck: DeckModelView
}

export const DeckInfoDialog: React.FC<TDataProps> = ({selectedDeck}) => {
    return (
        <div className={"div-root-container"}>
            <p><strong>Name:</strong> {selectedDeck?.name}</p>
            <p><strong>Cards Count:</strong> {selectedDeck?.cardsCount}</p>
            <p><strong>Last Updated:</strong> {selectedDeck?.updated}</p>
            <p><strong>Created by:</strong> {selectedDeck?.author.name}</p>
        </div>
    );
}

