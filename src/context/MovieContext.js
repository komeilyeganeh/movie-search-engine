import React from "react";

const initialContext = {
    movies: [],
    onSearch: () => {}
}

export const MovieContext = React.createContext(initialContext);