import React, {useState, useEffect} from 'react';
import { Container, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

function Download(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  let id = props.match.params.id;
  
  useEffect(() => {
    fetch("https://music-zeta.vercel.app/song?id="+id)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="tbody">Loading...</div>;
  } else {
    document.title = `Download Free ${items.song_name} by ${items.song_artist}`
    return (
    <div className="tbody">
     <Container>
    <div className="download_info">
     <Typography style={{marginBottom: '18px'}} variant="h3" component="h3"> {items.song_name}
      </Typography>
      <img src={items.song_image} alt="" />
       <div className="download_singer">
        <span> <strong> Singer :</strong> {items.song_artist} </span><br/>
        <span> <strong> Album :</strong> {items.album_name} </span><br/>
        <span> <strong> Label :</strong> {items.song_label} </span><br/>
        <span> <strong> Release :</strong> {items.song_release_date} </span>
       </div>
    </div>
     <Button 
       style={{width: '100%',
             background: '#264653',
             marginBottom: '15px',
             marginTop: '15px',
             fontSize: '20px'
            }} variant="contained" color="primary">
       <a className="download_page" href={items.low_quality}> <GetAppRoundedIcon style={{
                    verticalAlign: "middle",
                     }} /> Download 96Kbps </a>
      </Button>
     <Button 
       style={{width: '100%',
             background: '#264653',
             marginBottom: '15px',
             fontSize: '20px'
            }} variant="contained" color="primary">
       <a className="download_page" href={items.medium_quality}> <GetAppRoundedIcon style={{
                    verticalAlign: "middle",
                     }} /> Download 160Kbps </a>
      </Button>
     <Button 
       style={{width: '100%',
             background: '#264653',
             marginBottom: '8px',
             fontSize: '20px'
            }} variant="contained" color="primary">
       <a className="download_page" href={items.high_quality}> <GetAppRoundedIcon style={{
                    verticalAlign: "middle",
                     }} /> Download 320Kbps </a>
      </Button>
     </Container>
    </div>
    );
  }
}

export default Download;