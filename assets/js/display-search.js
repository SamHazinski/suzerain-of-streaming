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

// secondApi(); //todo take the 
 }
//add query params
async function secondApi(){
    //todo take the ID from the function param and add to the url temporary until query params are added
    const url = 'https://streaming-availability.p.rapidapi.com/get?output_language=en&imdb_id=tt0120338';


    //uncomment this when you add querey param
    // let url = 'https://streaming-availability.p.rapidapi.com/get?output_language=en&imdb_id=';
    // url += query;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2776c6113fmshd4ff5eb1a349755p107a83jsnf157c1db2717',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};
//todo take the streaming data in america and return it to the calling function
let streamingPlat = null;
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
    streamingPlat = JSON.parse(result);
    // console.log(streamingPlat.result.streamingInfo.us);
    //  console.log(streamingPlat.streamingInfo.us);
    // return streamingPlat.result.streamingInfo.us;

} catch (error) {
	console.error(error);
}
//return streaminginfo
console.log(streamingPlat.result.streamingInfo.us);

}

//getParams();
secondApi();