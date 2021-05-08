var randomColor = function(){
    const colors = require('../colors.json');
    names = []
    for (item in colors){
        names.push(item)
    }
    ran = Math.floor(Math.random() * (names.length))
    return colors[names[ran]]
}
module.exports = {
    randomColor: randomColor
}