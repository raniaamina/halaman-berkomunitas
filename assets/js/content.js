// Check ID URL
function getTitleFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('title');
}

var md = new Remarkable({
    html: true, // Enable HTML tags in source
    xhtmlOut: true, // Use '/' to close single tags (<br />)
    breaks: true, // Convert '\n' in paragraphs into <br>
    linkify: true, // Autoconvert URL-like text to links

    // Enable some language-neutral replacement + quotes beautification
    typographer: false
});

function notFound() {
    document.querySelector('.notFound').classList.toggle('d-none')
    document.querySelector('.main-content').classList.toggle('d-none')
}

const title = getTitleFromURL();
function checkTitleParameter() {
    if (!title) {
        // Jika parameter 'title' tidak ada, arahkan pengguna ke halaman '/'
        // window.location.href = '/';
        console.log('404')
        document.querySelector('.notFound').classList.toggle('d-none')
        document.querySelector('.main-content').classList.toggle('d-none')
    } else {
        // Lakukan sesuatu dengan nilai 'title' yang diperoleh dari URL
        fetch(fileURL)
            .then(response => {
                if (!response.ok) {
                    notFound()
                    throw new Error('File tidak tersedia');
                }
                return response.text();
            })
            .then(markdownText => {
                // Lakukan sesuatu dengan isi file markdown yang diperoleh
                const lines = markdownText.split('\n');

                let metadata = {};
                let content = [];
                let isMetadataSection = false;

                for (const line of lines) {
                    if (line.trim() === '---') {
                        isMetadataSection = !isMetadataSection;
                        // console.log('Switching section:', isMetadataSection ? 'Metadata' : 'Content');
                        continue;
                    }

                    if (isMetadataSection) {
                        // console.log('Metadata line:', line);
                        const [key, ...value] = line.split(':').map(item => item.trim());
                        metadata[key] = value.join(':').trim();
                    } else {
                        // console.log('Content line:', line);
                        content.push(line);
                    }
                }

                // Menampilkan hasil parsing
                // console.log('Title:', metadata.title);
                // console.log('Author:', metadata.author);
                // console.log('Link:', metadata.link);
                // console.log('Konten:', content.join('\n'));

                document.getElementById('content-title').innerHTML = metadata.title.slice(1, -1)
                document.getElementById('content-author').innerHTML = metadata.author.slice(1, -1)
                document.getElementById('content-author').href = metadata.link.slice(1, -1)
                document.querySelector('.main-content').innerHTML = md.render(content.join('\n'))

            })
            .catch(error => {
                // Tangani kesalahan
                console.error(error.message);
            });


    }
}


// Check host url to set the fetch URL
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    console.log("Halaman dimuat di localhost.");
    fileURL = "http://127.0.0.1:8002/" + title + ".md"
} else {
    console.log("Halaman tidak dimuat di localhost.");
    fileURL = "/contents/" + title + ".md"
}


checkTitleParameter();
