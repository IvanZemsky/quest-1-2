import React, { Component } from "react";
import './game.css';

export default class Game extends Component {
   render() {
      return (
         <div className="quest">
            <h2>{this.props.question.title}</h2>
            <div className="questions">
               {this.props.question.variants.map((variant, i) => (
                  <p 
                     className="question"
                     key={i}
                     onClick={() => {
                        if (i === this.props.question.answer) this.props.updateCorrectAnswers(this.props.correctly + 1);
                        this.props.updateStep(this.props.step + 1);
                     }}
                  >
                     {variant}
                  </p>
               ))}
            </div>
         </div>
      );
   }
}
