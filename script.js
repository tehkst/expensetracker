document.getElementById('expenseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;

    // Add expense to the list
    const expenseList = document.getElementById('expenseList');
    const expenseItem = document.createElement('div');
    expenseItem.textContent = `Amount: ${amount}, Category: ${category}, Date: ${date}`;
    expenseList.appendChild(expenseItem);
});
