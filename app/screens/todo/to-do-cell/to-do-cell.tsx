import * as React from 'react'
import { View } from 'react-native'
import { Text } from '../../../components/text'
import { viewPresets } from './to-do-cell.presets'
import { ToDoCellProps } from './to-do-cell.props'
import { Checkbox } from '../../../components/checkbox'
import { observer } from 'mobx-react'

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export const ToDoCell: React.FunctionComponent<ToDoCellProps> = observer(({ preset = 'primary', style: styleOverride, todo, onToggle, ...rest }) => {
  const viewPresetToUse = viewPresets[preset] || viewPresets.primary
  const viewStyle = { ...viewPresetToUse, ...styleOverride }

  return (
    <View style={viewStyle} {...rest} >
      <Checkbox onToggle={onToggle} value={todo.isComplete} />
      <Text text={todo.title || 'Untitled'} />
    </View>
  )
})
