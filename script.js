
const preloader = document.getElementById('preloader');

let preloading = false;

const getData = () => {
    if (!preloading) {
    preloading = true;
    fetch(`https://akademia108.pl/api/ajax/get-users.php`, {
    mode: `cors`,
    method: `GET`,
    })
    .then(document.body.appendChild(preloader))
    .then(response => response.json())
    .then((data) => {
        data.forEach( function(element) {
        let id = element.id;
        let name = element.name;
        let website = element.website;
        
        let pId = document.createElement('p');
        let pName = document.createElement('p');
        let pWebsite = document.createElement('p');

        pId.innerText = `User ID: ${id}`;
        pName.innerText = `User Name: ${name}`;
        pWebsite.innerHTML = `User URL: ${website}<br>-------- `;
        
        document.body.appendChild(pId);
        document.body.appendChild(pName);
        document.body.appendChild(pWebsite);
        hidePreloader();
        console.log(preloading)
    }); 
    })
    .catch((error) => {
        console.error(error);
    })
}}

window.addEventListener(`scroll`, function scrollToEndOfPage () {
    const scrolled = Math.ceil(document.documentElement.clientHeight + document.documentElement.scrollTop);
    const scrollable = document.documentElement.scrollHeight;
    if (scrolled >= scrollable) {
    getData();
}});

const hidePreloader = () => {
    preloader.remove();
    preloading = false;
    console.log(preloading)
}

window.addEventListener('load', (event) => {
    hidePreloader();
})

console.log(preloading)