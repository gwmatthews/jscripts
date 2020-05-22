// ==UserScript==
// @name         Bunpro: Hide English
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Hides English and adds toggle button to show it.
// @author       JoojiM
// @include      *bunpro.jp/*
// @exclude      *community.bunpro.jp*
// @require      https://greasyfork.org/scripts/5392-waitforkeyelements/code/WaitForKeyElements.js?version=115012
// @require      https://greasyfork.org/scripts/370623-bunpro-helpful-events/code/Bunpro:%20Helpful%20Events.js?version=615700
// @require      https://greasyfork.org/scripts/370219-bunpro-buttons-bar/code/Bunpro:%20Buttons%20Bar.js?version=654288
// @grant        none
// ==/UserScript==

$(document).ready(function(){

$('HTML')[0].addEventListener('study-page', function() {

   $("<br><button class='hidden'>english</button>").insertAfter("div.japanese-example-sentence");
   $('div.english').css('visibility', 'hidden');
   

    $("button.hidden").click(function(){
      if ( $(this).next('.example-sentence-english').css('visibility') == 'hidden' )
        $(this).next('.example-sentence-english').css('visibility', 'visible');
      else
    $(this).next('.example-sentence-english').css('visibility', 'hidden');
    });

});

});


