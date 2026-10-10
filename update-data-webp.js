const fs = require('fs');

const files = [
  'src/data/galleryData.ts',
  'src/data/serviceDetailsConfig.ts',
  'src/data/services.ts'
];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let count = 0;
  const updated = content.replace(/\/assets\/([a-zA-Z0-9_\-\.\/]+)\.(png|jpe?g)/gi, (m, p1, ext) => {
    const webpPath = '/assets/' + p1 + '.webp';
    if (fs.existsSync('./public' + webpPath)) {
      count++;
      return webpPath;
    }
    return m;
  });
  console.log(file, 'converted:', count, 'references to .webp');
  fs.writeFileSync(file, updated, 'utf8');
});
