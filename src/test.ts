import { httpsets } from "./main.ts";


console.timeLog("Test started");
const res = await httpsets.GET<{ userId: number, id: number, title: string, completed: boolean }[]>("https://jsonplaceholder.typicode.com/todos/");
console.timeLog("GET request completed");
console.log(res);