# Personal Finance Manager

The Personal Finance Manager is a system designed to assist users in tracking their income, expenses, and savings goals. This system enables users to add, view, update, and delete financial transactions, categorize them, and generate insightful reports to analyze their spending habits.

## Features

- **Track Transactions**: Add, view, update, and delete financial transactions.
- **Manage Categories**: Create and manage custom categories for your transactions.
- **Set Savings Goals**: Define savings goals and track progress towards achieving them.
- **Generate Reports**: View monthly and yearly reports with visualizations to analyze spending patterns.

## Project Structure Overview

- HTML Files:

index.html: The main dashboard, likely displays an overview of the user's financial status, including summaries of income, expenses, and balance.
login.html: Handles user login, allowing access to the main features after authentication.
sign-up.html: Used for new users to create an account.
reports.html: Displays various financial reports through charts and graphs, helping users analyze their spending and income patterns.
savings.html: Manages savings goals, showing progress and allowing users to set or remove goals.
support.html: Provides support or FAQs for users needing assistance with the application.

- JavaScript Files:

script.js: Likely handles core functionalities and interactions across the application, possibly linked to index.html.
reports.js: Specifically manages the functionality of the reports page, including chart updates and data processing.
savings.js: Manages the logic related to savings goals, such as adding or removing goals.

- CSS Files:

style.css: The main stylesheet for consistent styling across pages.
login.css, sign-up.css, reports.css, savings.css, support.css: Page-specific stylesheets for tailored designs on each corresponding HTML page.

- Database:

Schema: Defines the structure of the database tables, such as:
transactions: Stores transaction details (e.g., date, amount, type, description).
savings_goals: Manages savings goals with details like target amount and progress.

Queries: Used to interact with the database, such as:
Inserts: Adding new transactions or savings goals.
Updates: Modifying existing records, such as updating transaction details or savings progress.
Selects: Fetching data for display in reports or summaries.
Deletes: Removing outdated transactions or savings goals.

Other Files:

README.md: Likely contains project documentation, explaining what the project does, how to set it up, and how to use it.
Jenkinsfile: Used for CI/CD (Continuous Integration/Continuous Deployment), automating tasks like testing and deployment.
This structure organizes the project so that each feature or page of the application has its dedicated files, making the development and maintenance process more manageable.


## Getting Started

### Accessing the Application

1. **Visit the Application**

   Open your web browser and navigate to the [Personal-Finance-Manager](https://personal-finance-management-aemw.vercel.app/).

2. **Sign Up / Log In**

   - **Sign Up**: Click on the **Sign Up** button to create a new account. You’ll need to provide your full name, email address, mobile number, and set a password.
   - **Log In**: If you already have an account, click on the **Log In** button and enter your username and password.


### Using the Application

1. **Adding Transactions**

   - Go to the **Transactions** section.
   - Click on the **Add Transaction** button.
   - Enter details such as the amount, date, category, and a description of the transaction.
   - Click **Save** to add the transaction to your records.
   - Export them to PDF or CSV file for record purposes.

2. **Viewing and Managing Transactions**

   - Navigate to the **Transactions** page.
   - View a list of all your transactions.
   - You can update or delete any transaction by selecting the appropriate option next to it.
   - Navigate to reports page by opening it in another tab to view transactions and reports simultaneously.

3. **Managing Categories**

   - Go to the **Categories** section.
   - Add new categories or manage existing ones to better organize your transactions.

4. **Setting and Tracking Savings Goals**

   - Access the **Savings Goals** section.
   - Click on **Add Goal** to set a new savings goal.
   - Enter the target amount and target date.
   - Monitor your progress towards the goal in this section.

5. **Generating Reports**

   - Go to the **Reports** section.
   - Generate monthly or yearly reports.
   - Review the visualizations (e.g., pie charts, bar graphs) to analyze your income and spending patterns.


## Technologies Used

- HTML
- CSS
- JavaScript
- SQLite

## Editor 

- Visual Studio Code

## Contributing

We welcome all contributions! If you have ideas, find bugs, or have feature requests, please feel free to open an issue or submit a pull request.


## Acknowledgements

- [Icons](https://Vecteezy.com/) - Icons used in the application
- [Images](https://Shutterrstock.com/) - Images used in the application

## Contact

For any inquiries or questions, please contact harshkansalchd@gmail.com

### Additional Information

- **Privacy Policy**: Review our [Privacy Policy](#) for details on how we protect your data.
- **Terms of Service**: Familiarize yourself with our [Terms of Service](#).

Thank you for using Personal Finance Manager. We hope it helps you take control of your finances!

Enjoy managing your finances with Personal Finance Manager!
