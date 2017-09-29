"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Question = (function () {
    function Question(data) {
        data = data || {};
        this.question = data.question;
        this.answers = data.answers;
        this.correctAns = data.correctAns;
    }
    return Question;
}());
exports.Question = Question;
