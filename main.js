import 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
import { CharacterCreator as buildChar } from './characterCreator.js';
import { CharStatus as Status } from './charStatus.js';
import { MarvelApiFetcher as MarvelApi } from './marvelApiFetcher.js';


let Ventus = {},
MarvelApiClass = new MarvelApi();
  
  console.log('*******', $('#ajaxCaller'));

// Marvel api field filling
// document.querySelector('.js-marvelCards').innerHTML;

Ventus.info = new buildChar('john', 16, 'lua');
Ventus.status = new Status();

//console.log('Hello World!', Ventus.info, Ventus.status);
Ventus.info.showInfo();

Ventus.info.setCharacterName('Lenon');
Ventus.info.setCharacterAge(23);
Ventus.info.setCharacterClass('Mage');

document.body.querySelector('#ajaxCaller').addEventListener('click', function(ev) {
  console.log('ajax caller', ev.target);
  
  MarvelApiClass.getApiValue();
});

document.body.querySelectorAll('input[type=text]').forEach(function(elem, idx) {
  //console.log('elem', elem);
  //console.log('idx', idx);
  
  elem.addEventListener('keyup', function(ev) {
    let boundElem = '.' + ev.target.getAttribute('dat  a-binding-link') + ' span',
      evTargetInnerText = ev.target.value;
  
    //console.log('char', ev.keyCode);
   // console.log('which', ev.target);
  
    document.body.querySelector(boundElem).innerHTML = evTargetInnerText;
  }.bind(this));
});

document.body.querySelectorAll('input[type=number]').forEach(function(elem, idx) {
  //console.log('elem', elem);
 // console.log('idx', idx);
  
  elem.addEventListener('keyup', function(ev) {
    let boundElem = '.' + ev.target.getAttribute('data-binding-link') + ' span',
      evTargetInnerText = ev.target.value;
    
    //console.log('char', ev.keyCode);
   // console.log('which', ev.target);
    
    document.body.querySelector(boundElem).innerHTML = evTargetInnerText;
  }.bind(this));
});

document.body.querySelectorAll('input[type=date]').forEach(function(elem, idx) {
  //console.log('elem', elem);
  //console.log('idx', idx);
  
  elem.addEventListener('change', function(ev) {
    let boundElem = '.' + ev.target.getAttribute('data-binding-link') + ' span',
      evTargetInnerText = ev.target.value;
    
    //console.log('Date bound elem', boundElem);
   // console.log('inner', evTargetInnerText);
    
    document.body.querySelector(boundElem).innerHTML = evTargetInnerText;
  }.bind(this));
});

window.addEventListener('scroll', function(ev) {
  // console.log('ev', ev);
  
});

function argTest() {
  let argsLength = arguments.length,
      i = 0;
      
      //console.log('argsLength', argsLength);
  
  if(argsLength > 0) {
    for(i = 0; i < argsLength; i++) {
     // console.log('arg', arguments[i]);
    }
  }
}

argTest('bola', 2, ['string', 'obj', 56, 12, { bola: 'de futebol'}]);



function multiply() {
  var length = arguments.length;
  var total = 1;
  if (length > 0) {
    for (var i = 0; i < length; i += 1) {
      total = total * arguments[i];
    }
    return; // console.log(total);
  }
  //console.log(0);
}

var multiply_once = once(multiply);
multiply_once(3, 4); // 12
// multiply_once(3, 4); //Error: Cannot read property 'apply' of null

function once(func) {
  //console.log('argument: ', func);
 // console.log('once this', this);
  
  return function() {
  //  console.log('return func', this);
    
    var f = func;
    
   // console.log('return func F', f);
    
    func = null;
    
    //console.log('return func F as null', f);
    //console.log('return func', f.apply);
    
    return f.apply(this, arguments);
  };
}