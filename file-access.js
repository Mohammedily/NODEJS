const fs = require("fs");
fs.readFile("./cool.txt", "utf-8",function(err, content) {
    if(err){
        console.log(err)
    }
     console.log(content);
});

const quote = "no beauty ";

// fs.writeFile("./awesome.txt",quote, function(err) {
//   console.log("Completed writing!!!");
// });

// const quote2 = "\nlive love dd";

// fs.appendFile("./awesome.txt", quote2, function(err){
//     console.log("Added to the file!!!");
// });

// fs.unlink("./backups/text1.js",  function(err){
//     console.log("Removed the file!!!");
// });

const htmlData = "Good morning!!!";

 for (let i = 1; i <= 10; i++) {
     fs.writeFile(`./backups/text-${i}.html`, htmlData , function(err) {
   console.log("Completed writing!!!", i);
 });

}

// fs.readdir("./backups",function (err, files){
//     console.log(files);
// });

//   for (let i = 1; i <= 10; i++) {
//    fs.unlink(`./backups/text-${i}.html`,  function(err) {
//     console.log("Removed the file!!!", i);
// });
// }

// function removeFile(file) {
//     fs.unlink(`./backups/${file}`, function (err) {
//         console.log("Removed the file!!!", file);
//     });
// }


fs.readdir("./backups",function (err, files){
    console.log(files);

  files.forEach((file) => removeFile(file))

    
});

setTimeout(() =>{
    console.log(4);
}, 1000);