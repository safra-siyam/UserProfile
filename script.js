document.getElementById('moreUsersBtn').addEventListener('click', fetchUsers);

        async function fetchUsers() {
            try {
                const response = await fetch('https://randomuser.me/api/?results=5');
                const data = await response.json();
                const users = data.results;


                const profilesContainer = document.getElementById('profilesContainer'); // div to hold profile cards
                const userTableBody = document.querySelector('#userTable tbody'); // table body to hold user data

                profilesContainer.innerHTML = '';    // Clearing the previous data            
                userTableBody.innerHTML = '';   


                users.forEach(user => {
                    // Creating the profile card
                    const profileCard = document.createElement('div');
                    profileCard.className = 'profile-card';
                    profileCard.innerHTML = 
                       `<img src="${user.picture.medium}" alt="${user.name.first} ${user.name.last}">
                        <h3>${user.name.first} ${user.name.last}</h3>
                        <p>${user.email}</p>`;

                    profilesContainer.appendChild(profileCard); 

                    // Adding row to table
                    const row = document.createElement('tr'); 
                    row.innerHTML = 
                       `<td>${user.name.first} ${user.name.last}</td>
                        <td>${user.email}</td>`;

                    userTableBody.appendChild(row);
                });
            } 
            catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
