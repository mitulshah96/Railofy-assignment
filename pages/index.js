import React, { useState, useReducer } from 'react';
import { Card, Input } from 'antd';
import Link from 'next/link';
import { useEffect } from 'react';
import { getMovies } from '../actions';
import { initialState, reducer } from '../reducer';
import { GET_MOVIE_REQUEST, GET_MOVIE, GET_MOVIE_FAILURE } from '../constant';

export default function Index() {
    const [movie, setMovie] = useState('spiderman');
    const [state, dispatch] = useReducer(reducer, initialState);

    const { Meta } = Card;
    const { Search } = Input;

    async function getMoviesData() {
        dispatch({
            type: GET_MOVIE_REQUEST,
        });
        try {
            const response = await (await getMovies({ movie })).json();

            if (response.Response === 'False') {
                dispatch({
                    type: GET_MOVIE_FAILURE,
                });
            } else {
                dispatch({
                    type: GET_MOVIE,
                    payload: response,
                });
            }
        } catch (error) {
            dispatch({
                type: GET_MOVIE_FAILURE,
            });
        }
    }

    useEffect(() => {
        getMoviesData();
    }, [movie]);
    return (
        <>
            <Search
                placeholder="input search text"
                onSearch={(value) => setMovie(value.trim())}
                enterButton={false}
            />
            {state.loading ? (
                <div>Loading</div>
            ) : (
                <>
                    {state.data.length > 0 ? (
                        state.data.map((item, index) => (
                            <Link
                                key={index}
                                href="/detail/[id]"
                                as={`detail/${item.imdbID}`}
                            >
                                <Card
                                    style={{ width: 300 }}
                                    cover={
                                        <img
                                            style={{ width: '100%' }}
                                            alt={item.Title}
                                            src={
                                                item.Poster !== 'N/A'
                                                    ? item.Poster
                                                    : 'https://cdn.cwsplatform.com/assets/no-photo-available.png'
                                            }
                                        />
                                    }
                                >
                                    <Meta
                                        title={item.Title}
                                        description={`The Movie ${item.Title} was release on ${item.Year}`}
                                    />
                                </Card>
                            </Link>
                        ))
                    ) : (
                        <div>No data found</div>
                    )}
                </>
            )}
        </>
    );
}
