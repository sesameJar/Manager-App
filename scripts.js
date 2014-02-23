$(function () {
	var player = $('audio');
	var songs = $('div.songlist > a');
	var nextAudio = $('button#next');
	var cnt=0;

	nextAudio.click(function(){
		cnt++;
		alert(songs.eq(cnt).attr('href'));
		player.attr('src',songs.eq(cnt).attr('href'));
	})

})