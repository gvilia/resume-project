import { createSlice } from '@reduxjs/toolkit';

const initialThemeState = { theme: localStorage.theme };

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialThemeState,
  reducers: {
    dark(state) {
      state.theme = 'dark';
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    },
    light(state) {
      state.theme = 'light';
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
