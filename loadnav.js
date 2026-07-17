fetch("navbar.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Impossible de charger nav.html");
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    })
    .catch(error => console.error(error));