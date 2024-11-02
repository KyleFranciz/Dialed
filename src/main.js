//Main Function JS file that initiates the whole window for the desktop app 

//Create the browser window 
//the browser is a constant so heres the logic
const { app, BrowserWindow } = require('electron'); //make the app, and the var for the BrowserWindow, and make it require 'electron'

//create a function that creates the browser window 
function createWindow() { //everything within the brackets gets assigned 
    //create a constant 'win' short for windows (since the size is going to be the same)
    const win = new BrowserWindow ({
        //Assign it these parameters to help with setting up / sizing the window
        
        width: 1440, //adjusts the wisth of the desktop app
        height: 1024, //adjusts the height of the desktop app 
        webPreferences: {
            nodeIntegration: true, //itegrates the node modules
        },
    });
    win.loadFile('index.html'); //.loadFile is an electron specific thing that helps the file load a particular file
}

app.whenReady().then(createWindow); //whenReady is electron specific, if the app is ready then the parameter 'createWindow' is 'then' created