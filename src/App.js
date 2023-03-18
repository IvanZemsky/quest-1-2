import React, { Component } from "react";
import Game from "./components/Game/Game.js";
import Result from "./components/Result/Result.js";

export default class App extends Component {
   constructor(props) {
      super(props);

      this.state = {
         step: 0,
         correctly: 0
      };

      this.updateStep = this.updateStep.bind(this);
      this.updateCorrectAnswers = this.updateCorrectAnswers.bind(this);

      this.questions = [
         {
            title: 'React - это...',
            variants: ['фреймворк', 'библиотека', 'язык программирования'],
            answer: 1 // index in the array of variants
         },
         {
            title: 'Хук useState в React.js - это...',
            variants: ['хук для создания состояния', 'хук для создания ref'],
            answer: 0
         },
         {
            title: 'Какое правильное написание атрибута класса в JSX?',
            variants: ['class', 'class_name', 'className'],
            answer: 2
         }
      ];

   }

   updateStep(value) {
      this.setState({step: value});
   }

   updateCorrectAnswers(value) {
      this.setState({correctly: value});
   }

   render() {
      if (this.state.step < 3) {
         return (
            <Game
               step={this.state.step} updateStep={this.updateStep}
               correctly={this.state.correctly} updateCorrectAnswers={this.updateCorrectAnswers}
               question={this.questions[this.state.step]}
            />
         );
      }
      else return <Result correctly={this.state.correctly}/>
      
   }

}
