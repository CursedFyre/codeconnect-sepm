



const conversations = {
    Alex: [
      {
        from: "Alex",
        text: "Hey! Ready for the review meeting?",
        time: "9:00 AM",
      },
      {
        from: "You",
        text: "Absolutely. Just finalizing the deck.",
        time: "9:05 AM",
      },
    ],
    Casey: [
      { from: "Casey", text: "Can you send me the wireframes?", time: "1:05 PM" },
      { from: "You", text: "On it. Give me 5 minutes.", time: "1:06 PM" },
    ],
    Drew: [
      { from: "Drew", text: "Loved your latest design!", time: "3:15 PM" },
      {
        from: "You",
        text: "Thanks! Took some inspiration from Pinterest.",
        time: "3:18 PM",
      },
    ],
    Jamie: [
      {
        from: "Jamie",
        text: "Who's taking notes in the next meeting?",
        time: "2:40 PM",
      },
      { from: "You", text: "I can do it.", time: "2:41 PM" },
    ],
    Light: [
      {
        from: "Light",
        text: "Is this the best place to discuss UI ideas?",
        time: "3:00 PM",
      },
      { from: "You", text: "Yes, feel free to share anything.", time: "3:02 PM" },
    ],
    Oikawa: [
      {
        from: "Oikawa",
        text: "Did you see the new volleyball training app?",
        time: "2:30 PM",
      },
      { from: "You", text: "Nope, but sounds cool!", time: "2:31 PM" },
    ],
    Candace: [
      {
        from: "Candace",
        text: "Mockups are live, check your email!",
        time: "3:10 PM",
      },
      { from: "You", text: "Looking now!", time: "3:12 PM" },
    ],
    Joe: [
      {
        from: "Joe",
        text: "Are we still on for pair programming today?",
        time: "2:40 PM",
      },
      { from: "You", text: "Yep, meet in the dev room in 10.", time: "2:42 PM" },
    ],
    Jordan: [
      { from: "Jordan", text: "Lunch?", time: "11:10 AM" },
      { from: "You", text: "Let's go at 12!", time: "11:11 AM" },
    ],
    Taylor: [
      {
        from: "Taylor",
        text: "The new banner image looks sick!",
        time: "12:40 PM",
      },
      {
        from: "You",
        text: "All credits to the illustrator 😎",
        time: "12:42 PM",
      },
    ],
    Morgan: [
      { from: "Morgan", text: "Let’s sync on the QA bugs.", time: "2:00 PM" },
      { from: "You", text: "Good idea. I’ve got notes ready.", time: "2:02 PM" },
    ],
    Quinn: [
      { from: "Quinn", text: "Your last PR was 🔥", time: "3:44 PM" },
      {
        from: "You",
        text: "Thanks, I tried a different pattern!",
        time: "3:45 PM",
      },
    ],
    Riley: [
      { from: "Riley", text: "Weekly check-in tomorrow at 9.", time: "4:00 PM" },
      { from: "You", text: "Got it on my calendar.", time: "4:01 PM" },
    ],
    Sam: [
      {
        from: "Sam",
        text: "Let’s fix that header layout issue.",
        time: "4:25 PM",
      },
      { from: "You", text: "Agreed. Want to do a screenshare?", time: "4:27 PM" },
    ],
    Charlie: [
      {
        from: "Charlie",
        text: "Thinking of switching to TypeScript. Thoughts?",
        time: "5:10 PM",
      },
      {
        from: "You",
        text: "Do it. Saves you headaches in the long run.",
        time: "5:11 PM",
      },
    ],
    Dakota: [
      { from: "Dakota", text: "Just pushed some style fixes.", time: "5:35 PM" },
      { from: "You", text: "Thanks! Merging now.", time: "5:36 PM" },
    ],
    Avery: [
      { from: "Avery", text: "We need to plan the roadmap.", time: "6:00 PM" },
      { from: "You", text: "Tomorrow work for you?", time: "6:01 PM" },
    ],
    Parker: [
      { from: "Parker", text: "I'm loving our dark theme.", time: "6:25 PM" },
      { from: "You", text: "It's sleek, right? 😎", time: "6:27 PM" },
    ],
  
    // Group chats
    "Dev Group": [
      { from: "Alex", text: "What’s the sprint goal?", time: "9:00 AM" },
      { from: "Jamie", text: "Bug-free dashboard!", time: "9:05 AM" },
      { from: "You", text: "I’ll help with testing.", time: "9:10 AM" },
    ],
    "Design Team": [
      {
        from: "Taylor",
        text: "Let’s finalize the color palette today.",
        time: "9:25 AM",
      },
      {
        from: "You",
        text: "Pushing final suggestions shortly.",
        time: "9:30 AM",
      },
    ],
    "Project Alpha": [
      { from: "Jordan", text: "We hit 80% code coverage 🎉", time: "8:30 AM" },
      { from: "You", text: "That's epic! On track for Friday.", time: "8:32 AM" },
    ],
  };
  








