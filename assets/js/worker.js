onmessage = function(event) {
	self.importScripts('https://unpkg.com/lunr/lunr.js');
	importScripts('/assets/js/lunr.stemmer.support.js');
	importScripts('/assets/js/lunr.ru.js');
	importScripts('/assets/js/lunr.multi.js');
	//page.layout search 
       // <script src="{{- "/assets/js/lunr.stemmer.support.js" | relative_url -}}" crossorigin="anonymous"></script>
//<script src="{{- "/assets/js/lunr.ru.js" | relative_url -}}" crossorigin="anonymous"></script>
	//<script src="{{- "/assets/js/lunr.multi.js" | relative_url -}}" crossorigin="anonymous"></script>
	
	var documents = event.data;

	var index = lunr(function () {
	 // this.use(lunr.ru);
	  this.use(lunr.multiLanguage('en', 'ru'));
	  this.ref('id');
	  this.field('url');
	  this.field('title');
	  this.field('content');
	  this.metadataWhitelist = ['position'];       
          
     

	  documents.forEach(function(doc) {
	    this.add(doc);
	  }, this);
	});

	postMessage(JSON.stringify(index));
}
