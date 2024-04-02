const searchForm = document.querySelector('#search-form');
const resultContent = document.querySelector('#result-content');
const resultText = document.querySelector('#result-text');


function getParams() {
    const searchParamsArr = document.location.search.split('&');
    // console.log(searchParamsArr);

    const query = searchParamsArr[0].split('=').pop();
    // console.log(query);

    //todo add searchapi function call using above param
    searchApi(query);
}

async function searchApi(query) {
    let url = 'https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=';
    url += query;
    console.log(url);

  
    // const url = 'https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=' + query;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2776c6113fmshd4ff5eb1a349755p107a83jsnf157c1db2717',
            'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
        }
    };
  try {
    let resultsArr = [];
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
    // console.log(JSON.parse(result));
    resultsArr = JSON.parse(result);
    // console.log(resultsArr);
    // console.log(resultsArr.data);
    const movies = resultsArr.data;
    console.log(movies);
    
  } 
  catch (error) {
    console.error(error);
  }

secondApi();
 }
 
async function secondApi(){
    const url = 'https://streaming-availability.p.rapidapi.com/get?output_language=en&imdb_id=tt0120338';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2776c6113fmshd4ff5eb1a349755p107a83jsnf157c1db2717',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

getParams();