let isUserInfo = true;
function toggleContent() {
    const userInfo = document.getElementById("user-info");
    const projects = document.getElementById("projects");
    const slider = document.querySelector(".slider");

    if (isUserInfo) {
        userInfo.classList.remove("active");
        projects.classList.add("active");
        
        slider.style.transform = "translateX(100%)";
    } 
    else {
        projects.classList.remove("active");
        userInfo.classList.add("active");

        slider.style.transform = "translateX(0%)";
    }
    isUserInfo = !isUserInfo;
}
    
function saveDetails() {
    document.getElementById("successMessage").classList.add("show");
    document.getElementById("backbutton").classList.add("show");
    setTimeout(() => {
        document.getElementById("successMessage").classList.remove("show");
    }, 3000);

    setTimeout(() => {
        document.getElementById("backbutton").classList.remove("show");
    }, 50000);

}   

        

fetch('projectcard.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('dialog-container').innerHTML = html;
        setupModal(); // Attach event listeners after loading
    });

function setupModal() {
    const modal = document.getElementById("popup");
    // const openBtn = document.getElementById("openPopup");
    const closeBtn = document.getElementById("closePopup");

    const projectDivs = document.querySelectorAll(".pr");

    projectDivs.forEach(div => {
    div.addEventListener("click", () => {
        modal.showModal();
    });
    });

    closeBtn.addEventListener("click", () => {
        modal.close();
    });
}
 


// Add interactivity
document.addEventListener('DOMContentLoaded', function () {
    loadMessages(); // Load messages dynamically

    // Heart icon toggle
    const heartIcons = document.querySelectorAll('.fa-heart');
    heartIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            if (this.classList.contains('far')) {
                this.classList.remove('far');
                this.classList.add('fas');
                this.style.color = '#e0245e';
                const countElement = this.nextElementSibling;
                const currentCount = parseInt(countElement.textContent);
                countElement.textContent = (currentCount + 1).toString();
            } else {
                this.classList.remove('fas');
                this.classList.add('far');
                this.style.color = '';
                const countElement = this.nextElementSibling;
                const currentCount = parseInt(countElement.textContent);
                countElement.textContent = (currentCount - 1).toString();
            }
        });
    });

    // Post button functionality
    const postTextarea = document.querySelector('.post-input');
    const postButton = document.querySelector('.create-post .action-btn');

    postButton.addEventListener('click', function () {
        const postContent = postTextarea.value.trim();
        if (postContent) {
            // Create new post element
            const newPost = document.createElement('div');
            newPost.className = 'post';
            newPost.innerHTML = `
                <div class="post-header">
                    <div class="user-avatar" style="background-color: #3e8a66;">
                        <div>Y</div>
                    </div>
                    <div class="user-info">
                        <div class="user-name">You</div>
                        <div class="user-handle">@your_username</div>
                    </div>
                    <div class="post-time">Just now</div>
                </div>
                <div class="post-content">${postContent}</div>
                <div class="post-actions">
                    <div class="action">
                        <i class="far fa-heart"></i>
                        <span>0</span>
                    </div>
                    <div class="action">
                        <i class="far fa-comment"></i>
                        <span>0</span>
                    </div>
                    <div class="action">
                        <i class="far fa-share"></i>
                    </div>
                </div>
            `;

            // Add the new post to the top of the feed
            const firstPost = document.querySelector('.main-content .post');
            document.querySelector('.main-content').insertBefore(newPost, firstPost);

            // Clear the textarea
            postTextarea.value = '';

            // Add heart functionality to the new post
            const newHeartIcon = newPost.querySelector('.fa-heart');
            newHeartIcon.addEventListener('click', function () {
                if (this.classList.contains('far')) {
                    this.classList.remove('far');
                    this.classList.add('fas');
                    this.style.color = '#e0245e';
                    const countElement = this.nextElementSibling;
                    const currentCount = parseInt(countElement.textContent);
                    countElement.textContent = (currentCount + 1).toString();
                } else {
                    this.classList.remove('fas');
                    this.classList.add('far');
                    this.style.color = '';
                    const countElement = this.nextElementSibling;
                    const currentCount = parseInt(countElement.textContent);
                    countElement.textContent = (currentCount - 1).toString();
                }
            });
        }
    });
});

