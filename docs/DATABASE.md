# Database Design
Smart Billing System

---

# 1. users

Stores system users.

| Field | Type |
|---|---|
| id | INTEGER |
| name | TEXT |
| username | TEXT |
| password | TEXT |
| role | TEXT |

---

# 2. products

Stores all products.

| Field | Type |
|---|---|
| id | INTEGER |
| name | TEXT |
| barcode | TEXT |
| category | TEXT |
| price | REAL |
| stock | INTEGER |
| created_at | TEXT |

---

# 3. invoices

Stores invoice records.

| Field | Type |
|---|---|
| id | INTEGER |
| invoice_number | TEXT |
| total | REAL |
| payment_method | TEXT |
| created_at | TEXT |

---

# 4. invoice_items

Stores invoice products.

| Field | Type |
|---|---|
| id | INTEGER |
| invoice_id | INTEGER |
| product_id | INTEGER |
| quantity | INTEGER |
| price | REAL |
| subtotal | REAL |

---

# 5. settings

Stores application settings.

| Field | Type |
|---|---|
| id | INTEGER |
| enable_tax | BOOLEAN |
| enable_inventory | BOOLEAN |
| enable_barcode | BOOLEAN |

---

# Relationships

- invoices.id → invoice_items.invoice_id
- products.id → invoice_items.product_id