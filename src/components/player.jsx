import React, {useState, useEffect} from 'react';
import { Container } from '@material-ui/core';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import MediaSession from '@mebtte/react-media-session';
import {Helmet} from 'react-helmet';
import Back from './back';

 function Player (props) {
   const [error, setError] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);
  const [song, setSong] = useState([]);
  // Song ID
  let id = props.match.params.id;
  
  useEffect(() => {
    fetch("https://music-zeta.vercel.app/song?id="+id)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setSong(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  },[])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>
    <Container className="tbody">
    <Helmet>
      <title> Loading ....</title>
    </Helmet>
    Loading...
    </Container>
    </div>;
  } else {
    document.title = `${song.song_name} by ${song.song_artist}`
    return (
    <Container className="tbody">
      <div className="player">
        <div className="play_title">
        <h1>
         <PlayArrowRoundedIcon style={{
                    color: "#fff",
                    verticalAlign: "middle",
                     }} /> 
                     {song.song_name} </h1>
         </div>
        <hr/>
          <img className="player_img" src={song.song_image} alt={song.song_name} />
          <audio src={song.song_play} id="audiocontrols" className="play_song" controls />
          <MediaSession
             title={song.song_name}
             artist={song.song_artist}
             album={song.album_name}
             artwork={[
                       {
                      src: `${song.song_image}`,
                      sizes: '500x500',
                      type: 'image/jpeg',
                       },
                    ]}>
          </MediaSession>
        <Container>
         <div className="player_info">
            <h3> Singer : <span className="artist">{song.song_artist}</span> </h3>
            <h3> Album : <span className="album_name">{song.album_name}</span> </h3>
            <h3> Release : <span className="song_release_date">{song.song_release_date}</span> </h3>
            <h3> Copyright : <span className="player_song_copyright">{song.copyright}</span> </h3>
         </div>
        </Container>
        <Back />
      </div>
    </Container>
    );
  }
}
export default Player;