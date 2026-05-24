const Database = require("better-sqlite3");

const db = new Database("billing.db");

db.prepare(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    username TEXT,
    password TEXT,
    role TEXT
)
`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    barcode TEXT,
    category TEXT,
    price REAL,
    stock INTEGER,
    created_at TEXT
)
`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS invoices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    invoice_number TEXT,
    total REAL,
    payment_method TEXT,
    created_at TEXT
)
`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS invoice_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    invoice_id INTEGER,
    product_id INTEGER,
    quantity INTEGER,
    price REAL,
    subtotal REAL
)
`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS settings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    enable_tax INTEGER,
    enable_inventory INTEGER,
    enable_barcode INTEGER
)
`).run();

console.log("Database initialized");

module.exports = db;