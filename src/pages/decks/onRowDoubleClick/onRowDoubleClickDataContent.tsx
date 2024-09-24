import React, {FormEvent, useState} from 'react';
import {TextField} from "@/components/ui/textField";
import {Button} from "@/components/ui/button";
import "./onRowDoubleClickDataContent.scss"
import s from "@/components/auth/login/login-form.module.scss";
import {useStores} from "@/contexts/storeContext/storeContext";


type TOnRowDoubleClickDataContetProps = {

}

export const OnRowDoubleClickDataContent: React.FC<TOnRowDoubleClickDataContetProps> = ({}) => {
    const {decksStore} = useStores()!
    const [formState, setFormState] = useState<{name:string}>({ name: '' })

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const {name} = formState!
            console.log("its name:", name)
            await decksStore.createDeck(name)

        } catch (e) {
            throw new Error("ошибка создания")
        }

    }

    return (
        <div className="onRowDoubleClickDataContent-DivContainer">


            <form className={s.formContainer} onSubmit={onSubmit}>
                <TextField id="onRowDoubleClickDataContet"
                           className={"onRowDoubleClickDataContent-input"}
                           label="Eter name"
                           onChange={(e) => { // todo когда непосредственно вводишь текст его невидно
                               setFormState({
                                   ...formState,
                                   name: e.target.value
                               })
                           }}
                >

                </TextField>
                <Button type={'submit'} variant={"primary"}>Create</Button>
            </form>
        </div>
);
}
