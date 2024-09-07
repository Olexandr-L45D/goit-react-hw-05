// Movies / PaymentInfo

import css from "./Movies.module.css"
import { FcCamcorderPro } from "react-icons/fc";


export default function Movies({ product: { movie_id, name, language } }) {
    return (
        <div className={css.item}>
            <div className={css.itemText}>
                <p className={css.text}><FcCamcorderPro />{name}</p>
                <p className={css.text}>Language: {language}</p>

            </div>

        </div>
    );
}
