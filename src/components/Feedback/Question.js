import React from 'react'

const Question = ({ onClickGood, onClickBad, onClose }) => {
  return (
    <form
      action=""
      className="screen bg-white shadow-md rounded px-8 py-8 pt-8 "
    >
      <div className="flex flex-col items-center px-4 pb-4">
        <p className="text-sm block pb-2">How was your experience?</p>
        <div className="flex justify-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onClickGood}
          >
            Good
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onClickBad}
          >
            Bad
          </button>
        </div>
      </div>
      <button
        data-testid="close-button"
        type="button"
        title="close"
        onClick={onClose}
      />
    </form>
  )
}

export default Question
