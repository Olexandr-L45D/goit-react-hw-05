import { Navigate, useLocation, useState } from "react-router-dom";

export const Login = () => {
    const [isSerchParams, setSerchParams] = useState(false);

    // const handleSubmit = async values => {
    //     const response = await FakeAPI.login(values);
    //     setSerchParams(response.success);
    // };
    const handleSubmit = values => {

        setSerchParams({ query: values });
    };

    if (isSerchParams) {
        return <Navigate to="/profile" replace />;
    }

    return (
        <div>
            <h1>Login page</h1>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
};



// додаємо функціонал кнопки повернення наз і перевіряємо що точно є значення фром  локатіон стайт 
const location = useLocation();
const backLink = location.state?.from ?? '/';



// import { nanoid } from 'nanoid'
// import css from "./ContactForm.module.css"
// import { Formik, Form, Field } from 'formik';
// import { useId } from "react";
// import * as Yup from "yup";
// import { ErrorMessage } from "formik";

// export default function ContactForm({ onAdd }) {
//     const nameFieldId = useId();
//     const numberFieldId = useId();
//     const idId = nanoid();

//     const FeedbackSchema = Yup.object().shape({
//         name: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
//         number: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required('Required')
//     });

//     const handleSubmit = (values, actions) => {
//         values.id = idId;
//         onAdd(values);
//         console.log(values);
//         actions.resetForm();
//     };
//     return (
//         <div className={css.item}>
//             <Formik initialValues={{
//                 name: " ",
//                 number: " "
//             }} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
//                 <Form>
//                     <div className={css.items}>
//                         <label className={css.label} htmlFor={nameFieldId} >Name</label>
//                         <Field className={css.inp} type="text" name="name" id={nameFieldId} />
//                         <ErrorMessage className={css.messag} name="name" component="span" />
//                     </div>
//                     <div className={css.items}>
//                         <label className={css.label} htmlFor={numberFieldId} >Number</label>
//                         <Field className={css.inp} type="text" name="number" id={numberFieldId} />
//                         <ErrorMessage className={css.messag} name="number" component="span" />
//                     </div>
//                     <div className={css.btn}>
//                         <button className={css.addContact} type="submit">Add contact</button>
//                     </div>
//                 </Form>
//             </Formik>
//         </div>
//     );
// };