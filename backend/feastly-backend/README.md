# 🍔 Feastly Backend API

Production-ready Node.js/Express backend for a food delivery platform.

## Features
- JWT Authentication (user & admin roles)
- Food CRUD with filtering, search, pagination
- Cart system (DB-based)
- Order management with status tracking
- Mock payment system
- Input validation, rate limiting, security headers
- MongoDB with Mongoose + indexes

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Create .env file
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret

# 3. Seed database (creates sample foods + admin/user accounts)
npm run seed

# 4. Start server
npm run dev
```

## Default Accounts (after seeding)
| Role  | Email              | Password  |
|-------|--------------------|-----------|
| Admin | admin@feastly.com  | admin123  |
| User  | user@feastly.com   | user123   |

## API Endpoints

### Auth
| Method | Endpoint            | Auth   | Description        |
|--------|---------------------|--------|--------------------|
| POST   | /api/auth/register  | No     | Register new user  |
| POST   | /api/auth/login     | No     | Login              |
| GET    | /api/auth/profile   | User   | Get profile        |
| PUT    | /api/auth/profile   | User   | Update profile     |

### Foods
| Method | Endpoint           | Auth   | Description              |
|--------|--------------------|--------|--------------------------|
| GET    | /api/foods         | No     | List foods (filter/sort)  |
| GET    | /api/foods/:id     | No     | Get single food          |
| POST   | /api/foods         | Admin  | Create food              |
| PUT    | /api/foods/:id     | Admin  | Update food              |
| DELETE | /api/foods/:id     | Admin  | Delete food              |

**Query params**: `category`, `search`, `minPrice`, `maxPrice`, `available`, `sort` (price-asc, price-desc, rating), `page`, `limit`

### Cart
| Method | Endpoint            | Auth | Description         |
|--------|---------------------|------|---------------------|
| GET    | /api/cart           | User | Get cart            |
| POST   | /api/cart           | User | Add item            |
| PUT    | /api/cart/:itemId   | User | Update quantity     |
| DELETE | /api/cart/:itemId   | User | Remove item         |
| DELETE | /api/cart           | User | Clear cart          |

### Orders
| Method | Endpoint                  | Auth  | Description          |
|--------|---------------------------|-------|----------------------|
| POST   | /api/orders               | User  | Place order          |
| GET    | /api/orders/my            | User  | My orders            |
| GET    | /api/orders/:id           | User  | Order details        |
| GET    | /api/orders               | Admin | All orders           |
| PUT    | /api/orders/:id/status    | Admin | Update order status  |

### Payments (Mock)
| Method | Endpoint               | Auth | Description      |
|--------|------------------------|------|------------------|
| POST   | /api/payments/create   | User | Create payment   |
| POST   | /api/payments/verify   | User | Verify payment   |

## Deployment
Ready for Render / Railway / AWS. Set environment variables and run `npm start`.
