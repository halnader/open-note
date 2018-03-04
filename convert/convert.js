var unoconv = require('unoconv');

unoconv.convert('document.docx', 'pdf', function (err, result) {
	// result is returned as a Buffer
	fs.writeFile('converted.pdf', result);
});
