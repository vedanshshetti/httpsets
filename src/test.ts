import { httpsets } from "./main.ts";

console.log("Testing GET request...");
console.time("Total time");
const res = await httpsets.GET<{ userId: number, id: number, title: string, completed: boolean }>("https://jsonplaceholder.typicode.com/todos/1");
console.timeEnd("Total time");

console.log(JSON.stringify(res, null, 2));