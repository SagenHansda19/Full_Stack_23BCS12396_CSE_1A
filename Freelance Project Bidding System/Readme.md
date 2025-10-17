# Freelance Project Bidding System

A full-stack web application that simulates a real-world freelancing platform. It enables employers to post projects and manage tasks using a Kanban board, while freelancers can browse projects and place bids.

**Student:** Sagen Hansda
**UID:** 23BCS12396

---

## Features

-   **User Authentication:** Secure user registration and login using JWT (JSON Web Tokens).
-   **Role-Based Access:** Distinct dashboards and permissions for **Employers** and **Freelancers**.
-   **Project Management:** Employers can create, update, and view their projects.
-   **Task Management (Kanban):** Projects include a task board for managing workflow (To Do, In Progress, Done).
-   **Bidding System:** Freelancers can browse available projects and submit competitive bids.
-   **Real-time Communication (Future Scope):** WebSocket-based chat for project discussions.

---

## Tech Stack

| Category     | Technology                                             |
| :----------- | :----------------------------------------------------- |
| **Frontend** | React, Vite, Tailwind CSS / Material UI                |
| **Backend** | Java 17, Spring Boot, Spring Security, Spring Data JPA |
| **Database** | PostgreSQL                                             |

---

## System Architecture

The application follows a standard client-server architecture:

1.  The **React frontend** acts as the client, providing a dynamic user interface.
2.  It communicates with the backend via a **RESTful API**.
3.  The **Spring Boot backend** handles all business logic, data processing, and authentication.
4.  A **PostgreSQL** database persists all application data.



[Image of a simple web application architecture diagram]


---

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Run the Backend Server

-   Ensure your PostgreSQL database is running and accessible.
-   Open the `Backend/freelance` directory in IntelliJ IDEA.
-   Run the `FreelanceApplication.java` file to start the server.
-   The backend will be available on `http://localhost:8080`.

### 2. Run the Frontend Application

1.  **Navigate to the frontend directory:**
    ```bash
    cd Frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
-   The frontend will be available at `http://localhost:5173`.

---

## API Endpoints

Here are some of the key API endpoints:

| Method | Endpoint                    | Description                       |
| :----- | :-------------------------- | :-------------------------------- |
| `POST` | `/api/auth/register`        | Registers a new user.             |
| `POST` | `/api/auth/login`           | Logs in a user and returns a JWT. |
| `POST` | `/api/projects`             | Creates a new project.            |
| `GET`  | `/api/projects/{projectId}` | Fetches details for a single project. |
| `POST` | `/api/projects/{projectId}/tasks` | Creates a new task for a project. |