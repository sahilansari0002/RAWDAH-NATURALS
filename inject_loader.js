const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\sahil ali\\.gemini\\antigravity\\site\\public\\rawdah-naturals';

const loaderHtml = `<body>
<!-- PAGE LOADER -->
<div class="page-loader" id="pageLoader">
  <div class="loader-mortar">
    <div class="loader-leaf leaf-1">🌿</div>
    <div class="loader-leaf leaf-2">🍃</div>
    <div class="loader-leaf leaf-3">✨</div>
    <div class="mortar-pestle"></div>
    <div class="mortar-bowl"></div>
  </div>
  <div class="loader-text">RAWDAH NATURALS</div>
  <div class="loader-progress"><div class="loader-progress-bar"></div></div>
</div>`;

const loaderJs = `<script>
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('pageLoader');
    if(loader) loader.classList.add('hidden');
  }, 1200);
});
</script>
</body>`;

fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Add loader after body open
        if (!content.includes('id="pageLoader"')) {
            content = content.replace('<body>', loaderHtml);
            content = content.replace('</body>', loaderJs);
            fs.writeFileSync(filePath, content);
            console.log(`Updated ${file}`);
        } else {
            console.log(`Skipped ${file} - loader already exists`);
        }
    }
});
