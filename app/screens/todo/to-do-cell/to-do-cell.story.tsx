import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from '../../../../storybook/views'
import { ToDoCell } from './'
import { ToDoModel } from '../../../models/to-do/to-do'
import { Wallpaper } from '../../../components/wallpaper'
import { clone } from 'ramda'

const todo = {
  id: 1,
  title: 'Do all the things!',
  isComplete: false
}
export const testTodo = ToDoModel.create(todo)

storiesOf('ToDoCell', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Style Presets', () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <Wallpaper/>
        <ToDoCell todo={testTodo} onToggle={testTodo.toggleIsComplete}/>
      </UseCase>
      <UseCase text="Secondary" usage="Centered">
        <Wallpaper/>
        <ToDoCell preset="secondary" todo={testTodo} onToggle={testTodo.toggleIsComplete}/>
      </UseCase>
    </Story>
  ))
  .add('Interaction with ToDo prop', () => {
    const copy = clone(testTodo)
    copy.isComplete = true

    const copy2 = clone(testTodo)
    copy2.title = null

    return (
      <Story>
        <UseCase text="Completed ToDo" usage="When todo is completed by default">
          <Wallpaper/>
          <ToDoCell todo={copy} onToggle={copy.toggleIsComplete}/>
        </UseCase>
        <UseCase text="Title is null" usage="Shows a default title when nothing was supplied">
          <Wallpaper/>
          <ToDoCell todo={copy2} onToggle={copy.toggleIsComplete}/>
        </UseCase>
      </Story>
    )
  })
