import React, { Component } from 'react'
<<<<<<< HEAD
import QuizQuestionButton from './QuizQuestionButton.js'
=======

>>>>>>> 6359a9b82e8c8d7f38f07bfa0118fe3198f0d61a
class QuizQuestion extends Component {
  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
<<<<<<< HEAD
            <QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]}/>
=======
            <li>{this.props.quiz_question.answer_options[0]}</li>
>>>>>>> 6359a9b82e8c8d7f38f07bfa0118fe3198f0d61a
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion
