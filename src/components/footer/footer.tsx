import React from 'react';

import "./footer.scss"

type TFooterProps = {
    height?: number
}

export const Footer: React.FC<TFooterProps> = ({}) => {
    return (
        <footer className={'app-footer-container'}>
            <p>© 2024 Barsegyan. Все права защищены.</p>
        </footer>
    );
}

