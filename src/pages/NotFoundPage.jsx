
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)
    return (<div>

        <h2>Not Found Page</h2>
        <p> Plese use this link to go Home <Link to="/">back to home</Link></p>
    </div>
    );
}
