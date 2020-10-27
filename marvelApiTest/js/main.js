console.log('*******', $('#ajaxCaller'));

let apiUrl = 'https://gateway.marvel.com:443/v1/public/',
    ajaxCallerPath = '';

function grebMarvelApi(path) {
    $.ajax({
        method: 'GET',
        url: apiUrl + path,
        data: {            
            apikey: '402135c8a4195c9e9ee4a6340b3ec624',
        },
        beforeSend: function(data) {
            $('body').addClass('ajaxLoading');
        }.bind(this)
    })
    .done(function(response) {
        //console.log('Response', response);
        
        window.comics = response;
        
        return;
    }.bind(this))
    .fail(function(error) {
       // console.log('error', error);
        
        window.comics = error.responseJSON;
        
        return;
    }.bind(this));
}

$('body').on('click', '#ajaxCaller',   function(ev) {
    ajaxCallerPath = $(ev.target).data('path');

    //console.log('ajax caller', ev.target);
  //  console.log('ajax caller path', ajaxCallerPath);
    
    grebMarvelApi(ajaxCallerPath);
    
    console.log('*****', window.comics)
});

$('body').on('click', '.checkItOutBtn', function(ev) {
    ajaxCallerPath = $(ev.target).data('path');

   // console.log('ajax caller', ev.target);
  //  console.log('ajax caller path', ajaxCallerPath);
    
    grebMarvelApi(ajaxCallerPath);
    
  //  console.log('*****', window.comics)
});

$(document).ajaxComplete(function(ev) {
   console.log('Api return ', ev);
    
    if(!window.comics) return;
    
    $(window.comics.data.results).each(function(idx, elem) {
     //   console.log('elem:   ', elem);
      //  console.log('idx: ', idx);
        
        let markupDefined = $('<div class=\'cardWrapper\'></div>');
        
        if (elem.title) {
            markupDefined.append($('<p class=\'title\'>' + elem.title + '</p>'));
        }
        
        if(elem.thumbnail) {
            markupDefined.prepend($('<img src=\'' + elem.thumbnail.path + '.' + elem.thumbnail.extension + '\'/>').addClass('thumbnail'));
        } else {
            markupDefined.prepend($('<img />').addClass('thumbnail'));
        }
        
        if(elem.description) {  
            markupDefined.append($('<p></p>').addClass('description').html(elem.description));
        }
        
        if(elem.variantDescription) {
            markupDefined.append($('<p></p>').addClass('variantDescription').html(elem.variantDescription));
        }
        
        markupDefined.append($('<button type=\'button\' class=\'checkItOutBtn\' value=\'Check it out\' data-path=\'comics/' + elem.id + '\'>Check it out</button>'))
        
        $('.js-marvelCardsWrapper').append(markupDefined);
    });
    
    $('body').removeClass('ajaxLoading');
    $('#ajaxCaller').addClass('done');
});