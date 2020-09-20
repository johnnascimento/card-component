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
    
    let markupDefined = '<br /><img class=\"thumbnail\" src=\"';
    console.log('thumb', markupDefined);
    
    if(elem.thumbnail) {
      console.log('elem.thunb **********',  elem.thumbnail.path + '.' + elem.thumbnail.extension);
      
      markupDefined = markupDefined + elem.thumbnail.path + '.' + elem.thumbnail.extension + '\" />';
    } else {
      markupDefined = markupDefined + '\" />';
    }
    
    if(elem.description) {
      markupDefined = markupDefined + '<p class=\"description\">' + elem.description + '</p>';
    }
    
    if(elem.title) {
      markupDefined = markupDefined + '<p class=\"title\">' + elem.title + '</p';
    }
    
    if(elem.variantDescription) {
      markupDefined = markupDefined + '<p class=\"variantDescription\">' + elem.variantDescription + '</p>';
    }
    
    $('.js-marvelCardsBody').html($('.js-marvelCardsBody').html() + markupDefined);
  });
});