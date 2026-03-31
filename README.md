# Assignment 8  
**Student:** abo al magd  
**Group:** Node_C45_Mon&Thurs_8:30pm_(Online)  

---

## Overview

**Assignment 8** is a backend Node.js project focusing on building a "Saraha"-style message web application. The core feature enables users to receive anonymous or authenticated messages and optionally reply if the sender is a registered user. The project demonstrates secure user management, message handling, cryptographic techniques, and scalable backend architecture.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [API Endpoints](#api-endpoints)
- [Security](#security)
- [Project Sprints](#project-sprints)

---

## Features

### User Management
- Sign up and log in (with password hashing and phone encryption)
- Forgot password flow
- Profile viewing and updating
- Soft deletion and credential updates
- Google and system-based sign-in support

### Messaging
- Send anonymous and authenticated messages (text, images, emojis, attachments)
- Users can fetch their received messages
- Ability to reply if the sender is registered
- Soft deletion of messages

---

## Tech Stack

- **Language:** JavaScript (Node.js)
- **Framework:** Express.js
- **Database:** (Implied from domain logic; likely MongoDB with Mongoose)
- **Core Libraries:** Bcrypt/crypto for security, Express for routing, (potentially JWT, nodemailer for email, dotenv, etc.)
- **Structure:** MVC-inspired, with layered services/controllers/routes per module

---

## System Architecture

```
src/
├── app.bootstrap.js        # Main Express app setup and middleware
├── main.js                 # Entry point
├── modules/
│   ├── auth/               # Authentication (signup, login)
│   └── user/               # User profile logic
├── common/                 # Shared utilities (error handling, security, responses)
├── DB/                     # Database models and utilities
config/
```

- **Express Middleware** for JSON parsing, error handling, and 404 fallback.
- **Modular Routing**: `/auth` for authentication, `/user` for user info.
- **Database Abstraction**: User CRUD operations via service/model layer.
- **Utilities**: Response formatting, cryptographic helpers, validation.

---

## API Endpoints

### Auth
- `POST /auth/signup` — Register a new user with email, hashed password, and encrypted phone.
- `POST /auth/login` — Authenticate existing user with secure credential checks.

### User
- `GET /user?id=...` — Retrieve user profile information (may require authentication).

---

## Security

- Passwords are securely hashed before DB storage.
- Phone numbers and sensitive info are encrypted in the database.
- Rigorous exception handling for credentials and account conflicts.
- Follows secure OTP and email verification paradigms for signup flow (see `SarahaApp.txt` for detailed flow).
- Non-functional concerns include data validation, scalability, performance, and availability.

---

## Project Sprints

- **Sprint 1:** Setup SDLC, folder structure, DB connection, signup, login, hash/encryption.
- **Sprint 2:** Profile operations, token/authentication, authorization, validation, email sending.
- **Sprint 3:** Google account sign-in, file upload, admin-level features, AWS EC2 deployment.

---

## Value Proposition

This repository demonstrates a robust, modern backend design for confidential messaging apps, emphasizing secure user identity management, cryptography, and maintainable code structure. It’s suitable for assignments, small production prototypes, or learning best practices in Node.js API architecture.

---
