export function extractIntent(input){

input = input.toLowerCase();

if(
  input.includes("create app") ||
input.includes("something useful") ||
input.includes("make app") ||
input.length < 8
){

return{
   unclear:true,
   message:"Prompt too vague",
   suggestion:"Please specify app type and features"
};

}

return{

 app_type: input.includes("crm") ? "crm" : "general",

 features:[
   input.includes("login") ? "login" : null,
   input.includes("payments") ? "payments" : null
 ].filter(Boolean),

 entities:[
   input.includes("payment") ? "payment" : null
 ].filter(Boolean),

 roles:[
   input.includes("admin") ? "admin" : null
 ].filter(Boolean)

};

}