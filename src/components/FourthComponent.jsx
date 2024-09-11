import React from 'react'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'

const FourthComponent = () => {
  return (
    <div className="importações-container">
        <SecondComponent />
        <ThirdComponent />
    </div>
  )
}

export default FourthComponent