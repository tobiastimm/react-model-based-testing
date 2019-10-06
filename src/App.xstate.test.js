import React from 'react'
import App from './App'

import { render, fireEvent, cleanup } from '@testing-library/react'
import { Machine } from 'xstate'
import { createModel } from '@xstate/test'

describe('feedback app', () => {
  const feedbackMachine = Machine({
    id: 'feedback',
    initial: 'question',
    states: {
      question: {
        on: {
          CLICK_GOOD: 'thanks',
          CLICK_BAD: 'tellmewhy',
          CLOSE: 'closed',
        },
        meta: {
          test: ({ getByText }) => {
            expect(getByText('How was your experience?')).toBeDefined()
          },
        },
      },
      tellmewhy: {
        on: {
          SUBMIT: 'thanks',
          CLOSE: 'closed',
        },
        meta: {
          test: ({ getByText }) => {
            expect(getByText('Care to tell us why?')).toBeDefined()
          },
        },
      },
      thanks: {
        on: {
          CLOSE: 'closed',
        },
        meta: {
          test: ({ getByText }) => {
            expect(getByText('Thanks for your feedback.')).toBeDefined()
          },
        },
      },
      closed: {
        type: 'final',
        meta: {
          test: ({ getByTestId }) => {
            expect(getByTestId('app').children.length).toBe(0)
          },
        },
      },
    },
  })

  const feedbackModel = createModel(feedbackMachine).withEvents({
    CLICK_GOOD: ({ getByText }) => {
      fireEvent.click(getByText('Good'))
    },
    CLICK_BAD: ({ getByText }) => {
      fireEvent.click(getByText('Bad'))
    },
    CLOSE: ({ getByTestId }) => {
      fireEvent.click(getByTestId('close-button'))
    },
    SUBMIT: {
      exec: async ({ getByTestId }, event) => {
        fireEvent.change(getByTestId('feedback'), {
          target: { value: event.value },
        })
        fireEvent.click(getByTestId('submit-button'))
      },
      cases: [{ value: 'something' }, { value: '' }],
    },
  })

  const testPlans = feedbackModel.getSimplePathPlans()
  testPlans.forEach(plan => {
    describe(plan.description, () => {
      afterEach(cleanup)
      plan.paths.forEach(path => {
        it(path.description, () => {
          const rendered = render(<App />)
          return path.test(rendered)
        })
      })
    })
  })

  it('coverage', () => {
    feedbackModel.testCoverage()
  })
})
