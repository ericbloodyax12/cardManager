// Тип для автора колоды
interface Author {
    id: string;
    name: string;
}

// Тип для колоды
export interface Deck {
    id: string;
    userId: string;
    name: string;
    isPrivate: boolean;
    cover: string | null;
    created: string;
    updated: string;
    cardsCount: number;
    isFavorite: boolean;
    author: Author;
}

// Тип для пагинации
interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalPages: number;
    totalItems: number;
}

// Основной тип ответа с сервера
export interface DecksResponse {
    items: Deck[];
    pagination: Pagination;
    maxCardsCount: number;
}

export interface CreateDeckResponse {
    "id": string,
    "userId": string,
    "name": string,
    "isPrivate": boolean,
    "cover": string | null,
    "created": string,
    "updated": string,
    "cardsCount": number
}
