import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 🚀 AsyncThunk لجلب عروض الشغل كاملة من الـ Backend
export const fetchOffres = createAsyncThunk(
  'offre/fetchOffres',
  async (_, { rejectWithValue }) => {
    try {
      // عوّض الـ URL هذا بالـ URL الصحيح متاع الـ API عندك في الـ Back
      const response = await axios.get('https://jobmatch-tau.vercel.app/offre/all'); 
      return response.data; // الـ data هوني هي الـ Array متاع الـ offres اللي صبيتها في Postman
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const offreSlice = createSlice({
  name: 'offre',
  initialState: {
    offresList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffres.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOffres.fulfilled, (state, action) => {
        state.loading = false;
        state.offresList = action.payload; // تخزين العروض القادمة من الـ Database
      })
      .addCase(fetchOffres.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export default offreSlice.reducer;