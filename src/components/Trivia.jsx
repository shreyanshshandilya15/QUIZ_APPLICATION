import React, { useEffect, useState }  from "react"
import useSound from "use-sound";
import play from "../assets/play.wav"
import correct from "../assets/correct.mp3"
import wrong from "../assets/wrong.mp3"

export default function Trivia({
  data,
  setstop,
  questionumber,
  setquestionnumber
}) {
   
   const [question,setquestion]=useState(null);
   const [selectedanswer,setselectedanswer]=useState(null);
   const [className,setClassName]=useState("answer");
   const [letsPlay]=useSound(play);
   const [correctanswer]=useSound(correct);
   const [wronganswer]=useSound(wrong);
   
   useEffect(()=>{
    letsPlay();
   },[letsPlay]);
   
   useEffect(()=>{
    setquestion(data[questionumber-1]);
   },[data,questionumber]);
   
   const delay=(duration,callback)=>{
       setTimeout(()=>{
        callback()
       },duration);
   };

   const handleClick=(a)=>{
    setselectedanswer(a);
    setClassName("answer active");
    delay(1000,()=>
    setClassName(a.correct ? "answer correct":"answer wrong")
    );
    delay(2000,()=>{
      if(a.correct){
        
          correctanswer();
          delay(1000,()=>{
            
            setquestionnumber(prev=>prev+1);
            setselectedanswer(null);
          });
      }else{
        wronganswer();
        delay(2000,()=>{

          setstop(true);
        });
      }
    }
    
    );

    setTimeout(()=>{
      
    },3000)
   };
 
  return (
    <div>
      <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
       {question?.answers.map((a)=>(
        <div className={selectedanswer===a? className : "answer"}
           onClick={()=>handleClick(a)}
        >
          {a.text}</div>
       ))}
      </div>
    </div></div>
  );

}    












