import { useEffect, useMemo, useState } from 'react';
import './App.css'
import Questions from './components/Trivia';
import Timer from './components/Timer'
import Start from "./components/Start"

function App() {
  const [questionumber,setquestionnumber]=useState(1);
  const [stop,setstop]=useState(false);
  const [earned,setearned]=useState("$ 0");
  const [username, setusername] = useState(localStorage.getItem('quizAppUser'))
  
 
 const data=[
    {
      id:1,
      question:"Rolex is a company that specializes in which type of product?",
      answers:[
        {
          text:"Phone",
          correct:false,
        },
        {
          text:"watches",
          correct:true,
        },
        {
          text:"bottles",
          correct:false,
        },
        {
          text:"pen",
          correct:false,
        }
      ]
    },
    {
      id:2,
      question:"who is the richest person of the world ?",
      answers:[
        {
          text:"elon musk",
          correct:true,
        },
        {
          text:"mark zuckerberg",
          correct:false,
        },
        {
          text:"mukesh ambani",
          correct:false,
        },
        {
          text:"bill gates",
          correct:false,
        }
      ]
    },
    {
      id:3,
      question:"which is most subscribed youtube channel in world?",
      answers: [
        {
          text:"pewdiepie",
          correct:false,
        },
        {
          text:"dudeperfect",
          correct:false,
        },
        {
          text:"mr. beast",
          correct:false,
        },
        {
          text:"t series",
          correct:true,
        }
      ]
    },
    {
      id: 4,
      question: "Who is the founder of SpaceX?",
      answers: [
        {text: "Elon Musk", correct: true},
        {text: "Jeff Bezos", correct: false},
        {text: "Richard Branson", correct: false},
        {text: "Mark Zuckerberg", correct: false}
      ]
    },
    {
      id: 5,
      question: "In which year did the first manned moon landing take place?",
      answers: [
        {text: "1969", correct: true},
        {text: "1975", correct: false},
        {text: "1982", correct: false},
        {text: "1990", correct: false}
      ]
    },
    {
      id: 6,
      question: "What is the capital city of Japan?",
      answers: [
        {text: "Tokyo", correct: true},
        {text: "Beijing", correct: false},
        {text: "Seoul", correct: false},
        {text: "Bangkok", correct: false}
      ]
    },
    {
      id: 7,
      question: "Who wrote the play Romeo and Juliet?",
      answers: [
        {text: "William Shakespeare", correct: true},
        {text: "Jane Austen", correct: false},
        {text: "Charles Dickens", correct: false},
        {text: "Mark Twain", correct: false}
      ]
    },
    {
      id: 8,
      question: "What is the largest planet in our solar system?",
      answers: [
        {text: "Jupiter", correct: true},
        {text: "Saturn", correct: false},
        {text: "Neptune", correct: false},
        {text: "Mars", correct: false}
      ]
    },
    {
      id: 9,
      question: "Which country is known as the Land of the Rising Sun?",
      answers: [
        {text: "Japan", correct: true},
        {text: "China", correct: false},
        {text: "South Korea", correct: false},
        {text: "Vietnam", correct: false}
      ]
    },
    {
      id: 10,
      question: "What is the chemical symbol for gold?",
      answers: [
        {text: "Au", correct: true},
        {text: "Ag", correct: false},
        {text: "Fe", correct: false},
        {text: "Cu", correct: false}
      ]
    },
    {
      id: 11,
      question: "Who painted the Mona Lisa?",
      answers: [
        {text: "Leonardo da Vinci", correct: true},
        {text: "Michelangelo", correct: false},
        {text: "Vincent van Gogh", correct: false},
        {text: "Pablo Picasso", correct: false}
      ]
    },
    {
      id: 12,
      question: "What is the currency of Australia?",
      answers: [
        {text: "Australian Dollar", correct: true},
        {text: "Euro", correct: false},
        {text: "Yen", correct: false},
        {text: "Pound Sterling", correct: false}
      ]
    },
    {
      id: 13,
      question: "Which planet is known as the Red Planet?",
      answers: [
        {text: "Mars", correct: true},
        {text: "Venus", correct: false},
        {text: "Jupiter", correct: false},
        {text: "Saturn", correct: false}
      ]
    },
    {
      id: 14,
      question: "Who wrote the novel To Kill a Mockingbird?",
      answers: [
        {text: "Harper Lee", correct: true},
        {text: "J.K. Rowling", correct: false},
        {text: "Ernest Hemingway", correct: false},
        {text: "F. Scott Fitzgerald", correct: false}
      ]
    },
    {
      id: 15,
      question: "What is the world's longest river?",
      answers: [
        {text: "Amazon River", correct: true},
        {text: "Nile River", correct: false},
        {text: "Yangtze River", correct: false},
        {text: "Mississippi River", correct: false}
      ]
    }
  ]

  const moneypyramid= useMemo(()=>
  [
    {id:1,amount:"$ 100"},
    {id:2,amount:"$ 200"},
    {id:3,amount:"$ 300"},
    {id:4,amount:"$ 500"},
    {id:5,amount:"$ 1000"},
    {id:6,amount:"$ 2000"},
    {id:7,amount:"$ 4000"},
    {id:8,amount:"$ 8000"},
    {id:9,amount:"$ 16000"},
    {id:10,amount:"$ 32000"},
    {id:11,amount:"$ 64000"},
    {id:12,amount:"$ 125000"},
    {id:13,amount:"$ 250000"},
    {id:14,amount:"$ 500000"},
    {id:15,amount:"$ 1000000"}
  ].reverse(),[]
  );


  useEffect(() => {
    if (questionumber > 1) {
      const reversedPyramid = moneypyramid.slice().reverse(); // Reverse the pyramid order
      const totalEarned = reversedPyramid
        .slice(0, questionumber - 1) // Consider only the previous questions
        .reduce((sum, m) => sum + parseInt(m.amount.replace("$ ", "").replace(",", "")), 0);
  
      setearned(`$ ${totalEarned}`);
    }
  }, [moneypyramid, questionumber]);
  
  return (
    <div className="App">
      {username ?
       <>
 <div className="main">
          {stop ? <h1 className='endtext'> you earned : {earned}</h1>:
          (
           <>
           <div className='top'>
            <div className='timer'>
            <Timer 
            setstop={setstop} 
            questionumber={questionumber}
            />
          </div>
          </div>
          <div className='bottom'>
          <Questions 
             data={data}
             setstop={setstop}
             questionumber={questionumber}
             setquestionnumber={setquestionnumber}
          />
           </div>
           </>
          )
          }
        </div>  
  <div className="pyramid">

        <ul className="moneylist">
          {moneypyramid.map((m)=>(
            <li className={questionumber===m.id ? "moneylistitem active" : "moneylistitem"}>
              <span className="moneylistitemnumber">{m.id}</span>
              <span className="moneylistitemamount">{m.amount}</span>
            </li>
          ))}
          
        </ul>
        </div>
      </> 
      : <Start setusername={setusername}/>}

       
    </div>
  );
}

export default App;





