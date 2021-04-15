const form = document.querySelector('#searchForm');
const button = document.querySelector('button');
const input = document.querySelector('#queryInput');
const searchResults = document.querySelector('#searchResults');

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const div = document.createElement('DIV');
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            div.append(img)
            searchResults.append(div);
        }
    }
}

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = input.value;
 
    const config = { params: { q: searchTerm } };
    let data = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(data.data);
    input.value = '';
    disableButton();
})

const disableButton = () => {
    button.disabled = !input.value;
}

input.addEventListener('input', disableButton);

button.disabled = true;