// Function to load messages into the right sidebar

//new
function loadMessages() {
    fetch('messages.html')
        .then(response => response.text())
        .then(html => {
            const sidebar = document.getElementById('right-sidebar');
            if (sidebar) {
                sidebar.innerHTML = html;
                attachMessageItemListeners(); // <-- Add this call here
            } else {
                console.error("Error: right-sidebar element not found.");
            }
        })
        .catch(error => console.error('Error loading messages:', error));
}

function attachMessageItemListeners() {
    const messageItems = document.querySelectorAll('.message-item');
  
    messageItems.forEach(function(item) {
      item.addEventListener('click', function () {
        const nameElement = this.querySelector('.message-name');
        const username = nameElement ? nameElement.textContent : 'User';
  
        const avatarImg = this.querySelector('.message-avatar img');
        const avatarSrc = avatarImg ? avatarImg.src : '/api/placeholder/40/40';
  
        const messages = conversations[username] || [];
  
        if (window.showMessageDialog) {
          window.showMessageDialog(username, avatarSrc, messages);
        } else {
          console.error('showMessageDialog function not found');
        }
      });
    });
  }
  

// Function for messages sidebar toggle functionality
//new onef
// Message sidebar toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-sidebar');
    const rightSidebar = document.getElementById('right-sidebar');
    
    if (toggleBtn && rightSidebar) {
      toggleBtn.addEventListener('click', function() {
        rightSidebar.classList.toggle('hidden');
        toggleBtn.textContent = rightSidebar.classList.contains('hidden') ? '>>' : '<<';
        toggleBtn.title = rightSidebar.classList.contains('hidden') ? 'Open Messages' : 'Close Messages';
      });
    }
    
    // Add click event listeners to all message items
    const messageItems = document.querySelectorAll('.message-item');
    
    messageItems.forEach(function(item) {
      item.addEventListener('click', function() {
        // Get username from the clicked message item
        const nameElement = this.querySelector('.message-name');
        const username = nameElement ? nameElement.textContent : 'User';
        
        // Get avatar image source (or use placeholder if not found)
        const avatarImg = this.querySelector('.message-avatar img');
        const avatarSrc = avatarImg ? avatarImg.src : '/api/placeholder/40/40';
        
        // Show message dialog with this user's info
        if (window.showMessageDialog) {
          window.showMessageDialog(username, avatarSrc);
        } else {
          console.error('showMessageDialog function not found');
        }
      });
    });
  });


// explore page functions

let wack = true;
    function tc() {
        const pt = document.getElementById("precision-content");
        const st = document.getElementById("similar-content");
        const slider = document.querySelector(".slider");
    
        // Hide both grids immediately when toggling
        pt.classList.remove("active");
        st.classList.remove("active");
        pt.style.display = "none";
        st.style.display = "none";
    
        // Move the toggle slider
        if (wack) {
            slider.style.transform = "translateX(100%)";
        } else {
            slider.style.transform = "translateX(0%)";
        }
    
        wack = !wack;
}





