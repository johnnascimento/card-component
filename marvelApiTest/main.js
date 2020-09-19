import 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
import { MarvelApiFetcher as MarvelApi } from './marvelApiFetcher.js';


let MarvelApiClass = new MarvelApi(),
    apiReturn = '';

console.log('*******', $('#ajaxCaller'));

$('body').on('click', '#ajaxCaller', function(ev) {
  console.log('ajax caller', ev.target);
  
  MarvelApiClass.getApiValue();
  
  console.log('*****', window.apiReturn)
})

$(document).ajaxComplete(function(ev) {
  
  console.log('Api return ', window.apiReturn.data);
  
  console.log('Api return ', window.apiReturn.data.limit);
   
  console.log('Api return ', window.apiReturn.data.count);
  
  console.log('Api return ', window.apiReturn.data.total);
   
  console.log('Api return ', window.apiReturn.data.offset);
    
  console.log('Api return ', window.apiReturn.data.results);

  if(!window.apiReturn) return;
  
  $(window.apiReturn.data.results).each(function(idx, elem) {
    console.log('elem: ', elem);
    console.log('idx: ', idx);
    
    let markupDefined = '<br /><img src=\"';
    console.log('thumb', markupDefined);
    
    if(elem.thumbnail) {
      markupDefined = markupDefined + elem.thumbnail + '\" />';
    } else {
      markupDefined = markupDefined + '\" />';
    }
    
    if(elem.description) {
      markupDefined = markupDefined + '<p>' + elem.description + '</p>';
    }
    
    $('.js-marvelCardsBody').html($('.js-marvelCardsBody').html() + markupDefined);
  });
});