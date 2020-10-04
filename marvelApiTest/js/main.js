console.log('*******', $('#ajaxCaller'));

$('body').on('click', '#ajaxCaller', function(ev) {
    console.log('ajax caller', ev.target);
    
    $.ajax({
        method: 'GET',
        url: 'https://gateway.marvel.com:443/v1/public/comics',
        data: {            
            apikey: '402135c8a4195c9e9ee4a6340b3ec624',
        },
        beforeSend: function(data) {
            $('body').addClass('ajaxLoading');
        }.bind(this)
    })
    .done(function(response) {
        console.log('Response', response);
        
        window.comics = response;
        
        return;
    }.bind(this))
    .fail(function(error) {
        console.log('error', error);
        
        window.comics = error.responseJSON;
        
        return;
    }.bind(this));
    
    console.log('*****', window.comics)
})

$(document).ajaxComplete(function(ev) {
    console.log('Api return ', window.comics.data);
    
    if(!window.comics) return;
    
    $(window.comics.data.results).each(function(idx, elem) {
        console.log('elem:   ', elem);
        console.log('idx: ', idx);
        
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
        
        markupDefined.append($('<button type=\'button\''))
        
        $('.js-marvelCardsWrapper').append(markupDefined);
    });
    
    $('body').removeClass('ajaxLoading');
    $('#ajaxCaller').addClass('done');
});

/*
$(document).ready(function(){
    console.log('ready')
    $('body').prepend($('<img />').attr('src', "https://upload.wikimedia.org/wikipedia/pt/5/59/Captain_Marvel_%282018%29.jpg"));
});
*/