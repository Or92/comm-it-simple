import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Quiz } from './model/quiz.model';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  getQuiz(): Observable<Quiz> {
    return this.http.get('/assets/data/data.json');
  }
}