// Updated dropdown functionality
function toggleDropdown(event) {
    // Prevent the default button behavior
    event.preventDefault();
    
    // Get the parent dropdown container of the clicked button
    const dropdown = event.currentTarget.closest('.dropdown');
    
    // Close all other dropdowns first
    document.querySelectorAll('.dropdown.show').forEach(openDropdown => {
      if (openDropdown !== dropdown) {
        openDropdown.classList.remove('show');
      }
    });
    
    // Toggle the current dropdown
    dropdown.classList.toggle('show');
  }
  
  // Update selection each time a checkbox is clicked
  function updateSelection(event) {
    // Get parent filter item
    const filterItem = event.target.closest('.filter-item');
    // Get the selected items container
    const selectedItemsContainer = filterItem.querySelector('.selected-items');
    
    // Get all selected values directly from checked boxes
    const selectedValues = Array.from(
      filterItem.querySelectorAll('input[type="checkbox"]:checked')
    ).map(checkbox => checkbox.value);
    
    // Update the display
    selectedItemsContainer.textContent = selectedValues.length ? selectedValues.join(', ') : "None";
  }
  
  // Add new option when Enter key is pressed
  document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to all checkboxes
    document.querySelectorAll('.filter-item input[type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', updateSelection);
    });
    
    // Add event listener to all dropdown inputs
    document.querySelectorAll('.dropdown-input').forEach(input => {
      input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
          event.preventDefault();
          let newOption = this.value.trim();
          if (newOption) {
            let label = document.createElement('label');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = newOption;
            
            // Add event listener to the new checkbox
            checkbox.addEventListener('change', updateSelection);
            
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(' ' + newOption));
            
            // Add the new option to the dropdown content
            this.closest('.dropdown-content').appendChild(label);
            this.value = '';
          }
        }
      });
    });
    
    // Attach click event to all dropdown buttons
    document.querySelectorAll('.dropdown-btn').forEach(button => {
      button.onclick = toggleDropdown;
    });
  });
  
  // Close dropdowns when clicking outside
  window.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown.show').forEach(dropdown => {
        dropdown.classList.remove('show');
      });
    }
  });



//   explore page modal

// Example user data



