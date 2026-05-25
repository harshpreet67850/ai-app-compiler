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
