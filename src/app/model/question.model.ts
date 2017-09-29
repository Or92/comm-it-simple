export class Question {
  question: string;
  answers: string[];
  correctAns: string;

  constructor(data) {
    data = data || {};
    this.question = data.question;
    this.answers = data.answers;
    this.correctAns = data.correctAns;
  }
}
