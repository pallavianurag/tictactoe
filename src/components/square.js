import React from 'react'

const square = ({value, onclick}) => {
           return <button type="button" className="square" onClick={onclick}>
               {value}
               </button>
}

export default square
