const searchForm = document.querySelector('#search-form');
const resultContent = document.querySelector('#result-content');
const resultText = document.querySelector('#result-text');

function getParams() {
    const searchParamsArr = document.location.search.split('&');
    // console.log(searchParamsArr);

    const query = searchParamsArr[0].split('=').pop();
    console.log(query);

    //todo add search
}
getParams();