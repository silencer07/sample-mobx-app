import { createStackNavigator } from "react-navigation"
import { FirstExampleScreen } from "../screens/first-example-screen"
import { SecondExampleScreen } from "../screens/second-example-screen"
import { ToDoListScreen } from "../screens/todo/to-do-list"

export const ExampleNavigator = createStackNavigator({
  firstExample: { screen: FirstExampleScreen },
  secondExample: { screen: SecondExampleScreen },
  toDoList: { screen: ToDoListScreen },
},
{
  headerMode: "none",
})
