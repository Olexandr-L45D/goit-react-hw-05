import css from "./SearchForm.module.css"
//import { Navigate, useLocation, useState } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function SearchForm() {
    const [params, setParams] = useSearchParams();
    //const [isSerchParams, setSerchParams] = useState(false);
    //// додаємо функціонал кнопки повернення наз і перевіряємо що точно є значення фром  локатіон стайт 
    // const location = useLocation();
    // const backLink = location.state?.from ?? '/';
    const handleSubmit = (event) => {
        event.preventDefault();
        // setSerchParams({ query: values });
        params.set("owner", event.target.elements.owner.value);
        setParams(params);
        event.target.reset();
    };

    // if (isSerchParams) {
    //     return <Navigate to="/profile" replace />;
    // }

    return (
        <div >
            <h5 className={css.paragraf}>Search movie</h5>
            <form onSubmit={handleSubmit}>
                <input type="text" name="owner" />
                <button type="submit">Search</button>
            </form>

        </div>
    );
}



