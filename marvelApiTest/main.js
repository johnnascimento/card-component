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

  if(!window.apiReturn) return;
  
  $(window.apiReturn.data.results).each(function(idx, elem) {
    console.log('elem: ', elem);
    console.log('idx: ', idx);
    
    let markupDefined = '<div class=\"cardWrapper\">';
    
    if (elem.title) {
      markupDefined = markupDefined + '<p class=\"title\">' + elem.title + '</p>';
    }
    
    if(elem.thumbnail) {
      markupDefined = markupDefined + '<img class=\"thumbnail\" src=\"' + elem.thumbnail.path + '.' + elem.thumbnail.extension + '\" />';
    } else {
      markupDefined = markupDefined + '<img src=\"\" />';
    }
    
    if(elem.description) {
      markupDefined = markupDefined + '<p class=\"description\">' + elem.description + '</p>';
    }
    
    if(elem.variantDescription) {
      markupDefined = markupDefined + '<p class=\"variantDescription\">' + elem.variantDescription + '</p>';
    }
    
    markupDefined = markupDefined + '</div>';
    
    $('.js-marvelCardsBody').html($('.js-marvelCardsBody').html() + markupDefined);
  });
  
  $('body').removeClass('ajaxLoading');
  $('#ajaxCaller').addClass('done');
});