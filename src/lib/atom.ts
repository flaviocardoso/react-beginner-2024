
import {atom} from "recoil";
import { TODO } from "../types/todo";
import { dummyData } from "../data/todos";

const todos: TODO[] = JSON.parse(localStorage.getItem("todos") || "[]");
const todosList = todos.length ? todos : dummyData;

export default atom<TODO[]>({
  key: 'todoList',
  default: todosList
})