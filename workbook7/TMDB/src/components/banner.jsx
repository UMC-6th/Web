import { useContext } from 'react';
import { AuthContext } from '../components/auth';

function Banner() {
    const { auth } = useContext(AuthContext);

    if (auth.isLoading) {
        return (
            <div>
                <h3 style={{ margin: '0', color: 'white', textAlign: 'center' }}>
                    로딩 중…
                </h3>
            </div>
        );
    }

    return (
        <div>
            {auth.isAuthenticated ? (
                <h3 style={{ margin: '0', color: 'white', textAlign: 'center' }}>
                    {auth.username}님 환영합니다!
                </h3>
            ) : (
                <h3 style={{ margin: '0', color: 'white', textAlign: 'center' }}>
                    환영합니다
                </h3>
            )}
        </div>
    );
}

export default Banner;
