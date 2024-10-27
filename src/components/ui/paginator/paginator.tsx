import React from 'react';
import {Paginator  } from "primereact/paginator";

import './paginator.scss'

type TPaginatorProps  = React.ComponentProps<typeof Paginator> & {
        first: number;
        rows: number;
        totalRecords: number;
        onPageChange: (e: any) => void;
        rowsPerPageOptions: number[];

}

export const PaginatorComponent: React.FC<TPaginatorProps> = ({
                                                                  first,
                                                                  rows,
                                                                  totalRecords,
                                                                  onPageChange,
                                                                  rowsPerPageOptions

                                                              }) => {
    return (

            <Paginator
                first={first}
                rows={rows}
                totalRecords={totalRecords}
                onPageChange={onPageChange}
                rowsPerPageOptions={rowsPerPageOptions}
                className="paginator"
            />

    );
}

