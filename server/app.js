const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const expenses = []; // Temporary storage for simplicity

app.use(bodyParser.json());

app.post('/add-expense', (req, res) => {
    const { amount, category, date } = req.body;
    expenses.push({ amount, category, date });
    res.json({ message: 'Expense added!' });
});

app.get('/generate-report', (req, res) => {
    // Basic report generation logic
    const report = expenses.reduce((acc, exp) => {
        acc.total += parseFloat(exp.amount);
        return acc;
    }, { total: 0 });

    res.json({ report });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
