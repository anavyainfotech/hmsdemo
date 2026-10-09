const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Remove all shadow classes
      content = content.replace(/\bshadow-sm\b/g, '');
      content = content.replace(/\bshadow-md\b/g, '');
      content = content.replace(/\bshadow-lg\b/g, '');
      content = content.replace(/\bshadow-xl\b/g, '');
      content = content.replace(/\bshadow-2xl\b/g, '');
      content = content.replace(/\bhover:shadow-md\b/g, '');
      content = content.replace(/\bhover:shadow-lg\b/g, '');
      content = content.replace(/\bshadow-\[.*?\]\b/g, '');

      // Replace rounded classes with rounded-md
      content = content.replace(/\brounded-2xl\b/g, 'rounded-md');
      content = content.replace(/\brounded-xl\b/g, 'rounded-md');
      content = content.replace(/\brounded-lg\b/g, 'rounded-md');
      // I am leaving rounded-full alone because it's used for avatars and badges

      // Fix multiple spaces
      content = content.replace(/  +/g, ' ');
      // Fix trailing spaces in class strings
      content = content.replace(/ "/g, '"');
      content = content.replace(/ '/g, "'");

      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

processDir(path.join(__dirname, 'src/app/(dashboard)'));
console.log('Done!');
