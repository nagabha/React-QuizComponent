import React, { Component } from 'react'
<<<<<<< HEAD
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'
=======
>>>>>>> 6359a9b82e8c8d7f38f07bfa0118fe3198f0d61a
let quizData = require('./quiz_data.json')
class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = { quiz_position : 1}
  }
  render() {
<<<<<<< HEAD
    const isQuizEnd = (this.state.quiz_position -1 === quizData.quiz_questions.length);
    return (
      <div>
        {isQuizEnd ? (
            <QuizEnd />
        ) : (
          <QuizQuestion quiz_question={quizData.quiz_questions
            [this.state.quiz_position -1]} />
        )}
    </div>
=======
    return (
      <div>
        <div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div>
      </div>
>>>>>>> 6359a9b82e8c8d7f38f07bfa0118fe3198f0d61a
    )
  }
}

export default Quiz
