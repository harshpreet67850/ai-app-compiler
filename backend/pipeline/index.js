import { extractIntent } from "./intent.js";
import { validateSchema } from "./validator.js";
import { repairSchema } from "./repair.js";

export function runPipeline(input){

 const intent = extractIntent(input);

 const schema = {

    systemDesign:{
      modules:["auth","dashboard","payments"]
    },

    ui:{
      pages:["login","dashboard"]
    },

    db:{
      tables:["users","payments"]
    },

    api:{
      endpoints:["/login","/payments"]
    },

    auth:{
      roles:["user"]
    }

 };

 const validation = validateSchema(schema);

 const repairedSchema = repairSchema(schema);

 return{
    input,
    intent,
    schema: repairedSchema,
    validation
 };

}