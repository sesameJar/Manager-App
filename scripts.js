$(function () {
	var player = $('audio'),
		songs = $('div.songlist a'),
		nextAudio = $('button#next'),
		preAudio = $('button#pre'),
		stopAudio = $('button#stop'),
		playAudio = $('button#play'),
		currentSong=0;

	(play =function(n){
		if(n>songs.length-1) n=0;
		if(n<0) n=songs.length-1;
		player.attr('src',songs.eq(n).attr('href'));
		currentSong=n;
	})(0);

	nextAudio.click(function(){
		play(currentSong+1);
	});
	stopAudio.click(function(){
		player.attr('src','');
	});
	playAudio.click(function(){
		play(currentSong);
	});
	preAudio.click(function(){
		play(currentSong-1);
	});
})