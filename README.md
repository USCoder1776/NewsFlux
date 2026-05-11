# 📰 NewsFlux

NewsFlux is a full-stack news aggregation web application built using **Node.js, Express.js, MongoDB, EJS, and Bootstrap**.

It allows users to browse breaking news, filter news by category, search articles dynamically, and add custom news posts.

---

## 🚀 Features

- 📰 Breaking News Homepage
- 🏷️ Category-Based News Filtering
- 🔍 Dynamic Search Functionality
- ➕ Add Custom News
- 💾 MongoDB Database Integration
- 🎨 Styled UI with Bootstrap + CSS
- ⚡ Dynamic Rendering using EJS

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Frontend
- EJS
- Bootstrap
- CSS

---

## 📂 Project Structure

```text
NewsFlux/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── views/
│   ├── app.js
│   └── package.json
│
├── public/
│   ├── css/
│   ├── images/
│
└── README.md
```


## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/USCoder1776/NewsFlux.git
```

### 2️⃣ Navigate to the Project Folder

```bash
cd NewsFlux
```

### 3️⃣ Navigate to Backend Folder

```bash
cd backend
```

### 4️⃣ Install Dependencies

```bash
npm install
```

### 5️⃣ Create `.env` File

Create a `.env` file inside the `backend` folder and add:

```env
MONGO_URI=your_mongodb_connection_string
```

### 6️⃣ Start the Server

```bash
npm start
```

### 7️⃣ Open in Browser

```text
http://localhost:3000
```
---

## 🔍 Functionalities

### 🔎 Search News

Users can search news articles using keywords.

Search works on:

- Title
- Description

---

### 🏷️ Category Filtering

Users can browse news based on categories such as:

- Tech
- Sports
- Breaking

---

### ➕ Add News

Users can add custom news articles dynamically through the platform.

---

### 💾 Database Integration

All news data is stored and managed using **MongoDB**.

---

### 🎨 Dynamic Rendering

News content is dynamically rendered using **EJS templates**.
