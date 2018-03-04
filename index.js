

var myPythonScriptPath = 'D:\\hashem\\My_Projects\\StarterHacks\\python\\main.py';

// Use python shell
var PythonShell = require('python-shell');
var pyshell = new PythonShell(myPythonScriptPath);
pyshell.end(function (err) {
    if (err){
        throw err;
    };
});

