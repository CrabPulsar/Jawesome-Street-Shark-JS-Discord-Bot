const querystring = require('querystring');
const r2          = require('r2');
const CAT_API_URL   = "https://api.thecatapi.com/"
const CAT_API_KEY   = "cat api key";

module.exports.run = async (bot, message, args) =>{
var images = await loadImage(message.author.username);
var image = images[0];
var breed = image.breeds[0];
message.channel.send("***"+breed.name+"***\r*"+breed.temperament+"*", {files: [ image.url ] });
async function loadImage(sub_id)
{
  var headers = {
    'X-API-KEY': CAT_API_KEY,
}
var query_params = {
  'has_breeds':true,
  'mime_types':'jpg,png',
  'size':'small',
  'sub_id': sub_id,
  'limit' : 1
}

let queryString = querystring.stringify(query_params);

try {

  let _url = CAT_API_URL + `v1/images/search?${queryString}`;

  var response = await r2.get(_url , {headers} ).json
} catch (e) {
}
return response;

}}
module.exports.help = {
    name: "cat",
    aliases: []
}