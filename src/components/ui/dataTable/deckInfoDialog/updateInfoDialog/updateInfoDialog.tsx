import React, {FormEvent, useState} from 'react';

import {DeckModelView} from "@/models-view/deck-view";
import {TextField} from "@/components/ui/textField";
import {Button} from "@/components/ui/button";
import {useStores} from "@/contexts/storeContext/storeContext";
import {useDialogs} from "@/contexts/dialogProvider/DialogStoreContext";

import "./updateInfoDialog.scss"
import  "@/components/auth/login/login-form.scss";

type TUpdateInfoDialogProps = {
    selectedDeck: DeckModelView
}

export const UpdateInfoDialog: React.FC<TUpdateInfoDialogProps> = ({selectedDeck}) => {

    const [formState, setFormState] = useState<{name:string}>({name: ``})
    const {decksStore} = useStores()!
    const {dialogStore} = useDialogs()

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const {name} = formState!
            await decksStore.updateDeck({deckId: selectedDeck.id, name: name, updatingDeckInfo:selectedDeck})
            await decksStore.getDecks()
            dialogStore.closeDialog()
        } catch (e) {
            throw new Error("ошибка логинизации")
        }

    }

    return (
        <div className={"div-container"}>
            <p><strong>Name:</strong> {selectedDeck?.name}</p>
            <form className="formContainer" onSubmit={onSubmit}>
                <TextField
                    className={"textField"}
                    label={'name'}
                    onChange={(e) => {
                        setFormState({
                            ...formState,
                            name: e.target.value
                        })
                    }}
                />
                <Button  type={'submit'}>
                    Submit
                </Button>
            </form>
        </div>
);
}

