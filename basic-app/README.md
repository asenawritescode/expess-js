# Express API with New Features

This is an updated version of the Express API tutorial that includes new features. The code for this tutorial is hosted on GitHub, and assumes that you have already cloned the project.

## Installation

1. Make sure you have [Node.js](https://nodejs.org) installed on your system.

2. Open a terminal or command prompt and navigate to the project directory.

3. Run the following command to install the project dependencies:

```
npm install
```

     This will install all the necessary packages specified in the `package.json` file, including Express.js, CORS, Helmet, and XSS Clean.

## Usage

1. In the terminal or command prompt, navigate to your project directory.

2. Run the following command to start the API:

```
node index.js
```

       This will start the Express application and it will be accessible at `http://localhost:3000`.

3. Open your web browser and visit `http://localhost:3000/healthcheck` to see the "Server is up and running" message, indicating that the API is functioning properly.

4. Explore the new features added to the code:

   - **CORS**: Cross-Origin Resource Sharing (CORS) is enabled using the `cors` package. This allows the API to handle requests from different origins.
   - **Helmet**: Helmet is used to secure the API by setting various HTTP headers.
   - **XSS Clean**: The `xss-clean` package is used to sanitize user input and prevent cross-site scripting (XSS) attacks.
   - **Simulated JSON-based Database**: The API now includes a simulated JSON-based database stored in the `database` object. It stores user data using randomly generated IDs.
   - **New Routes**: Additional routes have been added to support CRUD operations (Create, Read, Update, Delete) on the user data in the database. The supported request types are:
     - **GET** `/healthcheck`: Returns a message indicating that the server is up and running.
     - **GET** `/users`: Retrieves all users from the database.
     - **GET** `/users/:id`: Retrieves a specific user by ID from the database.
     - **POST** `/`: Creates a new user and adds it to the database.
     - **PUT** `/`: Creates a new user and replaces the entire database with only that user.
     - **DELETE** `/users/:id`: Deletes a specific user by ID from the database.
     - **DELETE** `/`: Clears the entire database.
     - **PATCH** `/`: Updates an existing user in the database.

5. Feel free to explore the code and make modifications as needed. You can find the complete code for this tutorial in the `index.js` file.

For more advanced features and functionalities, refer to the official [Express.js documentation](https://expressjs.com/).

Enjoy building your API!