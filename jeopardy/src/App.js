import logo from './logo.svg';
import './App.css';
import QuestionCard from './components/QuestionCard';

const props = {
  question: "Eddie Gaedel, number 1/8th, was the only one ever to play in the Major Leagues",
  answer: "a midget",
  value: 200
}

function App() {
  return (
    <div className="App">
      <QuestionCard 
      question={props.question}
      answer={props.answer}
      value={props.value}
      />
    </div>
  );
}

export default App;
