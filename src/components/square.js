import React from 'react'

const square = ({value, onclick, isWinnigSquares}) => {
           return <button type="button" className="square" 
           onClick={onclick}
           className={`square ${isWinnigSquares ? 'winning':''} 
           ${value==='X' ? 'text-green' : 'text-orange'}
           `}
           style={{fontWeight : isWinnigSquares?'bold' : 'normal'}}
           >
               {value}
               </button>
}

export default square
