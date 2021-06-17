import React,{useState} from "react";
import Board from './components/board'
import './styles/root.scss'
import {calculateWinner} from './helpers'  

const App=()=>{

  const [boards,setBoard]=useState(Array(9).fill(null))
    const [isXNext, setIsXNext]=useState(false)
/*console.log(boards)
    const handleSquareClick=()=>{
        setBoard(5)
    }*/
    const winner= calculateWinner(boards)
    
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
    const message= winner ? `Winner is ${winner}` : `Next player is ${isXNext ? 'X' : 'O' }`
    const handleSquareClick= (position) =>{

        if(boards[position] || winner)
        return

        setBoard((prev)=>{

            return prev.map((Square, pos)=>{
                if(pos === position)
                return isXNext ? 'X' : 'O'

                return Square
            })
        })
        setIsXNext(prev=>!prev)
    }

  return(
    <div className='app'> 
    <h1>TIC TAC TOE</h1>
    <h2> {message} </h2>
    <Board boards={boards} handleSquareClick={handleSquareClick } />
  </div>
  )
}
export default App;
