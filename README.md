# Marketplace App

## Description
This project is part of the JavaScript React course on Udemy. The Marketplace App is a platform that allows users to list their houses for sale or rent, as well as search for houses that are listed. It leverages the power of React to create a dynamic and interactive user interface.

## Features
- User Registration and Authentication: Firebase will be used to handle user authentication, ensuring secure access to the app's features.
- House Listing: Users can create listings for their houses, providing relevant details such as location, price, description, and images.
- House Search: The app offers a search functionality for users to find houses based on various criteria such as location, price range, and type (for sale or rent).
- Interactive Map: Leaflet, a popular mapping library, will be integrated to allow users to pin the location of their houses on a map.

## Technologies Used
- JavaScript
- React
- Firebase (Authentication, Database, File Storage)
- Leaflet (Mapping Library)

## Installation
'git clone https://github.com/your-username/marketplace-app.git'
'cd marketplace-app'
'npm install'

## Configuration
To run the app, you'll need to set up a Firebase project and configure the necessary credentials:
1. Create a Firebase project at firebase.google.com and enable Authentication, Database, and File Storage services.
2. Obtain the Firebase configuration values (API key, project ID, etc.).
3. Create a .env file in the root directory of the project.
4. Add the following environment variables in the .env file:

REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_PROJECT_ID=your-project-id

## Usage
1. Start the development server: `npm start`
2. Open your browser and visit http://localhost:3000 to access the app.

## Contributing
Contributions to the project are welcome! If you have any suggestions, bug reports, or feature requests, please create an issue or submit a pull request.

## License
This project is licensed under the MIT License.

## Acknowledgements
- The JavaScript React front to back course on Udemy for providing guidance and inspiration. https://www.udemy.com/course/react-front-to-back-2022/
- The creators and maintainers of React, Firebase, and Leaflet for their excellent libraries.


