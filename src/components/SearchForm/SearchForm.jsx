import css from "./SearchForm.module.css"

import { useSearchParams } from "react-router-dom";

export default function SearchForm() {
    const [params, setParams] = useSearchParams();

    const handleSubmit = (event) => {
        event.preventDefault();

        params.set("owner", event.target.elements.owner.value);
        setParams(params);

        event.target.reset();
    };

    return (
        <div >
            <h5 className={css.paragraf}>Finde video by name</h5>
            <form onSubmit={handleSubmit}>
                <input type="text" name="owner" />
                <button type="submit">Search</button>
            </form>

        </div>
    );
}




// import { useSearchParams } from "react-router-dom";

// export default function SearchForm() {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const name = searchParams.get("name");

//     return (
//         <div>
//             <h5 className={css.paragraf}>Finde contacts by name</h5>
//             <input
//                 type="text"
//                 value={name}
//                 onChange={e => setSearchParams({ name: e.target.value })}
//             />
//         </div>
//     );
// };



// export default function SearchBox({ value, onFilter }) {
//     return (
//         <div className={css.item}>
//             <h5 className={css.paragraf}>Finde contacts by name</h5>
//             <input
//                 type="text"
//                 value={value}
//                 onChange={(e) => onFilter(e.target.value)}
//             />
//         </div>
//     );
// }



