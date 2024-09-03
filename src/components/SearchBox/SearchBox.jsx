import css from "./SearchBox.module.css"

import { useSearchParams } from "react-router-dom";

export default function SearchBox() {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name");

    return (
        <div>
            <h5 className={css.paragraf}>Finde contacts by name</h5>
            <input
                type="text"
                value={name}
                onChange={e => setSearchParams({ name: e.target.value })}
            />
        </div>
    );
};



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



