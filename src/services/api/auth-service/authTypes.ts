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

export type AuthResponseType = {
	avatar: string;
	id: string;
	email: string;
	isEmailVerified: boolean;
	name: string;
	created: string;
	updated: string;
	message?: string;
}

export type CreateUserResponseType = {
	avatar: string;
	id: string;
	email: string;
	isEmailVerified: boolean;
	name: string;
	created: string;
	updated: string;
	errorMessages?: string[]
}