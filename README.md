# Hannahh-Events API

This is the backend API for the Hannahh-Events application. It's built with Ruby on Rails to practice spinning up a server and app.

## Requirements

- Ruby version: `ruby '2.7.2'`
- Rails version: `gem 'rails', '~> 6.0.3', '>= 6.0.3.4'`
- Bundler: `2.2.17`

## Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `bundle install` to install the required Ruby gems.
4. Set up the database by running `rails db:migrate`.
5. Start the server by running `rails server`.

## API Endpoints

The API has the following endpoints:

- `GET /api/v1/events`: Fetches all events.
- `POST /api/v1/events`: Creates a new event.
- `GET /api/v1/events/:id`: Fetches a specific event.
- `PUT /api/v1/events/:id`: Updates a specific event.
- `DELETE /api/v1/events/:id`: Deletes a specific event.

## CORS

The API is configured to allow requests from `http://localhost:3001`.

## Ignored Files

The following files and directories are ignored by Git:

- Bundler config files
- Default SQLite database files
- Logfiles and tempfiles
- PID files
- Uploaded files in development
- Master key for decrypting credentials and more

For more details, see the `.gitignore` file.

## License

[MIT](https://choosealicense.com/licenses/mit/)