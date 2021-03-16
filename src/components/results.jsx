import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import config from '../config/api';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';



export default class SearchScreen extends React.Component {
    state = {
      isLoaded: false,
        songs: []
    }

    componentDidMount() {
        axios.get(`${config.API_URL}/search?song=${new URLSearchParams(this.props.location.search).get('query').replace(/ /gi,"+")}`)
            .then(res => {
                var songs = res.data;
                document.title = `${new URLSearchParams(this.props.location.search).get('query')} - Search Result`
                this.setState({
                    isLoaded: true,
                       songs });
            })
    }
    
    render() {
      const { isLoaded } = this.state;
        if (!isLoaded) {
            return (
                <div className="tbody">
                <Container>
                Loading...
                </Container>
                </div>
            )
        } else {
            return (
            <Container>
                <div className="tbody">
                    { this.state.songs.map((songs) => (
                        <div key={songs.song_id} className="song_box">
                      <Container>
                            <img src={songs.song_image} alt={songs.song_name} className="song_image" width="200" height="200"></img>

                            <h1 className="headingtwo">
                                {songs.song_name}
                            </h1>
                            
                            <p className="ser_singer">
                             Singer:   {songs.song_artist}<br />Album : {songs.album_name}
                            </p>
                            <p className="center">
                                <Link to={`../download/${songs.song_id}`}>
                      <Button className="button_btn" variant="outlined" color="primary">
                        <i class="gg-software-download"></i>  Download
                      </Button>
                                </Link>
                                <span>&nbsp;&nbsp;</span>
                                <Link to={`../play/${songs.song_id}`}>
                      <Button variant="outlined" color="primary">
                           Play <i class="gg-play-button-o"></i>
                        </Button>
                                </Link>
                            </p>
                            <br/>
                          </Container>
                        </div>
                    ))}
                </div>
             </Container>
            )
        }
    }
}