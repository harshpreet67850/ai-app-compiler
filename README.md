# AI App Compiler 🚀

AI App Compiler is a lightweight AI-inspired pipeline that converts natural language prompts into structured application blueprints. The system extracts intent, generates schemas, validates outputs, repairs inconsistencies, and handles vague prompts.

---

## Project Overview

This project simulates how an AI application compiler can transform user requirements into structured app designs.

Example:

Input:

Build CRM with login and payments

Output:

- App Type → CRM
- Features → Login, Payments
- Database Tables → Users, Payments
- API Endpoints → /login, /payments
- System Modules → Auth, Dashboard, Payments

---

## Features

✅ Intent Extraction  
✅ Multi-stage Pipeline Architecture  
✅ Schema Generation  
✅ Validation Engine  
✅ Repair Engine  
✅ Vague Prompt Detection  
✅ Edge Case Handling  
✅ Dataset-based Testing  
✅ Frontend Demo Interface  
✅ Structured JSON Output

---

## Project Structure

```txt
ai-app-compiler
│
├── backend
│   ├── pipeline
│   │   ├── index.js
│   │   ├── intent.js
│   │   ├── validator.js
│   │   ├── repair.js
│   │   └── schema.js
│   │
│   ├── server.js
│   ├── utils.js
│   └── testRunner.js
│
├── frontend
│   └── index.html
│
├── dataset
│   └── testcases.json
│
├── package.json
├── .gitignore
└── README.md


Pipeline Flow :-

User Prompt

↓

Intent Extraction

↓

Schema Generation

↓

Validation

↓

Repair

↓

Structured JSON Output

Example API Request

POST:

{
 "input":"Build CRM with login and payments"
}

Response:

{
 "input":"Build CRM with login and payments",

 "intent":{
   "app_type":"crm",
   "features":[
      "login",
      "payments"
   ]
 },

 "validation":{
    "valid":true
 }
}
Edge Cases Handled

Normal Prompts:

Build CRM with login and payments
Build ecommerce app with dashboard
Build school portal with admin login

Vague / Incomplete Prompts:

Create app
Something useful
Make app
hello

System Response:

{
 "unclear": true,
 "message":"Prompt too vague",
 "suggestion":"Please specify app type and features"
}
Test Dataset

Dataset contains multiple prompt types:

Normal prompts
Incomplete prompts
Edge cases
Vague prompts

Run:

cd backend
node testRunner.js
Run Backend
cd backend
node server.js

Server:

http://localhost:3000
Run Frontend

Open:

frontend/index.html

Then enter prompts and click Generate.

Technologies Used

Node.js
Express.js
JavaScript
HTML
CSS
Future Improvements
Dynamic schema generation
LLM integration
Authentication logic
Database generation
Deployment support
Advanced prompt understanding

Author
Harshpreet Kaur
B.Tech CSE
M.M. Engineering College

 save → terminal:

```bash
git add .
git commit -m "Updated README and final project"
git push
