import {Author, DeckModel} from "@/dto/decks/decks-dto";

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
    constructor(dto: DeckModel) {
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

    static Map(decksDTO: DeckModel[]) {
        const decksView = decksDTO.map((dto) => {
            return new DeckModelView(dto)
        })
        return decksView
    }
}


