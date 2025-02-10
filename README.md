# StayHub

StayHub is a platform that helps people find and book Paying Guest (PG) accommodations easily. PG owners can list their properties, while users can search for PGs, register, book stays, leave reviews, and contact owners.

## Features

### For Users:
- Search for PG accommodations.
- Register, log in, and manage profiles.
- Book PGs and leave reviews.

### For PG Owners:
- Register and log in.
- List and update PG details.
- View and manage bookings.

## Tech Stack
- **Frontend:** React.js
- **Backend:** Spring Boot (Java) with JWT authentication
- **Database:** MySQL
- **Other Tools:** Docker, Git, Swagger for API documentation

## How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/stayhub.git
   ```

2. Navigate to the project folder:
   ```bash
   cd stayhub
   ```

3. Install frontend dependencies:
   ```bash
   yarn install
   ```

4. Start the frontend:
   ```bash
   yarn start
   ```

5. Run the backend (Spring Boot):
   - Import the project into **STS4** or **IntelliJ IDEA**.
   - Configure **MySQL** and update `application.properties`.
   - Run the Spring Boot application.

6. Open [http://localhost:3000](http://localhost:3000) for the frontend.

## Folder Structure
```
StayHub
├── backend         # Spring Boot backend
│   ├── src/main    # Main source code
│   ├── pom.xml     # Maven dependencies
│   └── ...
├── frontend        # React.js frontend
│   ├── src
│   │   ├── components  # Reusable UI elements
│   │   ├── pages       # Screens like Home, Login, Registration
│   │   ├── App.js      # Main React app file
│   │   ├── index.js    # Entry point
│   ├── public         # Static assets
│   ├── package.json   # Frontend dependencies
└── README.md
```

## Contribution Guide
Want to contribute? Follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Added new feature"
   ```
4. Push your changes:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---
**StayHub Team**  
Happy coding! 🚀

