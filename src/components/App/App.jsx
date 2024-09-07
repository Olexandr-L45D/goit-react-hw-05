
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react"
import css from './App.module.css';
const HomePage = lazy(() => import("../../pages/HomePage"));
const MaviesPage = lazy(() => import("../../pages/MaviesPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));
const Navigation = lazy(() => import("../Navigation/Navigation"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));
// import { Mission } from '../Mission';
// import { Team } from '../Team';
// import { Reviews } from '../Reviews';


export default function App() {
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={<div>LOADING General-Video...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/movies' element={<MaviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />} >
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};











// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };
// export const App = () => {
//   return (
//     <div>
//       <nav className={css.nav}>
//         <NavLink to="/" className={buildLinkClass}>
//           Home
//         </NavLink>
//         <NavLink to="/about" className={buildLinkClass}>
//           About
//         </NavLink>
//         <NavLink to="/products" className={buildLinkClass}>
//           Products
//         </NavLink>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />}>
//           <Route path="mission" element={<Mission />} />
//           <Route path="team" element={<Team />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:productId" element={<ProductDetails />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// };

















// export default function App() {
//   const [filter, setFilter] = useState('');

//   const [tasks, setTasks] = useState(() => {
//     const savClicks = window.localStorage.getItem("my-clicks");
//     return savClicks !== null ? JSON.parse(savClicks) : objects
//   });

//   useEffect(() => {
//     const isLocalStorData = Boolean(localStorage.getItem("my-clicks"));
//     if (isLocalStorData) {
//       const data = localStorage.getItem("my-clicks");
//       setTasks(JSON.parse(data));
//     }
//   }, []);

//   useEffect(() => {
//     window.localStorage.setItem("my-clicks", JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = (newTask) => {
//     setTasks((prevTasks) => {
//       return [...prevTasks, newTask];
//     });
//   };
//   const deleteTask = (taskId) => {
//     setTasks((prevTasks) => {
//       return prevTasks.filter((task) => task.id !== taskId);
//     });
//   };
//   const visibleTasks = tasks.filter((task) =>
//     task.name.toLowerCase().includes(filter.toLowerCase()));

//   return (
//     <div className={css.container}>
//       <>
//         <h1 className={css.title}>Phonebook</h1>
//         <ContactForm onAdd={addTask} />
//         <SearchBox value={filter} onFilter={setFilter} />
//         <ContactList tasks={visibleTasks} objects={objects} onDelete={deleteTask} />
//       </>
//     </div>
//   )
// }

