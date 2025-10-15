# lab-act-5-cham-dionela-roaring-yumoses

# 🌐 Vue Login Lab

A **Vue 3 authentication demo application** with login functionality using the **DummyJSON API**.  
This project demonstrates JWT-based authentication, route protection, and persistent login management in Vue 3 with Vite.

---

## 🚀 Features

- ⚙️ **Vue 3 + Vite + Pinia + Vue Router**
- 🎨 **Bootstrap 5** for responsive UI styling
- 🔐 **JWT Authentication** with [DummyJSON API](https://dummyjson.com/docs/auth)
- 🧭 **Protected Routes** with navigation guards
- 💾 **Persistent Login** using `localStorage`
- ⏰ **Auto-logout** on token expiration (401 responses)

---

## 📂 Project Structure

│── src/
│ │
│ ├── api/ # Axios client with interceptors
│ │ └── http.js
│ │
│ ├── assets/ # Static assets (images, icons)
│ │ ├── Login.jpg
│ │ ├── vue.svg
│ │ └── Wishlist.png
│ │
│ ├── components/ # Reusable Vue components
│ │ ├── AppNavbar.vue
│ │ └── HelloWorld.vue
│ │
│ ├── pages/ # Main application views
│ │ ├── HomePage.vue # Public landing page
│ │ ├── LoginPage.vue # Login form
│ │ └── DashboardPage.vue # Protected user dashboard
│ │
│ ├── router/ # Application routes and guards
│ │ └── index.js
│ │
│ ├── stores/ # Pinia store for authentication
│ │ └── auth.js
│ │
│ ├── App.vue # Root Vue component
│ ├── main.js # Application entry point
│ └── style.css # Global styles
│
│── .env # Environment variables
│── .env.example # Sample environment configuration
│── package.json # Project dependencies and scripts
│── vite.config.js # Vite configuration file

---
🧪 Test Credentials

Use the following credentials to log in:
Username: emilys
Password: emilyspass


---
✅ Milestones Completed

 Vue 3 + Vite setup

 Bootstrap integration

 Vue Router with 3 pages

 Pinia state management

 Navigation guards

 DummyJSON login API integration

 Axios interceptors for authentication

 Protected dashboard displaying user data

 ---
 🛠️ Setup & Installation
 # 1. Clone the repository
git clone https://github.com/<your-username>/vue-login-lab.git

# 2. Navigate into the project folder
cd vue-login-lab

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev

The app will be available at http://localhost:5173

---

🧰 Tech Stack
| Tool        | Purpose                       |
| ----------- | ----------------------------- |
| Vue 3       | Frontend framework            |
| Vite        | Fast build tool               |
| Pinia       | State management              |
| Vue Router  | Routing and navigation guards |
| Bootstrap 5 | UI styling                    |
| Axios       | API requests and interceptors |


🧑‍💻 Author

Simon Ron Joshua Roaring
Santo Moses Yu
Kenrick Alister Cham
