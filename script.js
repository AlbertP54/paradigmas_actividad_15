const lista = document.getElementById("lista");
const url = "https://jsonplaceholder.typicode.com/photos";

const getPosts = async () =>{
     const Response = await fetch(url);
     const Posts = await Response.json();
     Posts.map(elemento =>{
        var li = document.createElement('li');
        li.innerHTML =`<a href ="detalle.html?id=${elemento.id}">${elemento.id}</a> ${elemento.title}`
        lista.appendChild(li);
    })
    return Posts;
}
getPosts();
