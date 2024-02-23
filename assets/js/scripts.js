// Menu
// Overlay Menu
function openMenu() {
	console.log('open menu')
	document.querySelector('.overlay').classList.add('open')
}

function closeMenu() {
	console.log('close')
	document.querySelector('.overlay', '.overlay-menu').classList.remove('open')
}

var rowContainerDiv = document.getElementById("rowContainer")

if (rowContainerDiv != null ) {
	var msnry = new Masonry('#rowContainer', {
		percentPosition: true
	});
}

// end of menu

function runMasonsry(target) {
    var msnry = new Masonry(target, {
        percentPosition: true,
        gutter: 0
    })
}


if (document.getElementById('topicWrapper')){
	fetch('assets/js/topics.json')
  .then(response => response.json())
  .then(data => {
    console.log('Data respons:', data);
    
	topicWrapper = document.getElementById('topicWrapper')
	topics = ""
	data.forEach(item => {
		topics += `
		<div class="col-6 col-md-6 col-lg-4 p-3 topics">
			<a class="text-decoration-none" href="/topic?title=${item.mdFile}">
		    <div class="border border-light p-3 topic-card" style="min-height: 100px;">
		            <h2 class="text-center text-white topic-title">${item.title}</h2>
					<div class="text-center"><span class="topic-author">- ${item.author} -</span></div>
					</div>
			</a>
		</div>
		`
    });
	topicWrapper.innerHTML = topics
	runMasonsry('#topicWrapper')
  })
  .catch(error => console.error('Error:', error));
}




if (document.getElementById('topicWrapper')) {
	runMasonsry('#topicWrapper')
}