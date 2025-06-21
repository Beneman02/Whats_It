import "./StartScreen.css";

const StartScreen = ({startGame}) => {
  return (
    <div className="start"> 
        <h1>Whats It</h1>
        <p>Clique no botão abaixo para começar</p>
        <button onClick={startGame}>Jogar</button>

    </div>
  )
}

export default StartScreen