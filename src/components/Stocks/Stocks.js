import axios from "axios";

function Stocks(){
var options = {
  method: 'GET',
  url: 'https://cnbc.p.rapidapi.com/get-meta-data',
  headers: {
    'x-rapidapi-host': 'cnbc.p.rapidapi.com',
    'x-rapidapi-key': 'aff3610a80mshefcb4ac924df605p1eaa91jsnf70a351577e1'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}
export default Stocks