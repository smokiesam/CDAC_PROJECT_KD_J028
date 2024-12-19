# CDAC_PROJECT_KD_J028
Cdac Final Project : Stay Hub

# StayHub

StayHub is a user-friendly platform designed to help individuals find and book nearby Paying Guest (PG) accommodations. PG owners can list their properties, while users can search for PGs, register, book, give reviews, provide feedback, and contact owners. This project aims to streamline the accommodation discovery and booking process.

## Project Overview

### Key Features:
- **User Functionalities:**
  - Search for PG accommodations.
  - Register, login, and manage their profiles.
  - Book PGs, give reviews, and provide feedback.

- **Owner Functionalities:**
  - Register and log in to the platform.
  - Post PG details and update amenities.
  - View feedback and manage bookings.

### Tech Stack:
- **Frontend:** React.js (current phase: UI implementation)
- **Backend:** Node.js/Express.js (future development)
- **Database:** MySQL (normalized to the first normal form)
- **Other Tools:** Docker, Git, and other DevOps tools

## Current Status
We are currently in the **UI Implementation Phase**, starting with the frontend development using React.

## Folder Structure
The project follows a modular and organized folder structure for scalability and maintainability:

```
StayHub
├── public
├── src
│   ├── components   # Reusable components (e.g., buttons, headers, footers)
│   ├── screens      # All page components (e.g., LandingPage, LoginPage)
│   ├── App.js       # Main React app component
│   ├── index.js     # Entry point for React app
│   └── assets       # Static files (e.g., images, icons, styles)
├── package.json
└── README.md
```

## How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/stayhub.git
   ```

2. Navigate to the project folder:
   ```bash
   cd stayhub
   ```

3. Install dependencies:
   ```bash
   yarn install
   ```

4. Start the development server:
   ```bash
   yarn start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages Under Development
- **Landing Page:** Showcases StayHub's mission with a prominent login button.
- **Login Page:** Allows users to log in to their accounts.
- **Registration Page:** Enables new users to register.

## Contribution
Feel free to raise issues or suggest enhancements through pull requests. Follow these steps:
1. Fork the repository.
2. Create a new branch for your feature/bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Added feature XYZ"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

**StayHub Team**

Happy coding! 🚀

