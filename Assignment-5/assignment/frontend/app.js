const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const URL = process.env.BACKEND_URL || 'http://localhost:9000';

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/submit', async function(req, res) {
    const formData = req.body;

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    };

    try {
        const response = await fetch(`${URL}/submit`, options);
        const text = await response.text();
        res.send(text);
    } catch (err) {
        console.error('Error forwarding to backend:', err);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});

app.listen(3000, function() {
  console.log('Ares listening on port 3000');
});