export function repairSchema(schema){

 if(!schema.ui){
   schema.ui={
      pages:["home"]
   };
 }

 if(!schema.db){
   schema.db={
      tables:["users"]
   };
 }

 if(!schema.api){
   schema.api={
      endpoints:["/health"]
   };
 }

 if(!schema.auth){
   schema.auth={
      roles:["user"]
   };
 }

 return schema;

}