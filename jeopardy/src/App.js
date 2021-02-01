import logo from './logo.svg';
import './App.css';
import CategoryColumn from './components/CategoryColumn';

const props = {
  question: "Eddie Gaedel, number 1/8th, was the only one ever to play in the Major Leagues",
  answer: "a midget",
  value: 200
}

const questions = {
  category: "Baseball",
  questions: [
    {
      question: "Eddie Gaedel, number 1/8th, was the only one ever to play in the Major Leagues",
      answer: "a midget",
      value: 200
    },
    {
      question: "Eddie Gaedel, number 1/8th, was the only one ever to play in the Major Leagues",
      answer: "a midget",
      value: 400
    },
    {
      question: "Eddie Gaedel, number 1/8th, was the only one ever to play in the Major Leagues",
      answer: "a midget",
      value: 600
    },
    {
      question: "Eddie Gaedel, number 1/8th, was the only one ever to play in the Major Leagues",
      answer: "a midget",
      value: 800
    },
    {
      question: "Eddie Gaedel, number 1/8th, was the only one ever to play in the Major Leagues",
      answer: "a midget",
      value: 1000
    },
  ]
}



function App() {
  return (
    <div className="App">
      <CategoryColumn 
      category={questions.category}
      questions={questions.questions}
      />
    </div>
  );
}

export default App;
