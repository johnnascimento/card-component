class MarvelApiFetcher {
  constructor(responseApi) {
    this.responseApi = responseApi;
  }
  
  apiComics(entries = {}) {
   this.entries = entries;
    
    $.ajax({
      method: 'GET',
        url: 'https://gateway.marvel.com:443/v1/public/comics?apikey=402135c8a4195c9e9ee4a6340b3ec624',
        beforeSend: function(data) {
          $('body').addClass('ajaxLoading');
        }.bind(this)
      })
      .done(function(response) {
        console.log('Response', response);
        
        window.comics = response;
        
        return this.responseApi;
      }.bind(this))
      .fail(function(error) {
       console.log('error', error);
       
       window.comics = error;
    
        return this.responseApi;
      }.bind(this));
  }
  
  getComics() {
    return this.apiComics();
  }
}