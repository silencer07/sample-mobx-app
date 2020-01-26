import { ToDoCell } from './to-do-cell'
import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import { testTodo } from './to-do-cell.story'
import { clone } from 'ramda';

describe('<ToDoCell />', () => {
  test('primary style preset', async () => {
    const renderer = ShallowRenderer.createRenderer()
    const component = renderer.render(<ToDoCell todo={testTodo} />)
    expect(component).toMatchSnapshot()
  })

  test('secondary style preset', async () => {
    const renderer = ShallowRenderer.createRenderer()
    const component = renderer.render(<ToDoCell preset="secondary" todo={testTodo} />)
    expect(component).toMatchSnapshot()
  })

  test('Toggle todo complete', async () => {
    const copy = clone(testTodo)
    copy.isComplete = true

    const renderer = ShallowRenderer.createRenderer()
    const component = renderer.render(<ToDoCell todo={copy} />)
    expect(component).toMatchSnapshot()
  })

  test('Title is null', async () => {
    const copy = clone(testTodo)
    copy.title = null

    const renderer = ShallowRenderer.createRenderer()
    const component = renderer.render(<ToDoCell todo={copy} />)
    expect(component).toMatchSnapshot()
  })
})
