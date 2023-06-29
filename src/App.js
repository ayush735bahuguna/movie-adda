import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Header from "./Components/Header/Header";
import HomePage from "./Pages/Home/HomePage";
import SearchPage from "./Pages/Search page/SearchPage";
import Error from "./Components/Error/Error";
import Movie from "./Pages/Movie Page/Movie";
import TvSeries from "./Pages/Tv Series Page/TvSeriesPage";
import MovieDetailPage from "./Pages/Movie Page/MovieDetailPage/MovieDetailPage";
import TvDetailPage from "./Pages/Tv Series Page/Tv details page/TvDetailPage";


function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Search/:text" element={<SearchPage />} />

          {/* make nested loop */}

          <Route path="/Movie" element={<Movie />} />
          <Route path="/Movie/:id" element={<MovieDetailPage />} />

          {/* make nested loop */}

          <Route path="/TV-Series" exact element={<TvSeries />} />
          <Route path="/TV-Series/:id" element={<TvDetailPage />} />


          <Route path="*" element={<Error />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
