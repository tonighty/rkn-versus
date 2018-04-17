import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();
$(document).ready(
	function(){
		$('.layout-item').eq(randomInteger(0, 10)).addClass('active');
	}
)

$('.layout-item').hover(
	function() {
		if ($(this).hasClass('active')) {
			var $el = $('.layout-item'),
				limit = 3,
				$elLength = $el.length,
				randEl;
			$el.removeClass('active');
			for(var i = 0; i < limit;) {
				randEl = $el.eq(randomInteger(0, $elLength));
				if(!randEl.hasClass('active')){
					randEl.addClass('active');
					i++;
				}
			}
			$(this).removeClass('active');
		}
	},
	function(){}
)
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}