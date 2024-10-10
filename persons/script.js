async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        const userCardsContainer = document.getElementById("userCards");

        userCardsContainer.innerHTML = "";

        data.forEach(user => {
            const card = document.createElement("div")
            card.classList.add("user-card")

            card.innerHTML = `
            <img src="https://robohash.org/${user.id}" alt = "Robot Avatar">
            <h3>${user.name}</h3>
            <p><strong>Username: </strong>${user.username}</p>
            <p><strong>Email: </strong>${user.email}</p>
            <p><strong>ID: </strong>${user.id}`
            
            userCardsContainer.appendChild(card);
         
        });
     
    } catch (error) {
        console.error("Error:", error)
        
    }
    
}


fetchUsers();