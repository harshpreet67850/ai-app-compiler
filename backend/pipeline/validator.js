export function validateSchema(schema){

 let errors=[];

 if(!schema.ui){
   errors.push("Missing UI schema");
 }

 if(!schema.db){
   errors.push("Missing DB schema");
 }

 if(!schema.api){
   errors.push("Missing API schema");
 }

 if(!schema.auth){
   errors.push("Missing Auth schema");
 }

 return{
   valid:errors.length===0,
   errors
 };

}