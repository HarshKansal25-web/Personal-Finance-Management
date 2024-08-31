// Initialize the chart
let savingsChart;

function initChart() {
    const ctx = document.getElementById('savingsChart').getContext('2d');
    savingsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Savings Goals',
                data: [],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Amount ($)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Deadline'
                    }
                }
            }
        }
    });
}

function updateChart() {
    const savedGoals = JSON.parse(localStorage.getItem('savingsGoals')) || [];
    const sortedGoals = savedGoals.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

    savingsChart.data.labels = sortedGoals.map(goal => goal.deadline);
    savingsChart.data.datasets[0].data = sortedGoals.map(goal => goal.amount);
    savingsChart.update();
}

function loadSavingsGoals() {
    const goalsList = document.getElementById('goalsList');
    goalsList.innerHTML = ''; // Clear existing list
    const savedGoals = JSON.parse(localStorage.getItem('savingsGoals')) || [];

    savedGoals.forEach((goal, index) => {
        const li = document.createElement('li');
        li.textContent = `${goal.name} - $${goal.amount} by ${goal.deadline}`;
        
        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => removeGoal(index);
        li.appendChild(deleteBtn);
        
        goalsList.appendChild(li);
    });

    updateChart();
}

// Remove a savings goal
function removeGoal(index) {
    let savedGoals = JSON.parse(localStorage.getItem('savingsGoals')) || [];
    savedGoals.splice(index, 1);
    localStorage.setItem('savingsGoals', JSON.stringify(savedGoals));
    loadSavingsGoals();
}

// Remove all savings goals
function removeAllGoals() {
    localStorage.removeItem('savingsGoals');
    loadSavingsGoals();
}

// Initialize chart and load goals when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initChart();
    loadSavingsGoals();
});

// Handle form submission
document.getElementById('savingsForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const goalName = document.getElementById('goalName').value;
    const goalAmount = parseFloat(document.getElementById('goalAmount').value);
    const goalDeadline = document.getElementById('goalDeadline').value;

    const newGoal = {
        name: goalName,
        amount: goalAmount,
        deadline: goalDeadline
    };

    let savedGoals = JSON.parse(localStorage.getItem('savingsGoals')) || [];
    savedGoals.push(newGoal);
    localStorage.setItem('savingsGoals', JSON.stringify(savedGoals));

    loadSavingsGoals();
    document.getElementById('savingsForm').reset();
});
