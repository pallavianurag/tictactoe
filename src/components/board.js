import React from 'react'
import Square from './square'

const board = ({boards, handleSquareClick, winnigSquares}) => {
    
   
    const renderSquare=(position)=>{
        const isWinnigSquares=winnigSquares.includes(position)

        return (
            <Square 
            value={boards[position]}
            onclick={()=>handleSquareClick(position)}
            isWinnigSquares={isWinnigSquares}
            />
        )
    }
    return (
        <div className='board'>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default board
