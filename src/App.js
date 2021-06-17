import React,{useState} from "react";
import Board from './components/board'
import History from './components/History'
import StatusMessage from './components/statusMessage'
import './styles/root.scss'
import {calculateWinner} from './helpers'  

const App=()=>{

  const [history,setHistory]=useState([{
    boards : Array(9).fill(null),
     isXNext : true
    }])
    const [currentMove, setCurrentMove]=useState(0) 
    const current = history[currentMove]
/*console.log(boards)
    const handleSquareClick=()=>{
        setBoard(5)
    }*/
    const winner= calculateWinner(current.boards)
    
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
  return(
    <div className='app'> 
    <h1>TIC TAC TOE</h1>
    <StatusMessage winner={winner} current={current} />
    <Board boards={current.boards} handleSquareClick={handleSquareClick } />
    <History history={history} moveTo={moveTo} currentMove={currentMove} />
  </div>
  )
}
export default App;
