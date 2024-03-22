# File Processing System

This is a file processing system consisting of a Node.js Express API and a React UI. The system allows users to process files and display the data in a tabular format.

## Description

The API is responsible for processing files and providing the necessary data to the UI. It exposes endpoints to upload files, process them, and retrieve the processed data.

## Technologies Used

- Node.js
- Express
- Swagger (for API documentation)
- Docker (for containerization)

## Project Structure

```
project/
  |- api/
  |   |- controllers/
  |   |- middlewares/
  |   |- routes/
  |   |- services/
  |   |- tests/
  |   |- utls/
  |   |- app.js
  |   |- definition.json
  |   |- Dockerfile
  |   |- package.json
  |   |- README.md
  |- ui/
  |   |- public/
  |   |- src/
  |   |- Dockerfile
  |   |- package.json
  |   |- README.md
  |- docker-compose.yml
  |- README.md

```

## Usage

1. Clone the repository.
2. Run `docker-compose up` to build and start the services.
3. Access SwaggerDocumentation got to [http://localhost:3000/docs](http://localhost:3000/docs)
4. Got to UI with the following URL [http://localhost:3001](http://localhost:3001)


## License

This project is free to usage