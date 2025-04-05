
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
function loadMessages() {
    fetch('messages.html')  // Ensure correct path
        .then(response => response.text())
        .then(html => {
            const sidebar = document.getElementById('right-sidebar');
            if (sidebar) {
                sidebar.innerHTML = html;
            } else {
                console.error("Error: right-sidebar element not found.");
            }
        })
        .catch(error => console.error('Error loading messages:', error));
}
// Function for messages sidebar toggle functionality
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("right-sidebar");
    const toggleBtn = document.getElementById("toggle-sidebar");

    toggleBtn.addEventListener("click", function () {
        const isHidden = sidebar.classList.toggle("hidden");

        toggleBtn.textContent = isHidden ? "<<" : ">>";
        toggleBtn.title = isHidden ? "Open Messages" : "Close Messages";
    });
});



// explore page functions

let wack = true;
    function tc() {
    const pt = document.getElementById("precision-content");
    const st = document.getElementById("similar-content");
    const slider = document.querySelector(".slider");

    if (wack) {
        pt.classList.remove("active");
        st.classList.add("active");
        
        slider.style.transform = "translateX(100%)";
    } 
    else {
        st.classList.remove("active");
        pt.classList.add("active");

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