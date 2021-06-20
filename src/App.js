import React,{useState} from "react";
import Board from './components/board'
import History from './components/History'
import StatusMessage from './components/statusMessage'
import './styles/root.scss'
import {calculateWinner} from './helpers'  

const App=()=>{
  const NEW_GAME=[{
    boards : Array(9).fill(null),
     isXNext : true
    }]
  const [history,setHistory]=useState(NEW_GAME)
    const [currentMove, setCurrentMove]=useState(0) 
    const current = history[currentMove]
/*console.log(boards)
    const handleSquareClick=()=>{
        setBoard(5)
    }*/
    const {winner, winnigSquares}= calculateWinner(current.boards)
    
   /* while(!winner)
    {
     const f=0
    for(let i=0;i<boards.length;i++)
    {
      if (boards[i]===null)
      {f==1;
        break;
      }
    }
      if(f==1)
     const message= winner ? `Winner is ${winner}` : `Next player is ${isXNext ? 'X' : 'O' }`
    else
    {
      let message=`TIE`
      break
    }
    }*/
   
    const handleSquareClick= (position) =>{

        if(current.boards[position] || winner)
        return

        setHistory((prev)=>{

          const last=prev[prev.length-1]

            const newBoard = last.boards.map((Square, pos)=>{
                if(pos === position)
                return last.isXNext ? 'X' : 'O'

                return Square
            })
            return prev.concat({boards: newBoard, isXNext:!last.isXNext})
        })
        setCurrentMove(prev=>prev+1)
    }
    const moveTo=(move)=>{
      setCurrentMove(move)
    }
    const startNewGame=()=>
    {
      setHistory(NEW_GAME)
      setCurrentMove(0)
    }

  return(
    <div className='app'> 
    <h1>TIC TAC TOE</h1>
    <StatusMessage winner={winner} current={current} />
    <Board boards={current.boards} handleSquareClick={handleSquareClick } winnigSquares={winnigSquares} />
    <button type="button" onClick={startNewGame}> START NEW GAME </button>
    <History history={history} moveTo={moveTo} currentMove={currentMove} />
  </div>
  )
}
export default App;
