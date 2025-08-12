Digital E Gram Panchayat
A web-based portal to digitize Gram Panchayat services, enabling citizens to apply for services online, track their application status, and allowing staff/officers to manage service requests efficiently.
Live Demo
Firebase Hosted Link: https://digital-e-gram-panchayat-4533d.web.app/
User Roles
1️⃣ User
•	Register/Login
•	View available services
•	Apply for services (only once per service)
•	Track application status
2️⃣ Staff
•	View all applications
•	Track service status

3️⃣ Officer
•	Add/Edit/Delete services
•	View all service applications
•	Approve/Reject user requests
 Features
•	Firebase Authentication (Role-based)
•	Cloud Firestore for service and application data
•	Restriction: One application per service per user
•	Application status tracking (Pending → Approved/Rejected)
•	Responsive UI
•	Firebase Hosting for deployment
Tech Stack
•	Frontend: HTML, CSS, JavaScript
•	Backend/Hosting: Firebase
•	Database: Firebase Firestore
•	Authentication: Firebase Auth
•	Version Control: Git & GitHub
Folder Structure
📂 digital-e-gram-panchayat/
│
├── index.html
├── login.html
├── register.html
├── css/
│ └── styles.css
├── js/
│ └── auth.js
├── user/
│ ├── dashboard.html
│ ├── user_applications.html
├── officer/
│ └── officer.html
├── staff/
 └── staff.html Folder Structure

