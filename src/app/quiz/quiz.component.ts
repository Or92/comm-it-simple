import { Component, OnInit } from '@angular/core';

import { QuizService } from '../quiz.service';
import { Question } from '../model/question.model';
import { Quiz } from '../model/quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: Quiz;
  Questions: Question[];
  questionNumber: number;
  totalQuestion: number;
  grade: number;
  deltaScore: number;
  answers: string[][];
  correctAns: string[];
  questions: string[];
  userAns: string;

  constructor(private quizService: QuizService) {
    this.grade = 0;
    this.Questions = new Array<Question>();
    this.questionNumber = 1;
    this.answers = [];
    this.correctAns = [];
    this.questions = [];
  }

  ngOnInit() {
    this.quizService.getQuiz().subscribe(quiz => {
      this.quiz = new Quiz(quiz);
      this.quiz.quiz.forEach(question => {
        this.correctAns.push(question.correctAns);
        this.Questions.push(question);
        this.questions.push(question.question);
      });
      this.totalQuestion = this.Questions.length;
      for (let i = 0; i < this.totalQuestion; i++) {
        this.answers[i] = [];
        for (let j = 0; j < this.Questions[i].answers.length; j++) {
          this.answers[i][j] = this.Questions[i].answers[j];
        }
      }
    });

  }

  handleCheckbox(str: string) {
    this.userAns = str;
  }

  next() {
    this.updateGrade('next');
    this.questionNumber++;
  }

  prev() {
    this.updateGrade('prev');
    this.questionNumber--;
  }

  updateGrade(str: string) {
    const pointsPerQuestion = 100 / this.totalQuestion;
    switch (str) {
      case 'next':
        if (this.userAns === this.correctAns[this.questionNumber - 1]) {
          this.userAns = null;
          this.grade = this.grade + pointsPerQuestion;
          this.deltaScore = pointsPerQuestion;
        }
        else { this.deltaScore = 0; }
        break;
      case 'prev':
        this.grade = this.grade - this.deltaScore;
        this.deltaScore = 0;
        break;
    }
  }

}
