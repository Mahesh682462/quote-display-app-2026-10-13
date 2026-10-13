import React, { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:3001';

function App() {
    const [quote, setQuote] = useState({ quote_text: 'Loading...', author: '' });
    const [newQuoteText, setNewQuoteText] = useState('');
    const [newQuoteAuthor, setNewQuoteAuthor] = useState('');

    const fetchRandomQuote = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/quotes/random`);
            const data = await res.json();
            setQuote(data.quote_text ? data : { quote_text: 'No quotes available. Add one!', author: '' });
        } catch (error) {
            console.error('Fetch error:', error);
            setQuote({ quote_text: 'Failed to load.', author: 'Error' });
        }
    };

    const handleSubmitQuote = async (e) => {
        e.preventDefault();
        if (!newQuoteText.trim()) return;
        try {
            await fetch(`${API_BASE_URL}/quotes`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ quote_text: newQuoteText, author: newQuoteAuthor }),
            });
            setNewQuoteText(''); setNewQuoteAuthor('');
            fetchRandomQuote();
        } catch (error) {
            console.error('Submit error:', error);
        }
    };

    useEffect(() => { fetchRandomQuote(); }, []);

    return (
        <div>
            <h1>Quote of the Day</h1>
            <div>
                <p>"{quote.quote_text}"</p>
                <p>- {quote.author}</p>
            </div>
            <button onClick={fetchRandomQuote}>New Quote</button>

            <h2>Submit a New Quote</h2>
            <form onSubmit={handleSubmitQuote}>
                <input type="text" placeholder="Quote text" value={newQuoteText} onChange={e => setNewQuoteText(e.target.value)} />
                <input type="text" placeholder="Author (optional)" value={newQuoteAuthor} onChange={e => setNewQuoteAuthor(e.target.value)} />
                <button type="submit">Add Quote</button>
            </form>
        </div>
    );
}

export default App;