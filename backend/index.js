const express=require('express')
const cors=require('cors')
const fetch = require('cross-fetch')

const app = express();
const PORT = 3001; 
app.use(cors())



app.get('/api/searchsuggestions', async (req, res) => {
  const {q} = req.query;
  const url = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${q}`


 try {
  const response = await fetch(url,{
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }
  }) 

  const data = await response.json();

  res.json({data});
 } catch (error) {
  res.status(500).send("Internalserver error")
 }

});



//  Search Result 

app.get('/api/searchresults', async (req, res) => {
  const {key,q} = req.query;
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&key=${key}&q=${q}`;
 try {
  const response = await fetch(url,{
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }
  }) 

  const data = await response.json();
  console.log(data);

  res.json({data});
 } catch (error) {
  res.status(500).send("Internalserver error")
 }

});



// Search for movie details by ID

app.get('/api/moviedetailsbyid', async (req, res) => {
  const {key,id} = req.query;
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${key}&id=${id}`;
 try {
  const response = await fetch(url,{
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }
  }) 

  const data = await response.json();

  res.json({data});
 } catch (error) {
  res.status(500).send("Internalserver error")
 }

});

// Fetching comments by VideoId
app.get('/api/comments', async (req, res) => {
  const {key,id} = req.query;
  const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=${key}&videoId=${id}`;
 try {
  const response = await fetch(url,{
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }
  }) 

  const data = await response.json();

  res.json({data});
 } catch (error) {
  res.status(500).send("Internalserver error")
 }

});


// Related video suggestions
app.get('/api/relatedsuggestions', async (req, res) => {
  const {key,id} = req.query;
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=18&type=video&key=${key}&relatedToVideoId=${id}`;
 try {
  const response = await fetch(url,{
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }
  }) 

  const data = await response.json();
  res.json({data});
 } catch (error) {
  res.status(500).send("Internalserver error")
 }

});


//  Shorts End Point

app.get('/api/fetchshorts', async (req, res) => {
  const {key} = req.query;
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&videoDuration=short&key=${key}&q=trendingshorts`;
 try {
  const response = await fetch(url,{
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }
  }) 

  const data = await response.json();
  console.log(data)
  res.json({data});
 } catch (error) {
  res.status(500).send("Internalserver error")
 }

});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


