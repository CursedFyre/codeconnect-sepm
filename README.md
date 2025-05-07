# CodeConnect

CodeConnect is a full-stack social networking platform designed specifically for developers to connect, collaborate, and showcase their projects. The platform provides a space for developers to find potential collaborators based on skills, preferences, and domains of expertise.

## Features

### User Authentication
- Secure login and registration system
- Password hashing and authentication
- JWT-based session management
- Profile creation upon signup

### Profile Management
- Detailed user profile with personal and professional information
- Skills and expertise showcase
- Collaboration preferences
- Project history and involvement
- External links to GitHub, LeetCode, LinkedIn, etc.

### Social Networking
- Homepage feed with posts from other developers
- Like, comment, and share functionality
- Create and publish posts
- Interactive user interface similar to modern social platforms

### Project Collaboration
- List ongoing and finished projects
- Project details including tech stack, domains, and collaborators
- Ability to showcase project screenshots
- Project cards with detailed information

### Developer Discovery
- Advanced search and filter options
- Find developers based on:
  - Collaboration preferences (Remote, In-office, Hybrid, etc.)
  - Primary roles (Frontend, Backend, Full Stack, etc.)
  - Domain expertise (E-commerce, Healthcare, Finance, etc.)
  - Technical skills (JavaScript, Python, Java, etc.)
  - Availability status

### Messaging System
- Real-time messaging between users
- Unread and read message categorization
- User-friendly message interface

## Technologies Used

### Frontend
- HTML
- CSS
- JavaScript
- Font Awesome for icons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose ODM
- RESTful API architecture

## Project Structure

```
CodeConnect/
├── app.js                 # Express application entry point
├── config/
│   └── db.js              # Database connection configuration
├── controllers/
│   ├── exploreController.js
│   └── homepageController.js
├── css/
│   ├── editp.css
│   ├── explore.css
│   ├── homepage.css
│   ├── login.css
│   ├── messages.css
│   ├── prof.css
│   ├── projectcard.css
│   ├── signup.css
│   └── skeleton.css
├── everything.js          # Frontend JavaScript
├── html/
│   ├── editp.html         # Profile editing page
│   ├── explorepage.html   # Developer discovery page
│   ├── homepage.html      # Main feed page
│   ├── login.html         # User authentication
│   ├── messages.html      # Messaging interface
│   ├── prof.html          # Profile view
│   ├── projectcard.html   # Project details component
│   ├── signup.html        # Registration page
│   └── skeleton.html      # Basic page template
├── models/
│   ├── Comment.js         # Comment schema
│   ├── Post.js            # Post schema
│   ├── Project.js         # Project schema
│   └── User.js            # User schema
├── routes/
│   ├── exploreRoutes.js   # Routes for exploration features
│   └── homepageRoutes.js  # Routes for homepage features
└── services/
    ├── exploreService.js  # Business logic for exploration
    └── homepageService.js # Business logic for homepage
```

## Pages and Components

- **Login & Signup**: User authentication pages
- **Homepage**: Main feed with posts and social interaction
- **Profile**: User profile showing personal and professional details
- **Edit Profile**: Page to modify user information and projects
- **Explore**: Discovery page to find other developers using filters
- **Messages**: Real-time messaging interface

## Database Models

### User
- Username, email, password (hashed)
- Personal information
- Professional details
- Authentication metadata

### Project
- Title and description
- Project owner and collaborators
- Tags for classification
- Creation and update timestamps

### Post
- Content for feed sharing
- Author reference
- Comments and engagement metrics
- Timestamps

### Comment
- Content for post interactions
- Author and post references
- Timestamp

## API Endpoints

### Homepage
- `GET /api/homepage`: Fetch posts for the main feed
- `GET /api/homepage/posts/:postId/comments`: Get comments for a specific post
- `POST /api/homepage/posts/:postId/comments`: Add a new comment
- `DELETE /api/homepage/comments/:commentId`: Delete a comment

### Explore
- `GET /api/explore/explore`: Get discover content
- `GET /api/explore/search`: Search users by criteria

## Installation and Setup

1. Clone the repository
   ```
   git clone https://github.com/yourusername/codeconnect.git
   ```

2. Navigate to the project directory
   ```
   cd codeconnect
   ```

3. Install dependencies
   ```
   npm install
   ```

4. Set up environment variables
   ```
   cp .env.example .env
   # Edit .env with your MongoDB connection string and other config
   ```

5. Start the development server
   ```
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5000`

## Development

### Backend
- RESTful API design pattern
- MongoDB with Mongoose for data modeling
- Express.js middleware for request handling
- Service-based architecture for business logic

### Frontend
- HTML for structure
- CSS for styling
- JavaScript for interactivity
- Font Awesome for icons

## Future Enhancements

- Real-time notifications using Socket.io
- Enhanced search with Elasticsearch
- Project recommendation algorithm
- Mobile application development
- OAuth integration with GitHub and other platforms
- CI/CD pipeline for automated testing and deployment

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern social networking platforms
- Font Awesome for the icon library
- Contributors and testers who provided valuable feedback
