import {Container} from 'react-bootstrap'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=6c11a5ed20034ac2843bdd9704dff87f&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const Login = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
            <a className="btn btn-success btn-lg" style={{backgroundColor: "#28a745", borderRadius: "40px"}} href={AUTH_URL}>Login with Spotify</a>
        </Container>
    )
}

export default Login
