import { httpsets } from "./main.ts";

async function test() {
    console.log("Testing GET request...");
    console.time("GET");

    const res = await httpsets.GET<{
      userId: number;
      id: number;
      title: string;
      completed: boolean;
    }[]>("https://my-json-server.typicode.com//vedanshshetti/httpsets/users/");

    const data = res.json;

    console.timeEnd("GET");
    console.log("GET result (first 2 items):", data.slice(0, 2)); // print first 2 items
}

test();