const users = [
    {
      name: "Alice Johnson",
      age: 28,
      gender: "Female",
      contact: "555-123-4567",
      email: "alice.johnson@example.com",
      location: "New York",
      role: "Frontend Developer",
      domain: "E-commerce, Fintech",
      skills: ["JavaScript", "React", "HTML", "CSS"],
      collaboration: "Remote Work",
      since: "2022",
      image: "profile1.jpg"
    },
    {
      name: "Bob Smith",
      age: 34,
      gender: "Male",
      contact: "555-222-3344",
      email: "bob.smith@example.com",
      location: "Chicago",
      role: "Backend Developer",
      domain: "Healthcare",
      skills: ["Node.js", "Express", "MongoDB", "Docker"],
      collaboration: "In-office",
      since: "2020",
      image: "profile2.jpg"
    },
    {
      name: "Carla Gomez",
      age: 31,
      gender: "Female",
      contact: "555-987-6543",
      email: "carla.gomez@example.com",
      location: "Austin",
      role: "Full Stack Developer",
      domain: "Education, Social Media",
      skills: ["JavaScript", "Python", "React", "PostgreSQL"],
      collaboration: "Hybrid",
      since: "2023",
      image: "profile3.jpg"
    },
    {
      name: "Daniel Lee",
      age: 29,
      gender: "Male",
      contact: "555-666-7788",
      email: "daniel.lee@example.com",
      location: "Seattle",
      role: "DevOps Engineer",
      domain: "Cloud, AI/ML",
      skills: ["AWS", "Terraform", "Kubernetes", "Python"],
      collaboration: "Synchronous",
      since: "2021",
      image: "profile4.jpg"
    },
    {
      name: "Eva Mendes",
      age: 35,
      gender: "Female",
      contact: "555-888-9999",
      email: "eva.mendes@example.com",
      location: "Los Angeles",
      role: "UI/UX Designer",
      domain: "Entertainment, Fintech",
      skills: ["Figma", "Sketch", "Adobe XD", "HTML/CSS"],
      collaboration: "Remote Work",
      since: "2019",
      image: "profile5.jpg"
    },
    {
    name: "Avery Brooks",
    age: 33,
    gender: "Non-binary",
    contact: "555-876-4321",
    email: "avery.brooks@techloop.com",
    location: "San Francisco",
    role: "Cloud Engineer",
    domain: "Cloud, Fintech",
    skills: ["AWS", "GCP", "Azure", "Terraform", "Bash"],
    collaboration: "Hybrid",
    since: "2020",
    image: "avery.jpg"
  },
  {
    name: "Sung Hoon",
    age: 30,
    gender: "Male",
    contact: "555-999-0001",
    email: "sung.hoon@kdev.io",
    location: "Tokyo",
    role: "Frontend Developer",
    domain: "E-commerce",
    skills: ["Vue.js", "Nuxt", "TailwindCSS", "TypeScript"],
    collaboration: "In-office",
    since: "2022",
    image: "sung.jpg"
  },
  {
    name: "Dakota Lane",
    age: 29,
    gender: "Female",
    contact: "555-112-3344",
    email: "dakota.lane@buildtech.org",
    location: "Denver",
    role: "Project Manager",
    domain: "Construction Tech, Web",
    skills: ["Jira", "Agile", "Notion", "Excel", "Scrum"],
    collaboration: "Small Teams",
    since: "2021",
    image: "dakota.jpg"
  },
  {
    name: "Riley Chen",
    age: 26,
    gender: "Female",
    contact: "555-200-3000",
    email: "riley.chen@mlhub.net",
    location: "Toronto",
    role: "Data Scientist",
    domain: "AI/ML, HealthTech",
    skills: ["Python", "Pandas", "Scikit-learn", "R", "Tableau"],
    collaboration: "Remote Work",
    since: "2023",
    image: "riley.jpg"
  },
  {
    name: "George Floyd",
    age: 35,
    gender: "Male",
    contact: "555-618-3131",
    email: "gfloyd@freedom.dev",
    location: "Houston",
    role: "QA/Test Engineer",
    domain: "Civil Tech, Public Safety",
    skills: ["Selenium", "Postman", "JUnit", "Java"],
    collaboration: "Synchronous",
    since: "2024",
    image: "george.jpg"
  },
  {
    name: "Taylor Swift",
    age: 34,
    gender: "Female",
    contact: "555-421-5532",
    email: "taylor@swiftymusic.dev",
    location: "Nashville",
    role: "UI/UX Designer",
    domain: "Entertainment, Social Media",
    skills: ["Figma", "Illustrator", "Protopie", "Webflow"],
    collaboration: "Remote Work",
    since: "2022",
    image: "taylor.jpg"
  },
  {
    name: "Bhupendra Jogi",
    age: 32,
    gender: "Male",
    contact: "555-191-1919",
    email: "bhupendra@incredible.in",
    location: "Mumbai",
    role: "Database Administrator",
    domain: "Fintech, Telecom",
    skills: ["SQL", "Oracle", "MongoDB", "PostgreSQL"],
    collaboration: "Large Teams",
    since: "2020",
    image: "bhupendra.jpg"
  },
  {
    name: "Quinn Taylor",
    age: 25,
    gender: "Non-binary",
    contact: "555-888-1212",
    email: "quinn@openpixel.org",
    location: "Melbourne",
    role: "Game Developer",
    domain: "Gaming, AI/ML",
    skills: ["Unity", "C#", "Blender", "Unreal", "Lua"],
    collaboration: "Cross-functional Teams",
    since: "2021",
    image: "quinn.jpg"
  },
  {
    name: "Morgan Reese",
    age: 38,
    gender: "Female",
    contact: "555-323-4567",
    email: "morgan.reese@datascape.ai",
    location: "Boston",
    role: "Technical Writer",
    domain: "AI/ML, Education",
    skills: ["Markdown", "LaTeX", "Notion", "Docs-as-Code"],
    collaboration: "Asynchronous",
    since: "2019",
    image: "morgan.jpg"
  },
  {
    name: "Charlie Vega",
    age: 30,
    gender: "Male",
    contact: "555-123-0101",
    email: "charlie.v@codezen.io",
    location: "Berlin",
    role: "Full Stack Developer",
    domain: "Web3, Blockchain",
    skills: ["Solidity", "Node.js", "React", "IPFS"],
    collaboration: "Remote Work",
    since: "2025",
    image: "charlie.jpg"
  }
  ];



