const apiBody = document.querySelector(".api_body"); 
const apiUrl = "https://official-joke-api.appspot.com/random_joke";

const fetchData = () => {
    fetch(apiUrl, {
        headers: {
            Accept: "application/json",
        },
    })
    .then((res) => res.json()) 
    .then((data) => {
        console.log(data.setup);
        console.log(data.punchline);
        apiBody.innerHTML = `${data.setup} - ${data.punchline}`;
    })
    .catch((error) => {
        apiBody.innerHTML = "API is not working:(";
        console.log("Failed to fetch... Try again with a different API URL.");
    });
}

document.getElementById("fetchJoke").addEventListener("click", fetchData);
