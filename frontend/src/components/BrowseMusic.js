import React, { useEffect, useState } from "react"

const BrowseMusic = () => {

  const [musicList, setMusicList] = useState([]);
  const [selMusic, setSelMusic] = useState(null);
  const [playing, setPlaying] = useState(false);

  const fetchData = async () => {
    const res = await fetch('http://localhost:5000/music/getall');
    const data = await res.json();
    console.log(data);
    setMusicList(data);
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  const showMusic = () => {
    return musicList.map(music => (
      <div className="col-lg-4 col-md-12 mb-4">
              <div className="card" >
                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                  <img src={"http://localhost:5000/"+music.image} className="w-100" />
                  <a href="#!">
                    
                    <div className="hover-overlay">
                      <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }} />
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">{music.title}</h5>
                  </a>
                  <p>{music.description.slice(0, 10)}...</p>
                  <a href="" className="text-reset">
                    <p>{music.publisher}</p>
                    <p className="text-muted">{music.year}</p>
                  </a>
                  <button className="btn btn-primary w-100" onClick={e => {
                    setSelMusic(music);
                    setPlaying(true)
                  }}>
                    {
                      playing ? <>Playing <i class="fas fa-pause-circle    "></i></>
                      : (<>Play Now <i class="fas fa-play-circle"></i></>) 
                    }
                    
                    </button>
                </div>
              </div>
            </div>
    ))
  }

  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <h4 className="mt-4 mb-5 text-center">
            <strong>Browse Songs</strong>
          </h4>
          <div className="row">
            {showMusic()}
            
          </div>
          
        </div>
      </section>
      <div>
        {Boolean(selMusic)&& <audio src={'http://localhost:5000/'+selMusic.musicfile} controls ></audio> }
        
      </div>
    </div>
  )
}

export default BrowseMusic
