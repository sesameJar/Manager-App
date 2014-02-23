$(function () {
	var player = $('audio'),
		songs = $('div.songlist > a'),
		nextAudio = $('button#next'),
		preAudio = $('button#pre'),
		stopAudio = $('button#stop'),
		playAudio = $('button#play'),
		cnt=0;

	nextAudio.click(function(){
		if(cnt==songs.length)
			cnt=0;
		else cnt++;
		player.attr('src',songs.eq(cnt).attr('href'));
	});
	stopAudio.click(function(){
		player.attr('src','');
	});
	playAudio.click(function(){
		player.attr('src',songs.eq(cnt).attr('href'));
	});
	preAudio.click(function(){
		if(cnt==0)
			cnt=songs.length;
		else cnt--;

		player.attr('src',songs.eq(cnt).attr('href'));
	});
})