import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MovieDetailComponent from '../components/MovieDetailComponent';
import { Link} from 'react-router-dom';
const Image = styled.img`
    width: 100%;
    height: auto;
`;

export default function MovieDetailPage() {
    const { state } = useLocation();

    if (!state || !state.image || !state.title || !state.overview) {
        return (
            <errorMessage>
                404 NOT Found
                <Link to="/main-page">  메인페이지로 이동</Link>
            </errorMessage>
        )
        
    }

    return (
        <div className="detail-page-container">
            <div>
                <Image src={state.image} alt={state.title} />
            </div>
            <MovieDetailComponent title={state.title} overview={state.overview} />
        </div>
    );
}


