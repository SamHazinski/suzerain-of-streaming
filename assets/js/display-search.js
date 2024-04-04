// const searchForm = document.querySelector('#search-form');
// const resultContent = document.querySelector('#result-content');
// const resultText = document.querySelector('#result-text');
let tempMovieArr = [];
// let movieArr = [];
function getParams() {
    const searchParamsArr = document.location.search.split('&');
    // console.log(searchParamsArr);

    const query = searchParamsArr[0].split('=').pop();
    // console.log(query);

    //todo add searchapi function call using above param
    searchApi(query);
}

async function searchApi(query) {

  let url = 'https://movie-database-alternative.p.rapidapi.com/?s=';
  url += query + "&r=json&page=1";
  console.log(url);
  let movieArr = [];

  // const url = 'https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=' + query;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2776c6113fmshd4ff5eb1a349755p107a83jsnf157c1db2717',
      'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    }
  };
  try {
    let resultsArr = [];
    const response = await fetch(url, options);
    const result = await response.text();
    resultsArr = JSON.parse(result);
    // console.log(resultsArr);
    // console.log(resultsArr.Search);
    const movieArr = resultsArr.Search;
    console.log(movieArr);
    tempMovieArr = movieArr;
    
  }
  catch (error) {
    console.error(error);
  }


//add a loop to get each movie, grab the id, then create a div, inject movie title and append 

  for (let i = 0; i < tempMovieArr.length; i++) {
    console.log(tempMovieArr[i].Title);
    console.log(tempMovieArr[i].imdbID);
    const newDiv = document.createElement('div');
    // const newH2 = document.createElement('h2')
    const newCont = document.createTextNode(tempMovieArr[i].Title);
    // const newStreamList = document.createTextNode("streaming services");
    newDiv.style.color = "#ff0000"
    // newH2.style.color = "#ff0000"
    newDiv.appendChild(newCont);
    // newH2.appendChild(newStreamList);
    const currentDiv = document.getElementById('#search-form');
    document.getElementById('search-form').insertAdjacentElement("afterend", newDiv);
    
    // document.body.insertBefore(newDiv, currentDiv);

   
    // document.body.insertBefore(newH2, currentDiv);
    // console.log(secondApi(tempMovieArr[i].imdbID));
    // let streamingServ = [];
    // streamingServ = secondApi(tempMovieArr[i].imdbID);
    // console.log(streamingServ);


}



// secondApi(); //todo take the 
 }

//add query params
async function secondApi(movieID){
    //todo take the ID from the function param and add to the url temporary until query params are added
    // const url = 'https://streaming-availability.p.rapidapi.com/get?output_language=en&imdb_id=tt0120338';


    //uncomment this when you add querey param
    let url = 'https://streaming-availability.p.rapidapi.com/get?output_language=en&imdb_id=';
    url += movieID;
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
// console.log(streamingPlat.result.streamingInfo.us);
return streamingPlat.result.streamingInfo.us;
}

getParams();

