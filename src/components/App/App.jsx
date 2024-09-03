
import { Routes, Route, NavLink } from "react-router-dom";
// import clsx from 'clsx';
import css from './App.module.css';
//import Home from "path/to/pages/HomePage";
// import About from "path/to/pages/MoviesPage";
// import Products from "path/to/pages/Products";
// import NotFound from 'path/to/pages/NotFound';
// import ProductDetails from "path/to/pages/MovieDetailsPage";
import AppBar from '../AppBar/AppBar';
import { Mission } from '../Mission';
import { Team } from '../Team';
import { Reviews } from '../Reviews';

export default function App() {
  return (
    <div className={css.container}>
      <AppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
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

