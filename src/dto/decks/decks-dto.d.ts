// Тип для автора колоды
interface Author {
    id: string;
    name: string;
}

// Тип для колоды
export interface DeckModel extends IDeckBaseModel {
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
    items: DeckModel[];
    pagination: Pagination;
    maxCardsCount: number;
}

export interface IDeckBaseModel {
    "id": string,
    "userId": string,
    "name": string,
    "isPrivate": boolean,
    "cover": string | null,
    "created": string,
    "updated": string,
    "cardsCount": number
}
