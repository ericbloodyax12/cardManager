export type DecksResponseType = {
	items: DecksTypeItem[];
	pagination: DecksTypePagination;
	maxCardsCount: number;
}
export type DecksTypeItemsAuthor = {
	id: string;
	name: string;
}
export type DecksTypeItem = {
	id: string;
	userId: string;
	name: string;
	isPrivate: boolean;
	created: string;
	updated: string;
	cardsCount: number;
	author: DecksTypeItemsAuthor;
}
export type DecksTypePagination = {
	totalItems: number;
	currentPage: number;
	itemsPerPage: number;
	totalPages: number;
}