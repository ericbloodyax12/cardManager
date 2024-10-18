import React, {FormEvent, useState} from 'react';

import {DeckModelView} from "@/models-view/deck-view";
import {TextField} from "@/components/ui/textField";
import {Button} from "@/components/ui/button";
import {useStores} from "@/contexts/storeContext/storeContext";
import {useDialogs} from "@/contexts/dialogProvider/DialogStoreContext";
import  "@/components/auth/login/login-form.scss";
import {CardModelView} from "@/models-view/cards-view";

import "./editCardDialog.scss"

type TUpdateInfoDialogProps = {
    selectedDeck: DeckModelView;
    selectedCard: CardModelView;
}
type TFormData = {
    question:string,
    answer: string
}

export const EditCardDialog: React.FC<TUpdateInfoDialogProps> = ({selectedDeck, selectedCard }) => {

    const [formState, setFormState] = useState<TFormData>({question:"", answer:""})
    const {cardsStore} = useStores()!
    const {dialogStore} = useDialogs()

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const {question, answer} = formState!
            await cardsStore.updateCard({cardId: selectedCard.id, question: question, answer: answer})
            await cardsStore.getCards(selectedDeck.id)
            dialogStore.closeDialog()
        } catch (e) {
            throw new Error("ошибка логинизации")
        }

    }

    return (
        <div className={"div-container"}>
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
                    defaultValue={selectedCard.answer}
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
                    defaultValue = {selectedCard.answer}
                />
                <Button  type={'submit'}>
                    Submit
                </Button>
            </form>
        </div>
    );
}

