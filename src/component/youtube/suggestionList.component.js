import React from 'react'
import ListVideo from './listVideo.component'

function List({ videos, handleSelect }) {
  return (
    <div className="col-lg-4 vid-measure">
        
          <ul className="list-group">
          {
            videos && videos.map((video, index) => (
              <ListVideo
              key={index}
              haldleSelect={handleSelect}
              imgUrl={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
              description={video.snippet.description}
              videoId={video.id.videoId}
              chanelTitle={video.snippet.chanelTitle}
              
              />

            ))
          }
          </ul>
    </div>
  )
}

export default List