# SEO Audit Tool

This project is an SEO Audit Tool that analyzes the SEO meta tags, schema.org data, OpenGraph data, and readability scores of a given URL. The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- **SEO Meta Tags Analysis**: Checks for the presence and content of various SEO meta tags.
- **Schema.org Data Analysis**: Extracts and displays schema.org structured data.
- **OpenGraph Data Analysis**: Extracts and displays OpenGraph data for social media sharing.
- **Readability Analysis**: Calculates readability scores using Flesch-Kincaid Grade Level, Flesch-Kincaid Reading Ease, and Gunning Fog Index.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## How to Access the App

### Prerequisites

- Node.js (version 16 recommended)
- npm (Node Package Manager)

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repo/seo-audit-app.git
   cd seo-audit-app
   ```

2. **Install dependencies for the frontend:**

   ```bash
   cd frontend
   npm install
   ```

3. **Install dependencies for the backend:**

   ```bash
   cd ../backend
   npm install
   ```

### Running the Application

1. **Start the backend server:**

   ```bash
   cd backend
   node server.js
   ```

   The backend server will run on [http://localhost:5000](http://localhost:5000).

2. **Start the React development server:**

   Open a new terminal window and navigate to the `frontend` directory:

   ```bash
   cd frontend
   npm start
   ```

   The React development server will run on [http://localhost:3000](http://localhost:3000).

### Accessing the Application

Open your browser and navigate to [http://localhost:3000](http://localhost:3000). You can enter a URL to audit and view the results, including SEO meta tags, schema.org data, OpenGraph data, and readability scores.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)