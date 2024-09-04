// MoviesPage

import { Link, Outlet } from 'react-router-dom';

export default function MaviesPage() {
    //const [mavies, setMavies] = useState([]);
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)
    return (
        <main>
            <h1>About Us</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
                laborum amet ab cumque sit nihil dolore modi error repudiandae
                perspiciatis atque voluptas corrupti, doloribus ex maiores quam magni
                mollitia illum dolor quis alias in sequi quod. Sunt ex numquam hic
                asperiores facere natus sapiente cum neque laudantium quam.

            </p>
            <ul>
                <li>
                    <Link to="mission">Read about our mission</Link>
                </li>
                <li>
                    <Link to="team">Get to know the team</Link>
                </li>
                <li>
                    <Link to="reviews">Go through the reviews</Link>
                </li>
                <li>
                    <p> Plese use this link to go Home <Link to="/">back to home</Link></p>
                </li>
            </ul>
            <Outlet />
        </main>
    );
}
