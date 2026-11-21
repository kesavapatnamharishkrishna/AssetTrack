# AssetTrack Frontend

A React-based Asset Management System that connects to a Spring Boot backend.

---

## Prerequisites

### 1. Install Node.js

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** version (recommended for most users)
3. Run the installer and follow the setup wizard
4. Verify installation by opening a terminal and running:

   ```bash
   node -v
   npm -v
   ```

   Both commands should print a version number.

---

## Project Setup

### 2. Install Dependencies

Navigate to the project folder and install the required packages:

```bash
cd assettrack_frontend
npm install
```

> On Windows PowerShell, if you get an execution policy error, use `npm.cmd install` instead.

### 3. Start the Backend

Before running the React app, make sure the **Spring Boot backend** is running on port `8080`.  
Start it from your IDE or with:

```bash
mvn spring-boot:run
```

### 4. Run the React App

```bash
npm start
```

> On Windows PowerShell: `npm.cmd start`

The app will open automatically at [http://localhost:3000](http://localhost:3000).

---

## API Endpoints Used

| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| POST   | `/asset/add`   | Add a new asset item |
| GET    | `/asset/all`   | Fetch all asset items|

---

## Project Structure

```
src/
├── components/
│   ├── AddAssetForm.js   # Form to add a new asset
│   └── AssetList.js      # Table listing all assets
├── services/
│   └── assetService.js   # API calls to Spring Boot backend
├── App.js                # Root component
└── App.css               # Global styles
```

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
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

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
