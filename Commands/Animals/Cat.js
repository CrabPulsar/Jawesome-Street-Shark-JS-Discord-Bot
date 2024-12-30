const querystring = require('querystring');
const r2          = require('r2');
const CAT_API_URL   = "https://api.thecatapi.com/"
const CAT_API_KEY   = require('../../botconfig.json');

module.exports.run = async (bot, message, args) =>{
var result = await loadImage(message.author.username);
message.channel.send(result[0].url);
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
    aliases: [],
    desc: "This command will return random images of cats along with their breed and temperance. (This command is powered by https://api.thecatapi.com)"
}