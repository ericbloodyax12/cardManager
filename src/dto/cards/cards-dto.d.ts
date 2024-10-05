export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalPages: number;
    totalItems: number;
}

export interface ICardBaseModel {
    grade: number;
    id: string;
    deckId: string;
    userId: string;
    question: string;
    answer: string;
    shots: number;
    answerImg: string;
    questionImg: string;
    questionVideo: string;
    answerVideo: string;
    created: string;
    updated: string; // Дата в формате ISO
}



export interface ICardsDataResponse {
    pagination: Pagination;
    items: Item[];
}