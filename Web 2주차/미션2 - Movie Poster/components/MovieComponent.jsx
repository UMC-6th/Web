import '../styles/movie.css'

function MovieComponent({image, title, voteAverage}) {
    return (
        <div className='movieBox'>
            <img src={image} alt={title} className='image'/>
            <div className='bottomBox'>
                <div className='paddingBox'></div>
                <div className='textBox'>
                    <p id='title'>{title}</p>
                    <p id='vote_average'>{voteAverage}</p>
                </div>
                <div className='paddingBox'></div>
            </div>
        </div>
    )
}

export default MovieComponent