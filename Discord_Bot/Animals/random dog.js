const querystring = require('querystring');
const r2          = require('r2');
const DOG_API_URL   = "https://api.thedogapi.com/"
const DOG_API_KEY   = "dog api key";

module.exports.run = async (bot, message, args) =>{
var images = await loadImage(message.author.username);
var image = images[0];
var breed = image.breeds[0];
message.channel.send("***Breed:   "+breed.name+"***\r*Temperment:   "+breed.temperament+"*\r*Bred For:   "+breed.bred_for+"*", {files: [ image.url ] });
async function loadImage(sub_id)
{
  var headers = {
    'X-API-KEY': DOG_API_KEY,
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

  let _url = DOG_API_URL + `v1/images/search?${queryString}`;

  var response = await r2.get(_url , {headers} ).json
} catch (e) {
}
return response;

}}
module.exports.help = {
    name: "dog",
    aliases: []
}