import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookedHotels: JSON.parse(localStorage.getItem("bookedHotels")) || [],
  totalAmount: 0,
};

const hotelSlice = createSlice({
  name: "hotelBooking",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      const hotel = action.payload;

      const existingHotel = state.bookedHotels.find(
        (item) => item.id === hotel.id);

      if (existingHotel) {
        existingHotel.rooms += 1;
      } else {
        state.bookedHotels.push({ ...hotel, rooms: 1,});
      }
    },

  updateRooms: (state, action) => {
    const { id, change } = action.payload;
    const hotel = state.bookedHotels.find(
    (item) => item.id === id);

  if (hotel) {
    hotel.rooms += change;

    if (hotel.rooms < 1) {
      hotel.rooms = 1;
    }
  }
      localStorage.setItem("bookedHotels",JSON.stringify(state.bookedHotels));
    },

    removeBooking: (state, action) => {
      state.bookedHotels = state.bookedHotels.filter(
        (item) => item.id !== action.payload);

      localStorage.setItem("bookedHotels", JSON.stringify(state.bookedHotels));
    },

    clearBookings: (state) => {
      state.bookedHotels = [];
      state.totalAmount = 0;
      localStorage.removeItem("bookedHotels");
    },

    calculateTotal: (state) => {
      state.totalAmount = state.bookedHotels.reduce(
        (total, hotel) => total + hotel.price * hotel.rooms,0);
    },
  },
});

export const { addBooking, updateRooms, removeBooking, clearBookings, calculateTotal} = hotelSlice.actions;
export default hotelSlice.reducer;