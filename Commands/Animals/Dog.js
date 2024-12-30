const querystring = require('querystring');
const r2          = require('r2');
const DOG_API_URL   = "https://api.thedogapi.com/"
const DOG_API_KEY   = require('../../botconfig.json');

module.exports.run = async (bot, message, args) =>{
var result = await loadImage(message.author.username);
message.channel.send(result[0].url);
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
    aliases: [],
    desc: "This command will return random images of dogs along with their breed, the reason they were bred, and thier temperance. (This command is powered by https://api.thedogapi.com)"
}