const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

// Try to find the file in dist/assets or public/assets
const distPath = path.join(__dirname, 'dist/assets/Mazin_Saleh_SWE_Resume.pdf');
const publicPath = path.join(__dirname, 'public/assets/Mazin_Saleh_SWE_Resume.pdf');

let filePath = distPath;
if (!fs.existsSync(filePath)) {
    filePath = publicPath;
}

if (!fs.existsSync(filePath)) {
    console.error('File not found:', filePath);
    process.exit(1);
}

const dataBuffer = fs.readFileSync(filePath);

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(err => {
    console.error('Error parsing PDF:', err);
});
