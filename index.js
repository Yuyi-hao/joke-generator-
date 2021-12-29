const joke = document.getElementById('joke');
const category = document.getElementById('writer');
const btn = document.getElementById('btn');
const jokes = () => {const request = new XMLHttpRequest();
request.open('GET','https://v2.jokeapi.dev/joke/Any?type=single');
request.send();
request.addEventListener('load',function(){
    const data = this.responseText;
    const dataObj = JSON.parse(data);
    joke.innerHTML = `${dataObj.joke}.. 😆🤣`;
    category.innerHTML = `~~ ✍${dataObj.category}`;
})
};

jokes();
btn.addEventListener('click',jokes);


