var fs = require('fs');
console.log("Incrementing build version...");
fs.readFile('src/buildVersion.json',function(err,content){
    if(err) throw err;
    var buildVersion = JSON.parse(content);
    buildVersion.build = buildVersion.build + 1;
    fs.writeFile('src/buildVersion.json',JSON.stringify(buildVersion),function(err){
        if(err) throw err;
        console.log("Updated build version: V" + buildVersion.build);
        console.log("You need to copy the buildVersion.json file into the build folder.");

    })
});