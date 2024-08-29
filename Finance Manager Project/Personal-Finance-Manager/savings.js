// savings.js

// Savings Chart
const savingsCtx = document.getElementById('savingsChart').getContext('2d');
const savingsChart = new Chart(savingsCtx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Savings Over Time',
            data: [200, 400, 600, 800, 1000, 1200],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
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
}

// Remove a savings goal
function removeGoal(index) {
    let savedGoals = JSON.parse(localStorage.getItem('savingsGoals')) || [];
    savedGoals.splice(index, 1);
    localStorage.setItem('savingsGoals', JSON.stringify(savedGoals));
    loadSavingsGoals(); // Reload the goals list
}

// Remove all savings goals
function removeAllGoals() {
    localStorage.removeItem('savingsGoals');
    loadSavingsGoals(); // Reload the goals list
}

// Load goals when the page loads
document.addEventListener('DOMContentLoaded', loadSavingsGoals);

// Handle form submission
document.getElementById('savingsForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const goalName = document.getElementById('goalName').value;
    const goalAmount = document.getElementById('goalAmount').value;
    const goalDeadline = document.getElementById('goalDeadline').value;

    const newGoal = {
        name: goalName,
        amount: goalAmount,
        deadline: goalDeadline
    };

    let savedGoals = JSON.parse(localStorage.getItem('savingsGoals')) || [];
    savedGoals.push(newGoal);
    localStorage.setItem('savingsGoals', JSON.stringify(savedGoals));

    const li = document.createElement('li');
    li.textContent = `${goalName} - $${goalAmount} by ${goalDeadline}`;
    document.getElementById('goalsList').appendChild(li);

    document.getElementById('savingsForm').reset();
});
