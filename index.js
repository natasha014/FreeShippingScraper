const rp = require('request-promise');
const cheerio = require('cheerio');
const request= require('request');


request('https://www.forever21.com/us/shop', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var check = cheerio.load(html);
    var stringToCheck= check.text().toLowerCase();
    if(checkShipping(stringToCheck))
    {
    	console.log("FREE SHIPPING!");
    }
    else 
    {
    	console.log("No free shipping :(")
    }





}});


function checkShipping(stringToCheck)
{
	if(stringToCheck.includes("free shipping on all orders"))
	{
		return true;
	}
	else 
	{
		return false;
	}
}


