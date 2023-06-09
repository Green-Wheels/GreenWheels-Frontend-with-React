import axios from "axios";

export async function fetchBookings() {
    try {
      const token = localStorage.getItem("token"); // Replace with your token management method
      const response = await axios.get("https://g5-greenwheels-backend-2ilc.onrender.com/booking", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response)
      return response.data;
    } catch (error) {

      console.error("Error fetching reservations:", error);
      return [];
    }
  }


  export  const deleteBooking = async (bookingId) => {
    try {
      const token = localStorage.getItem("token"); // Replace with your token management method
      await axios.delete(`https://g5-greenwheels-backend-2ilc.onrender.com/booking/${bookingId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };