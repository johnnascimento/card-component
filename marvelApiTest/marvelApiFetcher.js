export class MarvelApiFetcher {
  constructor(responseApi) {
    this.responseApi = responseApi;
  }
  
  apiDataAjax(entries = {}) {
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
        console.log('Response Code', response.code);
        console.log('Response data', response.data);
        
        this.responseApi = response;
        
        console.log('THIS.RESP', this.responseApi);
       
       window.apiReturn = this.responseApi;
       
        $('body').removeClass('ajaxLoading');
        
        return this.responseApi;
      }.bind(this))
      .fail(function(error) {
       this.responseApi = error;
       console.log('error', this.responseApi);
       
       window.apiReturn = error;
    
        return this.responseApi;
      }.bind(this));
  }
  
  getApiValue() {
    return this.apiDataAjax();
  }
}