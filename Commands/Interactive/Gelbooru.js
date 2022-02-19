const key = require('../../botconfig.json');
module.exports.run = async (bot, message, args) => {
    var API_KEY_HERE = key.gelbooruAPI
    var USER_ID_HERE = key.gelbooruUID
    var x = message.content.split(" ")
    x.shift()
    limit = x[x.length - 1]
    if (limit > 50){
        return message.reply("Too many!")
    }
    query = x.toString().replace(/,/g, "+").trim()
    function is_number(str) {return /[0-9]/.test(str)}
    if (is_number(limit) == false){
        limit = 1
    }else {query = query.slice(0, -2).trim()}
    let _url = `https://gelbooru.com/index.php?page=dapi&s=post&q=index&tags=${query}+sort:random&limit=${limit}&api_key=${API_KEY_HERE}&user_id=${USER_ID_HERE}&json=1`;
    async function getURL(){
        try {
            const response = await fetch(_url);
            data = await response.json();
            counter = 0
            while (counter < limit){
                message.channel.send(data.post[counter].file_url)
                counter ++
            }
        }
        catch(e){
            return message.channel.send("There are no results for the query: " + query.replace(/\+/g, " "))
        }
    }
    getURL();
    message.delete();
    }
module.exports.help = {
        name: "gelbooru",
        aliases: ["g"],
        desc: "Searches Geelbooru.com with your query. If you search does not work then try separating your tags with underscores. Ex: jssg cat_girl 5"
    }