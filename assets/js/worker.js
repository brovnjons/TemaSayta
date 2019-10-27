onmessage = function(event) {
	self.importScripts('https://unpkg.com/lunr/lunr.js');
	importScripts('/assets/js/lunr.stemmer.support.js');
	importScripts('/assets/js/lunr.ru.js');
        
	
	var documents = event.data;

	var index = lunr(function () {
	  this.ref('id');
	  this.field('url');
	  this.field('title');
	  this.field('content');
	  this.metadataWhitelist = ['position'];       
          this.use(lunr.ru);
     

	  documents.forEach(function(doc) {
	    this.add(doc);
	  }, this);
	});

	postMessage(JSON.stringify(index));
}
