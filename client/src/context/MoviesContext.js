import React, {useState, createContext} from "react";

export const MoviesContext = createContext(); //creates context

//this is what wraps the entire application so they all have access to its state
export const MoviesContextProvider = props =>{ 
    const [movies, setMovies] = useState([])


    return(
        <MoviesContext value={{movies: movies, setMovies}}>
            {props.children}
        </MoviesContext>
    )
}

/*
api to retrieve the list of movies in the application, 
context api stores the results, benefits of storing data
within a context api instead of local state is that all
of the components in the application can automaticly 
retrieve that data, dont need to worry about passing 
that data as props 
*/
