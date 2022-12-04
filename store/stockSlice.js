import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  api1: {},
  api2: {},
  api3: {},
  api4: {},
  api5: {},
  api6: {},
  api7: {},
  api8: {},
  api9: {},
  api10: {},
  api11: {},
  api12: {},
  api13: {},
  api14: {},
  api15: {},
  api16: {},
  api17: {},
  loader: false,
};

export const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    setAPI1Data: (state, action) => {
      state.api1 = action.payload;
    },
    setAPI2Data: (state, action) => {
      state.api2 = action.payload;
    },
    setAPI3Data: (state, action) => {
      state.api3 = action.payload;
    },
    setAPI4Data: (state, action) => {
      state.api4 = action.payload;
    },
    setAPI5Data: (state, action) => {
      state.api5 = action.payload;
    },
    setAPI6Data: (state, action) => {
      state.api6 = action.payload;
    },
    setAPI7Data: (state, action) => {
      state.api7 = action.payload;
    },
    setAPI8Data: (state, action) => {
      state.api8 = action.payload;
    },
    setAPI9Data: (state, action) => {
      state.api9 = action.payload;
    },
    setAPI10Data: (state, action) => {
      state.api10 = action.payload;
    },
    setAPI11Data: (state, action) => {
      state.api11 = action.payload;
    },
    setAPI12Data: (state, action) => {
      state.api12 = action.payload;
    },
    setAPI13Data: (state, action) => {
      state.api13 = action.payload;
    },
    setAPI14Data: (state, action) => {
      state.api14 = action.payload;
    },
    setAPI15Data: (state, action) => {
      state.api15 = action.payload;
    },
    setAPI16Data: (state, action) => {
      console.log("api16 action.payload : ", action.payload);
      state.api16 = action.payload;
    },
    setAPI17Data: (state, action) => {
      console.log("api17 action.payload : ", action.payload);
      state.api17 = action.payload;
    },
  },
});

// Actions - used to set global state
export const {
  setLoader,
  setAPI1Data,
  setAPI2Data,
  setAPI3Data,
  setAPI4Data,
  setAPI5Data,
  setAPI6Data,
  setAPI7Data,
  setAPI8Data,
  setAPI9Data,
  setAPI10Data,
  setAPI11Data,
  setAPI12Data,
  setAPI13Data,
  setAPI14Data,
  setAPI15Data,
  setAPI16Data,
  setAPI17Data,
} = stockSlice.actions;

// Selectors - used to fetch global state
export const selectAPI1Data = (state) => state.stock.api1;
export const selectAPI2Data = (state) => state.stock.api2;
export const selectAPI3Data = (state) => state.stock.api3;
export const selectAPI4Data = (state) => state.stock.api4;
export const selectAPI5Data = (state) => state.stock.api5;
export const selectAPI6Data = (state) => state.stock.api6;
export const selectAPI7Data = (state) => state.stock.api7;
export const selectAPI8Data = (state) => state.stock.api8;
export const selectAPI9Data = (state) => state.stock.api9;
export const selectAPI10Data = (state) => state.stock.api10;
export const selectAPI11Data = (state) => state.stock.api11;
export const selectAPI12Data = (state) => state.stock.api12;
export const selectAPI13Data = (state) => state.stock.api13;
export const selectAPI14Data = (state) => state.stock.api14;
export const selectAPI15Data = (state) => state.stock.api15;
export const selectAPI16Data = (state) => state.stock.api16;
export const selectAPI17Data = (state) => state.stock.api17;
export const selectLoader = (state) => state.stock.loader;

export default stockSlice.reducer;
