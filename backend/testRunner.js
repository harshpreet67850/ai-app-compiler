import fs from "fs";
import { runPipeline } from "./pipeline/index.js";

const tests = JSON.parse(
fs.readFileSync("../dataset/testcases.json","utf8")
);

tests.forEach((test,index)=>{

console.log("\n----------------");

console.log("TEST:",index+1);

console.log(
JSON.stringify(
runPipeline(test.input),
null,
2
)

);

});