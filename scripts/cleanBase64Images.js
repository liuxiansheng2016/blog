const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../posts/Node.md');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const cleanedData = data.replace(/!\[\]\(data:image\/png;base64,[^\)]*\)/g, '');

    fs.writeFile(filePath, cleanedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }

        console.log('File cleaned successfully.');
    });
});