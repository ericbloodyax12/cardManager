import React, {ReactNode} from 'react';

type TIconButtonProps = {
    label: string,
    iconComponent: ReactNode,
    method?: () => void
}

export const IconButton: React.FC<TIconButtonProps> = ({label, iconComponent,method}) => {

    return (
        <button onClick={method} className={"button-icon"} data-hover={label}>
            <div className={"div-icon"}>
                {iconComponent}
            </div>
        </button>
    );
}

