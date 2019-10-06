import React from 'react'

const TellMeWhy = ({ onClickSubmit, onClose }) => {
  return (
    <form
      action=""
      className="screen bg-white shadow-md rounded px-8 py-8 pt-8 "
    >
      <div className="flex flex-col items-center px-4 pb-4">
        <div className="px-4 pb-4">
          <label htmlFor="feedback" className="text-sm block font-bold  pb-2">
            Care to tell us why?
          </label>
          <textarea
            name="feedback"
            id="feedback"
            data-testid="feedback"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
          />
        </div>
        <div>
          <button
            onClick={onClickSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
            data-testid="submit-button"
          >
            Submit
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

export default TellMeWhy
