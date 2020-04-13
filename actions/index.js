import fetch from 'isomorphic-unfetch';

export const getMovies = ({ movie }) => {
    return fetch(`http://www.omdbapi.com/?s=${movie}&apikey=c8701280`);
};

export const getMovieDetail = ({ id }) => {
    return fetch(`http://www.omdbapi.com/?i=${id}&apikey=e6d61984`);
};
