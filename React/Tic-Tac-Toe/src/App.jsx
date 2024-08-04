import TicTacToe from "./components/TicTacToe";

function App() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          paddingBottom: "3rem",
          fontSize: "22px",
          fontFamily: "cursive",
        }}
      >
        Tic-Tac-Toe Game
      </h1>
      <TicTacToe />
    </>
  );
}

export default App;
