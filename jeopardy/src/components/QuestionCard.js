import React, {Component} from 'react';

class QuestionCard extends Component{
    constructor(props) {
        console.log('PROPS ', props)
        super(props);
        this.state = {
            question: this.props.question,
            answer: this.props.answer,
            value: this.props.value,
            answered: false
        };
        this.answerQuestion = this.answerQuestion.bind(this);
    }

    answerQuestion(e){
        this.setState({answered: true})
    }

    render(){
        console.log('STATE ', this.state)
        return (
                this.state.answered ?
                <div>{this.state.question}</div> 
                :
                <div onClick={this.answerQuestion}>{this.state.value}</div>
        )
    }
}

export default QuestionCard;
// id	8
// answer	"a midget"
// question	"Eddie Gaedel, number 1/8th, was the only one ever to play in the Major Leagues"
// value	200
// airdate	"1985-02-08T12:00:00.000Z"
// created_at	"2014-02-11T22:47:18.901Z"
// updated_at	"2014-02-11T22:47:18.901Z"
// category_id	2
// game_id	null
// invalid_count	null
// category	
// id	2
// title	"baseball"
// created_at	"2014-02-11T22:47:18.706Z"
// updated_at	"2014-02-11T22:47:18.706Z"
// clues_count	45