const userstwo = [

  {
    name: "Sung Hoon",
    age: 30,
    gender: "Male",
    contact: "555-999-0001",
    email: "sung.hoon@kdev.io",
    location: "Tokyo",
    role: "Frontend Developer",
    domain: "E-commerce",
    skills: ["Vue.js", "Nuxt", "TailwindCSS", "TypeScript"],
    collaboration: "In-office",
    since: "2022",
    image: "sung.jpg"
  },
  {
    name: "Dakota Lane",
    age: 29,
    gender: "Female",
    contact: "555-112-3344",
    email: "dakota.lane@buildtech.org",
    location: "Denver",
    role: "Project Manager",
    domain: "Construction Tech, Web",
    skills: ["Jira", "Agile", "Notion", "Excel", "Scrum"],
    collaboration: "Small Teams",
    since: "2021",
    image: "dakota.jpg"
  },
  {
    name: "Riley Chen",
    age: 26,
    gender: "Female",
    contact: "555-200-3000",
    email: "riley.chen@mlhub.net",
    location: "Toronto",
    role: "Data Scientist",
    domain: "AI/ML, HealthTech",
    skills: ["Python", "Pandas", "Scikit-learn", "R", "Tableau"],
    collaboration: "Remote Work",
    since: "2023",
    image: "riley.jpg"
  },
  {
    name: "George Floyd",
    age: 35,
    gender: "Male",
    contact: "555-618-3131",
    email: "gfloyd@freedom.dev",
    location: "Houston",
    role: "QA/Test Engineer",
    domain: "Civil Tech, Public Safety",
    skills: ["Selenium", "Postman", "JUnit", "Java"],
    collaboration: "Synchronous",
    since: "2024",
    image: "george.jpg"
  },
  {
    name: "Taylor Swift",
    age: 34,
    gender: "Female",
    contact: "555-421-5532",
    email: "taylor@swiftymusic.dev",
    location: "Nashville",
    role: "UI/UX Designer",
    domain: "Entertainment, Social Media",
    skills: ["Figma", "Illustrator", "Protopie", "Webflow"],
    collaboration: "Remote Work",
    since: "2022",
    image: "taylor.jpg"
  },
  {
    name: "Bhupendra Jogi",
    age: 32,
    gender: "Male",
    contact: "555-191-1919",
    email: "bhupendra@incredible.in",
    location: "Mumbai",
    role: "Database Administrator",
    domain: "Fintech, Telecom",
    skills: ["SQL", "Oracle", "MongoDB", "PostgreSQL"],
    collaboration: "Large Teams",
    since: "2020",
    image: "bhupendra.jpg"
  },
  {
    name: "Quinn Taylor",
    age: 25,
    gender: "Non-binary",
    contact: "555-888-1212",
    email: "quinn@openpixel.org",
    location: "Melbourne",
    role: "Game Developer",
    domain: "Gaming, AI/ML",
    skills: ["Unity", "C#", "Blender", "Unreal", "Lua"],
    collaboration: "Cross-functional Teams",
    since: "2021",
    image: "quinn.jpg"
  },
  {
    name: "Morgan Reese",
    age: 38,
    gender: "Female",
    contact: "555-323-4567",
    email: "morgan.reese@datascape.ai",
    location: "Boston",
    role: "Technical Writer",
    domain: "AI/ML, Education",
    skills: ["Markdown", "LaTeX", "Notion", "Docs-as-Code"],
    collaboration: "Asynchronous",
    since: "2019",
    image: "morgan.jpg"
  },
  {
    name: "Charlie Vega",
    age: 30,
    gender: "Male",
    contact: "555-123-0101",
    email: "charlie.v@codezen.io",
    location: "Berlin",
    role: "Full Stack Developer",
    domain: "Web3, Blockchain",
    skills: ["Solidity", "Node.js", "React", "IPFS"],
    collaboration: "Remote Work",
    since: "2025",
    image: "charlie.jpg"
  },
{
    name: "Chaewon Kim",
    age: 27,
    gender: "Female",
    contact: "555-432-1987",
    email: "chaewon.kim@example.com",
    location: "Seoul",
    role: "Machine Learning Engineer",
    domain: "AI/ML, Cybersecurity",
    skills: ["Python", "TensorFlow", "PyTorch", "Pandas"],
    collaboration: "Asynchronous",
    since: "2024",
    image: "profile6.jpg"
},
{
    name: "Megatron 9000",
    age: 300,
    gender: "Robot",
    contact: "N/A",
    email: "megatron@cybertron.ai",
    location: "Cybertron",
    role: "Systems Architect",
    domain: "Military AI, Robotics",
    skills: ["Rust", "Go", "Quantum Computing"],
    collaboration: "Solo Work",
    since: "2020",
    image: "megatron.jpg"
},
{
    name: "Zoro Roronoa",
    age: 21,
    gender: "Male",
    contact: "555-321-6789",
    email: "zoro.swordsman@animeworld.com",
    location: "East Blue",
    role: "Security Engineer",
    domain: "Gaming, Cybersecurity",
    skills: ["C++", "Assembly", "SwordJS"],
    collaboration: "Pair Programming",
    since: "2023",
    image: "zoro.jpg"
},
{
    name: "Naruto Uzumaki",
    age: 24,
    gender: "Male",
    contact: "555-123-9876",
    email: "naruto.hokage@konoha.com",
    location: "Hidden Leaf",
    role: "Backend Developer",
    domain: "Education, Social Media",
    skills: ["Java", "Spring Boot", "MySQL"],
    collaboration: "Cross-functional Teams",
    since: "2021",
    image: "naruto.jpg"
},
{
    name: "Opium Ningning",
    age: 26,
    gender: "Female",
    contact: "555-726-1524",
    email: "ningning@aespa.kr",
    location: "Busan",
    role: "Full Stack Developer",
    domain: "Entertainment, Web3",
    skills: ["TypeScript", "React", "Solidity", "Next.js"],
    collaboration: "Remote Work",
    since: "2025",
    image: "ningning.jpg"

},
{
    name: "Katarina Bluu",
    age: 26,
    gender: "Female",
    contact: "9486237661",
    email: "karina@aespa.kr",
    location: "Seoul",
    role: "Game Dev",
    domain: "Entertainment, Gaming",
    skills: ["Git", "Node.js", "SQL"],
    collaboration: "Remote Work",
    since: "2025",
    image: "Pair Programming"
}
];
  

  // Function to generate user cards dynamically
  const userGridone = document.getElementById('userGridone');
  const userGridtwo = document.getElementById('userGridtwo');


  users.forEach(user => {
    const card = document.createElement('div');
    card.className = 'user-card';
    card.textContent = user.name;
    card.onclick = () => openModal(user.name);
    userGridone.appendChild(card);
  });

  userstwo.forEach(user => {
    const card = document.createElement('div');
    card.className = 'user-card';
    card.textContent = user.name;
    card.onclick = () => openModal(user.name);
    userGridtwo.appendChild(card);
});

  // Modal functions

