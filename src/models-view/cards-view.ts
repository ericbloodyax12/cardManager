
import {ICardBaseModel} from "@/dto/cards/cards-dto";

export class CardModelView {
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

    constructor(dto: ICardBaseModel) {
        this.grade = dto.grade
        this.id = dto.id
        this.deckId = dto.deckId
        this.userId = dto.userId
        this.question = dto.question
        this.answer = dto.answer
        this.shots = dto.shots
        this.answerImg = dto.answerImg
        this.questionImg = dto.questionImg
        this.questionVideo = dto.questionVideo
        this.answerVideo = dto.answerVideo
        this.created = dto.created
        this.updated = dto.updated
    }

    static Map(decksDTO: ICardBaseModel[]) {
        const cardsView = decksDTO.map((dto) => {
            return new CardModelView(dto)
        })
        return cardsView
    }
}


