import { Question } from './question.model';

export class Quiz {
  quiz: Question[];

  constructor(data) {
    data = data || {};
    this.quiz = data.quiz;
  }
}
