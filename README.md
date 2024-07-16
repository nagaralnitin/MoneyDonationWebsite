# MoneyDonationWebsite
## Zero Hunger 

## Project Overview

Zero Hunger Connect is a web platform addressing the United Nations Sustainable Development Goal 2: Zero Hunger. This project facilitates donations to NGOs working to combat hunger, allowing users to make targeted contributions based on location.

## Features

- Donation page
- NGO selection based on location
- Stores all data in database entered by user

## Tech Stack

### Frontend
- React.js
- React Router for navigation

### Backend
- Java (developed using IntelliJ IDEA)
- Spring Boot framework
- H2 Database for data storage

## Installation

### Prerequisites
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- Java Development Kit (JDK) 11 or later
- Maven

### Frontend Setup
1. Clone the repository
2. Navigate to the frontend directory
3. Install dependencies
4. Start the development server

### Backend Setup
1. Navigate to the backend directory
2. Build the project using Maven
3. Run the application

## Usage

1. Open your web browser and go to `http://localhost:8080`
2. Browse NGOs by location
3. Select an NGO and proceed to the donation page
4. Complete the donation process


## Database

The project uses H2 Database, an in-memory database. The database is automatically configured by Spring Boot. You can access the H2 console at `http://localhost:8080/h2-console` when the application is running.

## Configuration

1. Frontend configuration can be found in `frontend`
2. Backend configuration is in `src/main/resources/application.properties`

## Contributing

We welcome contributions to the Zero Hunger Connect project. Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to make contributions.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- United Nations Sustainable Development Goals

