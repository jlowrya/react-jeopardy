import React from 'react';
import QuestionCard from './QuestionCard';


//expeecte
const CategoryColumn = (props) => {
    console.log('PROPS ', props)
    return (
        <div>
        <Category category={props.category}/>
        {props.questions.map((question)=>
            <QuestionCard 
            question={question.question}
            answer={question.answer}
            value={question.value}
            />
            )}
        </div>
    )   
}

const Category = ({category}) => {
    return <div>
        {category}
    </div>
}

export default CategoryColumn;