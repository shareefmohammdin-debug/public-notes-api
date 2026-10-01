# Public Notes — Backend

This is the backend API for **Public Notes**, a public note-sharing web application.

The backend provides a REST API that allows the frontend to create, retrieve, and delete public notes stored in a MySQL database.

## Features

- Get all notes
- Get a note by ID
- Create a new note
- Delete a note
- MySQL database integration
- REST API
- Environment variable configuration
- CORS support

## Technologies

- Node.js
- Express.js
- MySQL
- mysql2
- REST API
- dotenv
- CORS

## API Endpoints

### Get all notes

```http
GET /notes