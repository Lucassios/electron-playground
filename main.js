const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('electron-playground.db');
// db.serialize(function() {
//     db.run("CREATE TABLE lorem (info TEXT)");
//
//     var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//     for (var i = 0; i < 10; i++) {
//         stmt.run("Ipsum " + i);
//     }
//     stmt.finalize();
//
//     db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//         console.log(row.id + ": " + row.info);
//     });
// });

app.on('ready', () => {
    let win = new BrowserWindow({width: 800, height: 600})
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
})