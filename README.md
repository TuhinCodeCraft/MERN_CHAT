# MERN Stack Chat Application

This is a fully-featured chat application built using the MERN (MongoDB, Express, React, Node.js) stack. The application allows users to sign up, log in, send and receive messages, and much more.


## Features

1. **User Authentication**
   - **Signup**: Users can create an account using their email and password.
   - **Login**: Registered users can log in to the application.

2. **Messaging**
   - **Send Messages**: Users can send messages to other users.
   - **Read Messages**: Users can view messages sent to them by others.

3. **Avatar Generation**
   - Automatically generate a unique avatar for each user after they log in.
   - An emoji is added beside the user's name to enhance the user experience.

4. **iOS Notification Sound**
   - Plays the iOS notification sound whenever a new message is received by a user.

5. **Conversation Search**
   - Users can search through their conversations to quickly find specific messages or chats.

6. **Logout**
   - Users can log out of their account securely.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **API Requests**: Axios
- **Avatar Generation**: Custom algorithm or third-party service
- **Notifications**: Integration of iOS sound files

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance running

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/TuhinCodeCraft/MERN_CHAT.git
    cd MERN_CHAT
    ```

2. Install dependencies:

    ```bash
    npm install
    cd frontend
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:

    ```plaintext
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    PORT = your_port_number
    NODE_ENV = development
    ```

4. Run the application:

    ```bash
    npm start
    ```

   This will start both the backend and frontend servers.

### Usage

- Visit `http://localhost:5000` in your browser to view the application.
- Sign up for a new account or log in with an existing one.
- Start sending and receiving messages!

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgments

- This project was developed by [Tuhin Ghosh].
- Inspired by various open-source chat applications.
- Special thanks to the developers of the libraries and frameworks used in this project.
