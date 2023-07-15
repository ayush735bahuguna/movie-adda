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
import CreditsDetail from "./Components/Detail Page Components/Credits/components/CreditsDetail";


function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Search/:text" element={<SearchPage />} />

          {/* make nested loop */}

          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />

          {/* make nested loop */}

          <Route path="/tv" exact element={<TvSeries />} />
          <Route path="/tv/:id" element={<TvDetailPage />} />

          <Route path="/:text/credit/:id" element={<CreditsDetail />} />

          <Route path="*" element={<Error />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
