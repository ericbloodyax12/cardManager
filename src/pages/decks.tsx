import {observer} from "mobx-react-lite";

import {DataTableComponent} from "@/components/ui/dataTable/dataTable";
import React, {useEffect, useState} from "react";
import {Paginator} from "primereact/paginator";
import {useStores} from "@/contexts/storeContext/storeContext";
import {Button} from "@/components/ui/button";
import {Dialog} from "primereact/dialog";

import s from './decks.module.scss'

export const Decks = observer(() => {
    const {decksStore} = useStores()!
    const [NewDeck, setNewDeck] = useState();
    const [isDialogVisible, setDialogVisible] = useState(false)
    console.log('decksStore.UserTokensUpdateCount', decksStore.UserTokensUpdateCount);

    const {
        decks,
        pagination,
    } = decksStore;

    useEffect(() => {
        decksStore.getDecks(pagination.currentPage, pagination.itemsPerPage);
    }, [pagination.currentPage, pagination.itemsPerPage]);


    const onPageChange = (e: any) => {
        const curretntPage = e.page + 1 // PrimeReact paginator начинает с 0, поэтому прибавляем 1
        if (pagination.currentPage !== curretntPage) {
            decksStore.setPage(curretntPage);
        } else if (pagination.itemsPerPage !== e.rows) {
            decksStore.setItemsPerPage(e.rows);
        }
    };


    const addNewDeck = (e: React.MouseEvent<HTMLButtonElement>) => {
        // setNewDeck(e);
        setDialogVisible(true)
        console.log(e)
    };

    const hideDialog = () => {
        setDialogVisible(false);
        // setNewDeck(null);
    };

    return (
        <div className={s.divMainContainer}>
            <div className={s.divMainContainer__dataTable}>
                <div className={s.divMainContainer__dataTable__div}>
                    <Button onClick={addNewDeck}>Add new Deck</Button>
                </div>
                <DataTableComponent items={decks}/>
                <Dialog header="New Card" visible={isDialogVisible} style={{width: '70vw'}} onHide={hideDialog}>
                    <div>
                        <p><strong>Name:</strong> as</p>
                        <p><strong>Cards Count:</strong> sa</p>
                        <p><strong>Last Updated:</strong>ass</p>
                        <p><strong>Created by:</strong> ssa</p>
                    </div>

                </Dialog>

            </div>
            <Paginator
                first={(pagination.currentPage - 1) * pagination.itemsPerPage}
                rows={pagination.itemsPerPage}
                totalRecords={pagination.totalItems}
                onPageChange={onPageChange}
                rowsPerPageOptions={[5, 10, 25, 50]}
                className={s.paginator}
            />
        </div>

    );
});
