import '../styles/movieDetail.css'

function MovieDetailComponent({title, overview}) {
    return (
        <div className='movieDetailBox'>
            <div className='textDetailBox'>
                <p id='title_detail'>{title}</p>
                <p id='overview'>{overview}</p>
            </div>
        </div>
    )
}

export default MovieDetailComponent