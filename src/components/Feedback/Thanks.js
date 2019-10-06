import React from 'react'

const Thanks = ({ onClose }) => {
  return (
    <form
      action=""
      className="screen bg-white shadow-md rounded px-8 py-8 pt-8 "
    >
      <div className="flex flex-col items-center px-4 pb-4">
        <p className="text-sm block pb-2">Thanks for your feedback.</p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Close
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

export default Thanks
