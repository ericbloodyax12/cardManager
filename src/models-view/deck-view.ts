import {Author, Deck} from "@/dto/decks/decks-dto";

export class DeckModelView {
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
    constructor(dto: Deck) {
        this.id = dto.id
        this.userId = dto.userId
        this.name = dto.name
        this.isPrivate = dto.isPrivate
        this.cover = dto.cover
        this.created = dto.created
        this.updated = dto.updated
        this.cardsCount = dto.cardsCount
        this.isFavorite = dto.isFavorite
        this.author = dto.author
    }

    static Map(decksDTO: Deck[]) {
        const decksView = decksDTO.map((dto) => {
            return new DeckModelView(dto)
        })
        return decksView
    }
}


