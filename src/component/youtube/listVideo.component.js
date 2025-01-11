import React from "react";

function ListVideo({ haldleSelect, title, videoId, description, chanelTitle, imgUrl}) {
  return (
  <div className="list-group-item d-flex" onClick={()=>haldleSelect(videoId)}>
        <div className="row">

             <div className="col-lg-6 mr-auto">
                <img style={{"heigh":'100%', "width":'100%', "border-radius":'7px'}} className="list-image" alt={imgUrl} src={imgUrl} />
            </div>

            <div className="col-lg-6 ps-0">
               <div>
                    <span className="heading-wrap">
                        <h6 className="list-heading">{title}</h6>
                    </span>
                    <h7 className="list-description">{chanelTitle}</h7>
               </div>
            </div>
            
        </div>
  </div>
  )
}

export default ListVideo;
