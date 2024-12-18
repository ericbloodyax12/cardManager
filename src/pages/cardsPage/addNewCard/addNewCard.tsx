import React, {FormEvent, useState} from 'react';
import {TextField} from "@/components/ui/textField";
import {Button} from "@/components/ui/button";
import {useStores} from "@/contexts/storeContext/storeContext";
import {DeckModelView} from "@/models-view/deck-view";
import {useDialogs} from "@/contexts/dialogProvider/DialogStoreContext";

import "./addNewCard.scss"

type TAddNewCardProps = {
    selectedDeck: DeckModelView
}

export const AddNewCard: React.FC<TAddNewCardProps> = ({selectedDeck}) => {

    const {cardsStore} = useStores()!
    const {dialogStore} = useDialogs()
    const [formState, setFormState] = useState<{
        question: string,
        answer: string
    }>({question:"", answer: ""})

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const {question, answer} = formState!
            await cardsStore.addNewCard({
                deckId: selectedDeck.id,
                question: question,
                answer: answer,
                updatingDeckInfo:selectedDeck
            })
            await cardsStore.getCards(selectedDeck.id); // обновление стейта, без релода странички
            dialogStore.closeDialog()

        } catch (e) {
            throw new Error("ошибка логинизации")
        }

    }
    return (
        <div className={"addNewCard-divRootContainer"}>
            <p><strong>Name:</strong> {selectedDeck?.name}</p>
            <form className="formContainer" onSubmit={onSubmit}>
                <TextField
                    className={"textField"}
                    label={'question'}
                    onChange={(e) => {
                        setFormState({
                            ...formState,
                            question: e.target.value
                        })
                    }}
                />
                <TextField
                    className={"textField"}
                    label={'answer'}
                    onChange={(e) => {
                        setFormState({
                            ...formState,
                            answer: e.target.value
                        })
                    }}
                />
                <div className={"addNewCardButtonContainer"}>
                    <Button type={'submit'} className="submitButton">
                        Submit
                    </Button>
                </div>

            </form>

        </div>
    );
}

