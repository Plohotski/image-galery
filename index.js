const key = 'I0O0oalkPZuput6oVHgtw8oH7zX_eg6nC-s4QDdtTq4';
let query = 'journey'
let url = `https://api.unsplash.com/search/photos?query=${query}&per_page=30&orientation=landscape&client_id=${key}`;

function updateURL() {
    url = `https://api.unsplash.com/search/photos?query=${query}&per_page=30&orientation=landscape&client_id=${key}`;
}
document.querySelector(".input").focus();

async function getData() { 
    updateURL()
    const res = await fetch(url);
    const data = await res.json();

    const photo = document.querySelector('.photo');
    photo.innerHTML = '';
    for (let i = 0; i < 30; i++) {
        const img = `<img class="photo-img" src="${data.results[i].urls.regular}" alt="image">`;
        photo.insertAdjacentHTML('beforeend', img);
    }
} 
getData();

(function() {
    document.querySelector('input').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        // console.log(this.value);
        if (query != this.value){
        query = this.value
        getData();
        }
    }
    })
})();
