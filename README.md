# Wardrobe Management System

## Introduction
The **Wardrobe Management System** is a web-based application that helps users manage their clothing items efficiently. It allows users to categorize, filter, search, and organize their wardrobe while providing an intuitive and responsive user interface.

## Technologies Used
- **Frontend:** Vue 3
- **Backend:** Laravel 11
- **Authentication:** Laravel Sanctum
- **Database:** MySQL
- **API Communication:** RESTful API
- **Styling:** Tailwind CSS / Bootstrap
- **Development Server:** XAMPP / Laravel Sail (Docker)

## Features
- User authentication (register, login, logout) using Laravel Sanctum.
- CRUD operations for clothing items (add, edit, delete, view).
- Categorization of clothing items (e.g., shirts, trousers, shoes, accessories).
- Filtering and searching functionality.
- Responsive user interface.

## Installation and Setup
### Prerequisites
Ensure you have the following installed:
- PHP 8.x
- Composer
- Node.js & npm
- MySQL or any preferred database
- Laravel 11
- Vue 3 CLI

### Backend Setup (Laravel 11)
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/wardrobe-management.git
   cd wardrobe-management/backend
   ```
2. Install dependencies:
   ```sh
   composer install
   ```
3. Create an `.env` file:
   ```sh
   cp .env.example .env
   ```
4. Configure database in `.env` file and run migrations:
   ```sh
   php artisan migrate --seed
   ```
5. Generate application key:
   ```sh
   php artisan key:generate
   ```
6. Install Laravel Sanctum:
   ```sh
   php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
   php artisan migrate
   ```
7. Start the Laravel server:
   ```sh
   php artisan serve
   ```

### Frontend Setup (Vue 3)
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add API base URL:
   ```sh
   VITE_API_BASE_URL=http://127.0.0.1:8000/api
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```

## API Endpoints
| Method | Endpoint          | Description |
|--------|------------------|-------------|
| POST   | /api/register    | Register a new user |
| POST   | /api/login       | Authenticate user |
| POST   | /api/logout      | Logout user |
| GET    | /api/clothes     | Fetch all clothing items |
| POST   | /api/clothes     | Add a new clothing item |
| PUT    | /api/clothes/{id}| Update a clothing item |
| DELETE | /api/clothes/{id}| Delete a clothing item |

## Project Structure
```
wardrobe-management/
├── backend/ (Laravel 11 backend)
├── frontend/ (Vue 3 frontend)
```

## Contribution
If you'd like to contribute, please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

## Author
**Kaguru Stanley**

