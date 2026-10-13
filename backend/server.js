const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// MySQL Connection Pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root', // Replace with your MySQL user
    password: 'password', // Replace with your MySQL password
    database: 'quotemaster'
});

// GET a random quote
app.get('/quotes/random', (req, res) => {
    pool.query('SELECT * FROM quotes ORDER BY RAND() LIMIT 1', (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.json(results[0] || {});
    });
});

// POST a new quote
app.post('/quotes', (req, res) => {
    const { quote_text, author } = req.body;
    if (!quote_text) return res.status(400).json({ error: 'Quote text is required.' });
    const newQuote = { quote_text, author: author || 'Anonymous' };
    pool.query('INSERT INTO quotes SET ?', newQuote, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(201).json({ id: results.insertId, ...newQuote });
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});