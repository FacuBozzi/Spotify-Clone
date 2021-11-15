const TrackSearchResult = ({track, chooseTrack}) => {
    function handlePlay(){
        chooseTrack(track);
    }
    return (
        <div className="d-flex m-2 align-items-center" style={{cursor:"pointer"}} onClick={handlePlay}>
            <img src={track.albumUrl} style={{heigh: "54px", width: "54px"}} alt="" />
            <div className="ml-3" style={{marginLeft:"16px"}}>
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>
        </div>
    )
}

export default TrackSearchResult
