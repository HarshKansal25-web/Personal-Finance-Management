// Assume we have a global variable 'transactions' that contains all transaction data
// If not, you'll need to fetch this data from your backend or local storage

document.addEventListener('DOMContentLoaded', function() {

    transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    

    updateCharts();
    updateSummary();
});

function updateCharts() {
    updateMonthlyChart();
    updateCategoryChart();
    updateBalanceChart();
}

function updateMonthlyChart() {
    const monthlyData = processMonthlyData();
    const ctx = document.getElementById('monthlyChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: monthlyData.labels,
            datasets: [
                {
                    label: 'Income',
                    data: monthlyData.income,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)'
                },
                {
                    label: 'Expense',
                    data: monthlyData.expense,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)'
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function updateCategoryChart() {
    const categoryData = processCategoryData();
    const ctx = document.getElementById('categoryChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: categoryData.labels,
            datasets: [{
                data: categoryData.amounts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ]
            }]
        }
    });
}

function updateBalanceChart() {
    const balanceData = processBalanceData();
    const ctx = document.getElementById('balanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: balanceData.labels,
            datasets: [{
                label: 'Balance',
                data: balanceData.balances,
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function updateSummary() {
    document.getElementById('totalTransactions').textContent = transactions.length;
    document.getElementById('totalIncome').textContent = '$' + calculateTotalIncome().toFixed(2);
    document.getElementById('totalExpenses').textContent = '$' + calculateTotalExpenses().toFixed(2);
    document.getElementById('netBalance').textContent = '$' + calculateNetBalance().toFixed(2);
}

// Helper functions to process data

function processMonthlyData() {
    const monthlyData = {};

    transactions.forEach(transaction => {
        const date = new Date(transaction.primeId);
        const monthYear = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;

        if (!monthlyData[monthYear]) {
            monthlyData[monthYear] = { income: 0, expense: 0 };
        }

        if (transaction.type === 'income') {
            monthlyData[monthYear].income += transaction.amount;
        } else if (transaction.type === 'expense') {
            monthlyData[monthYear].expense += transaction.amount;
        }
    });

    const labels = Object.keys(monthlyData).sort();
    const income = labels.map(month => monthlyData[month].income);
    const expense = labels.map(month => monthlyData[month].expense);

    return { labels, income, expense };
}
    // Process transactions to get monthly income and expense data
    // Return an object with labels, income, and expense arrays


    function processCategoryData() {
        const categoryData = {};
    
        transactions.forEach(transaction => {
            if (transaction.type === 'expense') {
                const category = transaction.description;
    
                if (!categoryData[category]) {
                    categoryData[category] = 0;
                }
    
                categoryData[category] += transaction.amount;
            }
        });
    
        const sortedCategories = Object.entries(categoryData)
            .sort((a, b) => b[1] - a[1]);
    
        const topCategories = sortedCategories.slice(0, 5);
        const otherSum = sortedCategories.slice(5)
            .reduce((sum, category) => sum + category[1], 0);
    
        const labels = topCategories.map(category => category[0]);
        const amounts = topCategories.map(category => category[1]);
    
        if (otherSum > 0) {
            labels.push('Other');
            amounts.push(otherSum);
        }
    
        return { labels, amounts };
    }

    function processBalanceData() {
        let balance = 0;
        const balanceData = transactions
            .sort((a, b) => new Date(a.primeId) - new Date(b.primeId))
            .map(transaction => {
                balance += transaction.type === 'income' ? transaction.amount : -transaction.amount;
                return {
                    date: new Date(transaction.primeId).toISOString().split('T')[0],
                    balance: balance
                };
            });
    
        const labels = balanceData.map(item => item.date);
        const balances = balanceData.map(item => item.balance);
    
        return { labels, balances };
    }

    function calculateTotalIncome() {
        return transactions.reduce((total, transaction) => 
            transaction.type === 'income' ? total + transaction.amount : total, 0);
    }

    function calculateTotalExpenses() {
        return transactions.reduce((total, transaction) => 
            transaction.type === 'expense' ? total + transaction.amount : total, 0);
    }
    

    function calculateNetBalance() {
        return calculateTotalIncome() - calculateTotalExpenses();
    }
