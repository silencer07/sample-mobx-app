import { Instance, SnapshotOut, types } from 'mobx-state-tree'
import { NavigationStoreModel } from '../../navigation/navigation-store'
import { ToDoListStoreModel } from '../to-do-list-store/to-do-list-store'

/**
 * An RootStore model.
 */
// @ts-ignore
const defaultTodoList: ToDoListStoreModel = {}
export const RootStoreModel = types.model('RootStore').props({
  navigationStore: types.optional(NavigationStoreModel, {}),
  toDoStore: types.optional(ToDoListStoreModel, defaultTodoList)
})

/**
 * The RootStore instance.
 */
export type RootStore = Instance<typeof RootStoreModel>

/**
 * The data of an RootStore.
 */
export type RootStoreSnapshot = SnapshotOut<typeof RootStoreModel>
