import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * A TODO list item
 */
export const ToDoModel = types
  .model("ToDo")
  .props({
    /**
     * A unique identifier for this todo
     */
    id: types.identifierNumber,

    /**
     * The main title of this todo. Ex: "Buy cat food"
     */
    title: types.string,

    /**
     * Boolean indicating whether this item is complete or not. Default is false.
     */
    isComplete: types.optional(types.boolean, false),
  })
  // setters
  .actions(self => ({
    setId(value: number) {
      self.id = value
    },
    setTitle(value: string) {
      self.title = value
    },
    toggleIsComplete() {
      self.isComplete = !self.isComplete
    },
  }))

export type ToDo = Instance<typeof ToDoModel>
export type ToDoSnapshot  = SnapshotOut<typeof ToDoModel>
