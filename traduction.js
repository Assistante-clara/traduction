exports.action = function(data){

try{
var reg="/"+data.traduction+"(.+)/i" ; var rgxp = eval(reg) ; var temp = JarvisIA.reco.match(rgxp) ; console.log(temp)
var phrase = temp[1].trim() ; console.log("on envoie : ",phrase)


const translatte = require('./translatte');

translatte(phrase, {to: data.language}).then(res => {
    console.log(res.text);JarvisIASpeech("voici ta réponse : "+res.text)
}).catch(err => {
    console.error(err);JarvisIASpeech("désolé je n'ai pas trouvée de traduction")
});
}catch(err){console.log(err)}
return
}