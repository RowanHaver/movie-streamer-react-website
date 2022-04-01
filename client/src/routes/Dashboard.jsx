import React, { useEffect, useState } from "react";
import DashboardNavigation from "../components/DashboardNavigation/DashboardNavigation";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import MovieList from "../components/MovieList/MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async () => {
        const url = `http://www.omdbapi.com/?apikey=8c41f9b2&s=${searchValue}`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search){
            setMovies(responseJson.Search);
        }
    };

    //getMovieRequest function only gets called when the page loads only
    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]); //when the search value changes it calls the useEffect hook

    return <div>
            <ImageSlider searchValue={searchValue} setSearchValue={setSearchValue}/>
            <MovieList movies={movies} heading="Movies"/>
    </div>
};

export default Dashboard;