//new
function openModal(userName) {
    const user = [...users, ...userstwo].find(u => u.name === userName);
    if (!user) return;
  
    document.getElementById('modal-title').innerText = user.name;
    document.querySelector('.profile-pic').src = user.image || 'default.jpg';
    document.querySelector('.profile-since').innerText = `User Since: ${user.since || 'N/A'}`;
  
    const sections = document.querySelectorAll('.info-section');
    if (sections.length >= 4) {
      sections[0].innerHTML = `
        <h2 class="section-title">Personal</h2>
        <p><strong>Age:</strong> ${user.age}</p>
        <p><strong>Gender:</strong> ${user.gender}</p>
        <p><strong>Contact:</strong> ${user.contact}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Location:</strong> ${user.location}</p>
      `;
  
      sections[1].innerHTML = `
        <h2 class="section-title">Role & Expertise</h2>
        <p><strong>Primary Role:</strong> ${user.role}</p>
        <p><strong>Domain Expertise:</strong> ${user.domain}</p>
      `;
  
      sections[2].innerHTML = `
        <h2 class="section-title">Technical Skills</h2>
        <div class="skills-list">
          ${user.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join("")}
        </div>
      `;
  
      sections[3].innerHTML = `
        <h2 class="section-title">Collaboration Preference</h2>
        <p>${user.collaboration}</p>
      `;
    }
  
    document.getElementById('modal').classList.remove('hidden');
  }
  

  function closeModal() {
    document.getElementById('modal').classList.add('hidden');
  }



 

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to both grids
    const precisionGrid = document.getElementById('userGridone');
    const similarGrid = document.getElementById('userGridtwo');
    
    // Populate both grids
    if (precisionGrid && similarGrid) {
        // Populate precision grid with "users"
        users.forEach(user => {
            const precisionCard = document.createElement('div');
            precisionCard.className = 'user-card';
            precisionCard.textContent = user.name;
            precisionCard.onclick = () => openModal(user.name);
            precisionCard.style.color = '#ffffff';
            precisionGrid.appendChild(precisionCard);
        });
    
        // Populate similar grid with "userstwo"
        userstwo.forEach(user => {
            const similarCard = document.createElement('div');
            similarCard.className = 'user-card';
            similarCard.textContent = user.name;
            similarCard.onclick = () => openModal(user.name);
            similarCard.style.color = '#ffffff';
            similarGrid.appendChild(similarCard);
        });
    }
    
    
    // Set up search button functionality
    document.querySelector('.searchb').addEventListener('click', function() {
        search();
    });
});

