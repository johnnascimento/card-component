"use strict";console.log("*******",$("#ajaxCaller"));var apiUrl="https://gateway.marvel.com:443/v1/public/",ajaxCallerPath="";function grebMarvelApi(a){$.ajax({method:"GET",url:apiUrl+a,data:{apikey:"402135c8a4195c9e9ee4a6340b3ec624"},beforeSend:function(a){$("body").addClass("ajaxLoading")}.bind(this)}).done(function(a){console.log("Response",a),window.comics=a}.bind(this)).fail(function(a){console.log("error",a),window.comics=a.responseJSON}.bind(this))}$("body").on("click","#ajaxCaller",function(a){ajaxCallerPath=$(a.target).data("path"),console.log("ajax caller",a.target),console.log("ajax caller path",ajaxCallerPath),grebMarvelApi(ajaxCallerPath),console.log("*****",window.comics)}),$("body").on("click",".checkItOutBtn",function(a){ajaxCallerPath=$(a.target).data("path"),console.log("ajax caller",a.target),console.log("ajax caller path",ajaxCallerPath),grebMarvelApi(ajaxCallerPath),console.log("*****",window.comics)}),$(document).ajaxComplete(function(a){console.log("Api return ",window.comics.data),window.comics&&($(window.comics.data.results).each(function(a,e){console.log("elem:   ",e),console.log("idx: ",a);a=$("<div class='cardWrapper'></div>");e.title&&a.append($("<p class='title'>"+e.title+"</p>")),e.thumbnail?a.prepend($("<img src='"+e.thumbnail.path+"."+e.thumbnail.extension+"'/>").addClass("thumbnail")):a.prepend($("<img />").addClass("thumbnail")),e.description&&a.append($("<p></p>").addClass("description").html(e.description)),e.variantDescription&&a.append($("<p></p>").addClass("variantDescription").html(e.variantDescription)),a.append($("<button type='button' class='checkItOutBtn' value='Check it out' data-path='comics/"+e.id+"'>Check it out</button>")),$(".js-marvelCardsWrapper").append(a)}),$("body").removeClass("ajaxLoading"),$("#ajaxCaller").addClass("done"))});