onmessage = function(event) {
	self.importScripts('https://unpkg.com/lunr/lunr.js','/assets/js/lunr.ru.js','/assets/js/lunr.stemmer.support.js');
	
	var documents = event.data;

	var index = lunr(function () {
	  this.ref('id');
	  this.field('url');
	  this.field('title');
	  this.field('content');
	  this.metadataWhitelist = ['position'];
          this.pipeline.remove(lunr.stopWordFilter);
          this.use(lunr.ru);
     

	  documents.forEach(function(doc) {
	    this.add(doc);
	  }, this);
	});

	postMessage(JSON.stringify(index));
}
