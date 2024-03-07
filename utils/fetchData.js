const fs = require('fs');

export function stringify (filePath) {
    try {
        const rawData = fs.readFileSync(filePath);
        const jsonData = JSON.parse(rawData);
    } catch (error) {
        console.error('Error reading JSON file:', error);
    }
    return jsonData;
}