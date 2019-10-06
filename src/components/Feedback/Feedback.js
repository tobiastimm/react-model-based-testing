import React, { useReducer } from 'react'
import Question from './Question'
import TellMeWhy from './TellMeWhy'
import Thanks from './Thanks'

const feedbackReducer = (state, action) => {
  switch (state) {
    case 'question':
      switch (action.type) {
        case 'GOOD':
          return 'thanks'
        case 'BAD':
          return 'tellmewhy'
        case 'CLOSE':
          return 'closed'
        default:
          return state
      }
    case 'tellmewhy':
      switch (action.type) {
        case 'SUBMIT':
          return 'thanks'
        case 'CLOSE':
          return 'closed'
        default:
          return state
      }
    case 'thanks':
      switch (action.type) {
        case 'CLOSE':
          return 'closed'
        default:
          return state
      }
    default:
      return state
  }
}

const Feedback = () => {
  const [state, send] = useReducer(feedbackReducer, 'question')
  switch (state) {
    default:
    case 'question':
      return (
        <Question
          onClickGood={() => send({ type: 'GOOD' })}
          onClickBad={() => send({ type: 'BAD' })}
          onClose={() => send({ type: 'CLOSE' })}
        ></Question>
      )
    case 'tellmewhy':
      return (
        <TellMeWhy
          onClickSubmit={value => send({ type: 'SUBMIT', value })}
          onClose={() => send({ type: 'CLOSE' })}
        ></TellMeWhy>
      )
    case 'thanks':
      return <Thanks onClose={() => send({ type: 'CLOSE' })}></Thanks>
    case 'closed':
      return null
  }
}

export default Feedback
