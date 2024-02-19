export type GetDecksResponse = {
	items: GetDecksResponseItems[];
	pagination: GetDecksResponsePagination;
	maxCardsCount: number;
}
export type GetDecksResponseItemsAuthor = {
	id: string;
	name: string;
}
export type GetDecksResponseItems = {
	id: string;
	userId: string;
	name: string;
	isPrivate: boolean;
	created: string;
	updated: string;
	cardsCount: number;
	author: GetDecksResponseItemsAuthor;
}
export type GetDecksResponsePagination = {
	totalItems: number;
	currentPage: number;
	itemsPerPage: number;
	totalPages: number;
}