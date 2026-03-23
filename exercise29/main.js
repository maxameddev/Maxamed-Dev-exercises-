// Fetching Data from json file

async function datafromjson(params) {
    let result = await fetch("https://jsonplaceholder.typicode.com/posts")

    let data = await result.json();
    console.log(data)
    
}

datafromjson()