import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import debounce from 'lodash.debounce';
import SearchBar from './components/search_bar';
import youtubeSearch from './youtube-api';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.search('pixar');
    this.search = debounce(this.search, 300);
  }

  search = (text) => {
    youtubeSearch(text).then((videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  };

  render() {
    if (!this.state.selectedVideo) {
      console.log('Loading image still');
      return <div>Loading...</div>;
    } else {
      console.log('Image loaded');
    }
    return (
      <div>
        <SearchBar onSearchChange={this.search} />
        <section id="main-content">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} videos={this.state.videos} />
        </section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
