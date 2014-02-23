<!DOCTYPE html>
<html lang="en-US">
<head>
	<meta charset="utf-8" />
	<title>Coffee Shop Manager App</title>
	<link rel="stylesheet" href="reset.css" />
	<link rel="stylesheet" href="style.css" />
	<script type="text/javascript" src="zepto.js"></script>
	<script type="text/javascript" src="scripts.js"></script>
</head>
<body>
	<div class="container">
		<div class="player">
			<audio src="" autoplay="autoplay">
				Your browser does not support the audio element.
			</audio>
			<div class="songlist">
				<?php 

				$songs_path = "./music" ;
				$songs      = scandir($songs_path);

				foreach( $songs as $song ) {

					$song_type = strtolower( end( explode( '.' , $song ) ) );

					if( $song_type == 'mp3' ) {

						echo "<a href='$songs_path/$song'></a>";
					}
				}
			?>
			</div>
			<button id="next"></button>
			<button id="play"></button>
			<button id="stop"></button>
			<button id="pre"></button>
		</div>
	</div>
</body>
</html>