// Search function to show the appropriate content
function search() {
    const precision = document.getElementById('precision-content');
    const similar = document.getElementById('similar-content');
    const isPrecisionActive = document.querySelector('.slider').style.transform === 'translateX(0%)' || 
        document.querySelector('.slider').style.transform === '';

    // Hide both first
    precision.classList.remove('active');
    similar.classList.remove('active');
    precision.style.display = 'none';
    similar.style.display = 'none';

    // Show only the selected one
    if (isPrecisionActive) {
        precision.classList.add('active');
        precision.style.display = 'block';
    } else {
        similar.classList.add('active');
        similar.style.display = 'block';
    }
}

// Make sure closeModal is in global scope
window.closeModal = function() {
    document.getElementById('modal').classList.add('hidden');
};

// Make sure your existing toggle function (tc) works correctly
// function tc() {
//     const pt = document.getElementById("precision-content");
//     const st = document.getElementById("similar-content");
//     const slider = document.querySelector(".slider");

//     if (wack) {
//         pt.classList.remove("active");
//         st.classList.add("active");
//         slider.style.transform = "translateX(100%)";
//     } else {
//         st.classList.remove("active");
//         pt.classList.add("active");
//         slider.style.transform = "translateX(0%)";
//     }
//     wack = !wack;
// }

document.addEventListener('DOMContentLoaded', function () {
    // Hide both user grids initially
    document.getElementById('precision-content').classList.remove('active');
    document.getElementById('similar-content').classList.remove('active');

    // Optional: also hide them explicitly just in case
    document.getElementById('precision-content').style.display = 'none';
    document.getElementById('similar-content').style.display = 'none';
});




