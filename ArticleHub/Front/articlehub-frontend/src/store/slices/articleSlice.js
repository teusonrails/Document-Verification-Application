import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    articles: [],
    currentArticle: null,
    loading: false,
    error: null,
};

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        setArticles: (state, action) => {
            state.articles = action.payload;
        },
        setCurrentArticle: (state, action) => {
            state.currentArticle = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setArticles, setCurrentArticle, setLoading, setError } = articleSlice.actions;
export default articleSlice.reducer;
