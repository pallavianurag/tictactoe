import React from 'react'

//const message= winner ? `Winner is ${winner}`
//: `Next player is ${current.isXNext ? 'X' : 'O' }`
/**/
            //
           // 
const statusMessage = ({winner,current}) => {

    const noMovesLeft = current.boards.every(el => el !== null)
    return (
        <h2>
            {winner &&  `Winner is ${winner}`}
            {!winner && !noMovesLeft && `Next player is ${current.isXNext ? 'X' : 'O'}`}
            {!winner && noMovesLeft && 'X and O tied' }
        </h2>
            
        
    )
}

export default statusMessage
