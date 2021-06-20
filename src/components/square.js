import React from 'react'

const square = ({value, onclick, isWinnigSquares}) => {
           return <button type="button" className="square" 
           onClick={onclick}
           style={{fontWeight : isWinnigSquares?'bold' : 'normal'}}
           >
               {value}
               </button>
}

export default square
