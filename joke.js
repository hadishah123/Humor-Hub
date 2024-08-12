const apiBody = document.querySelector(".api_body"); 
    // const apiUrl= "https://jsonplaceholder.typicode.com/posts/1";
    const apiUrl= "https://icanhazdadjoke.com";

    // Using Promises...
    // const fetchData=()=>{
    //     const response = fetch(apiUrl,{
    //         headers:{//dont know wh but necessary
    //             Accept: "application/json",
    //         },
    //     })
    //     .then((res)=>{
    //         // console.log(res);
    //         return res.json();//to convert the doc/obj into json
    //     })
    //     .then((data)=>{
    //         console.log(data.joke);
    //         apiBody.innerHTML = data.joke;
    //     })
    //     .catch((error)=>{
    //         apiBody.innerHTML = "API is not working:(";
    //         console.log("failed to fetch...try again with different API url:)");
    //     })
    // }
    
    // Using async await ---> no option to display error in asyncawait that's why we use try and catch in async&await ==>nothing but known as error handling... 
    // async function fetchData() {//
    const fetchData = async() => {//using FAT ARROW func.
        try{
            const res = await fetch(apiUrl,{
                headers:{
                    Accept:"application/json", 
                },
            });
            const data= await res.json();
            console.log(data.joke);
            apiBody.innerHTML = data.joke;
        }
        catch(error){
            apiBody.innerHTML = "API is not working:(";
            console.log("failed to fetch...try again with different API url:)");
            
        }
        
    }


    fetchData();

    document.getElementById("fetchJoke").addEventListener("click",fetchData); 