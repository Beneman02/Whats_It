import { useState, useRef } from "react";
import  "./Game.css"
const Game = ({verifyLetter, 
  pickedWord, 
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter,setLetter] = useState("");
  const letterinputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
    letterinputRef.current.focus();
  }
  return (
    <div>
     <div className="Game"> 
      <p className="points">
        <span> Pontuação: {score} </span>
      </p>
      <h1> Advinhe a Palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3> 
      <p>Você ainda tem {guesses} tentativas(s).</p>


      <div className="wordContainer">
       {letters.map((letter, i) => 
        guessedLetters.includes(letter) ? (
          <span key={i} className="letter">
             {letter}
             </span>
             ) : (

            <span key={i} className="blankSquare"> </span>
        )


       )}
      </div>
<div className="letterContainer">
<p>Tente advinhar uma letra da palavra:</p>
<form onSubmit={handleSubmit}>
 <input type="text" name="letter" maxLength="1" required 
 onChange={(e) => setLetter(e.target.value)}  
 value={letter}
 ref={letterinputRef}
 />
 <button>Jogar! </button>
</form>
 
 <div className="wrongLettersContainer">
 <p>Letras já Utilizadas:</p>
 {wrongLetters.map((letter, i) => (
  <span key={i}>{letter}, </span>
 ))}
 </div>

</div>

     </div>
      </div>
  )
}

export default Game