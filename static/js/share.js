jQuery( document ).ready(function( $ ) {
	var u = window.location.toString();
	var s = "<a href=\"#\" onClick=\"javascript:void(window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(document.title)) .concat(' ') .concat(encodeURIComponent('"+u+"'))));return false;\" title=\"推薦本文到Twitter推特去！\"><img border=\"0\" src=\"images/is009_01.png\"></a> ";
	s = s + "<a href=\"#\" onClick=\"javascript: void(window.open('http://www.plurk.com/?qualifier=shares&status=' .concat(encodeURIComponent('"+u+"')) .concat(' ') .concat('&#40;') .concat(encodeURIComponent(document.title)) .concat('&#41;')));return false;\" title=\"推薦本文到Plurk噗浪去！\"><img border=\"0\" src=\"images/is002_01.png\"></a> ";
	s = s + "<a href=\"#\" onClick=\"javascript: void(window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent('"+u+"')) ));return false;\" title=\"推薦本文到Facebook去！\"><img border=\"0\" src=\"images/is003_01.png\"></a> ";
	s = s+ "<a href=\"https://plus.google.com/share?url="+u+"\" onclick=\"javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;\"><img src=\"images/is010_01.png\"></a>";
	$("span#share_icon").html(s);
}); 

