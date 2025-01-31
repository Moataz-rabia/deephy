# DeephySolver

DeephySolver is a Vue.js application designed to assist engineers with various calculations, including unit conversions, weight calculations, and more.

## Project Setup

To set up the project locally, follow these steps:

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download and install them from [Node.js official website](https://nodejs.org/).

### Installation

1. Install Vue CLI globally:
    ```bash
    npm install -g @vue/cli
    ```

2. Clone the repository:
    ```bash
    git clone <repository-url>
    ```

3. Navigate to the project directory:
    ```bash
    cd deephy
    ```

4. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

To run the application locally, use the following command:
```bash
npm run serve
```
### building the application 

To build the application for production, use the following command:
```bash
npm run build
```
### usage
Once the application is running, you can access it in your web browser at  http://localhost:8080.  The application includes the following features:

Unit Converter

Engineering Calculations

Formula Library

Contact Form

formula libreray

### Project Structure

The project structure is as follows:
```
.gitignore
babel.config.js
converter.js
eslint.config.mjs
jsconfig.json
package.json
public/
    index.html
README.md
src/
    App.vue
    assets/
    components/
        AboutPage.vue
        CalculPage.vue
        ContactPage.vue
        HomePage.vue
        NextPage.vue
        SideBar.vue
        ToolsPage.vue
        libraryPage.vue
        footerPage.vue
    main.js
    router/
        index.js
    store/
        store.js
test.html
vue.config.js
```
## you can add more units  to your converter 
 just open toolsPage.vue component and add the unit optin  in 'fromunit' and 'tounit' 