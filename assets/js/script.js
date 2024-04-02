const searchForm = document.querySelector('.btn');

function handleSearchFormSubmit(event) {
    event.preventDefault();
    console.log('working');

    const searchInputVal = document.querySelector('#search-form').value;
    console.log(searchInputVal);

  
    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    }

    const queryString = `./result.html?q=${searchInputVal}`;
    location.assign(queryString);

}
searchForm.addEventListener('click', handleSearchFormSubmit);