# Note Taker - Express.js Application

## Overview

Note Taker is an application designed to help small business owners write and save notes, facilitating organization and tracking of tasks. This application leverages Express.js for the back end, interacting with a JSON file for persistent storage of notes.

## User Story


## Features

- **Landing Page**: A welcoming page with a link to the notes page.
- **Notes Page**: Displays existing notes on the left and provides an interface to create new notes on the right.
- **Save & New Note Functionality**: Options to save new notes and create additional notes seamlessly.
- **Persistent Storage**: Uses a `db.json` file for storing and retrieving notes.
- **Unique Note Identification**: Each note is assigned a unique identifier for efficient management.

## Technical Details

### Front End

- The front end is pre-built, featuring a user-friendly interface for note management.

### Back End

- **Express.js**: Powers the application's server-side functionality.
- **JSON File**: `db.json` acts as the database for storing notes.
- **Routes**:
  - `GET /notes`: Serves the `notes.html` file.
  - `GET *`: Defaults to serving the `index.html` file.
  - `GET /api/notes`: Retrieves all notes as JSON from `db.json`.
  - `POST /api/notes`: Accepts a new note and appends it to `db.json`.

### Deployment

- The application is set up for deployment on Heroku.

## Installation & Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the server using `npm start`.
4. Access the application through `localhost:3000` in your browser.

## Mock-Up

The following GIF demonstrates the application's functionality:

![Note Taker Demo](../notetaker/public/assets/image/screen.png)

## Bonus Features

- **DELETE Functionality**: For an added challenge, implement `DELETE /api/notes/:id` to allow users to delete notes.

## Grading Criteria

- **Technical Acceptance**: Meets all acceptance criteria with a functional front-to-back end connection.
- **Deployment**: Live URL with a functioning application and GitHub code repository.
- **Application Quality**: Error-free console operation.
- **Repository Quality**: Organized with a unique name, descriptive commits, and a comprehensive README.

## Project Links

- Deployed Application: [Placeholder for deployed application URL]
- GitHub Repository: [Placeholder for GitHub repository URL]

## Screenshot

![Application Screenshot](./Placeholder_for_screenshot.png)

- - -
© 2023 [Your Name or Organization]. All Rights Reserved.
