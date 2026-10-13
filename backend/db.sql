USE quotemaster;

CREATE TABLE IF NOT EXISTS quotes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quote_text TEXT NOT NULL,
    author VARCHAR(255) DEFAULT 'Anonymous',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO quotes (quote_text, author) VALUES
('The only way to do great work is to love what you do.', 'Steve Jobs'),
('Innovation distinguishes between a leader and a follower.', 'Steve Jobs'),
('Strive not to be a success, but rather to be of value.', 'Albert Einstein'),
('The mind is everything. What you think you become.', 'Buddha');