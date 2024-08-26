const express = require('express');
const path = require('path');
const { checkSEO } = require('./utils/seoChecks');
const app = express();
const port = 5000;

app.use(express.json());

app.post('/api/audit', async (req, res) => {
    const { url } = req.body;
    try {
        const results = await checkSEO(url);
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});