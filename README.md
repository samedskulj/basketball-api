# Basketball-API

Welcome to the `basketball-api` project! This API is designed to provide comprehensive data and functionalities related to basketball games, players, teams, and statistics. Built with Nest.js, Prisma, TypeScript, and SQLite, this project offers a robust, scalable, and type-safe backend solution.

## Features

- **Team Management:** Create, update, and delete basketball teams.

## Future features

- **Player Profiles:** Manage player information including stats, team affiliations, and personal details.
- **Game Records:** Record and retrieve details of basketball games, including scores, locations, and dates.
- **Statistical Analysis:** Access detailed statistics for players and teams.
- **User Authentication:** Secure user authentication for managing data.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- TypeScript
- SQLite

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/basketball-api.git
   cd basketball-api
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Set up the database:**

   The project uses SQLite, which requires no additional setup for a basic configuration.

4. **Run the application:**

   ```bash
   pnpm run start:dev
   ```

   This will start the server on `http://localhost:3000`.

## Usage

The API provides several endpoints for managing basketball data:

- `/basketball-teams`: Manage basketball teams.

## Future usage
- `/players`: Handle player information.
- `/games`: Record and retrieve game details.
- `/stats`: Access statistical data.

For detailed API documentation, visit `http://localhost:3000/api`.


## Built With

- [Nest.js](https://nestjs.com/) - A progressive Node.js framework for building efficient and scalable server-side applications.
- [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js and TypeScript.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
- [SQLite](https://www.sqlite.org/index.html) - A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.


## Authors

- **Samed Skulj** - *Initial work* - [YourUsername](https://github.com/samedskulj)

See also the list of [contributors](https://github.com/your-username/basketball-api/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
