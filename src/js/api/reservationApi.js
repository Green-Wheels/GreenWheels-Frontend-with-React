import axios from "axios";

export async function fetchReservations(userId) {
    try {
      const token = localStorage.getItem("token"); // Replace with your token management method
      const response = await axios.get("https://g5-greenwheels-backend-2ilc.onrender.com/reservations", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response)
      return response.data;
    } catch (error) {

      console.error("Error fetching reservations:", error);
      return [];
    }
  }

  


  export  const deleteReservation = async (reservationId) => {
    try {
      const token = localStorage.getItem("token"); // Replace with your token management method
      await axios.delete(`https://g5-greenwheels-backend-2ilc.onrender.com/reservations/${reservationId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };



    // Diese Funktion gibt die Reservierungs-ID der aktiven Reservierung zurück, wenn eine vorhanden ist, andernfalls gibt sie null zurück.

  export const getActiveReservations = async () => {
    try {
      const token = localStorage.getItem("token"); // Stellen Sie sicher, dass der Token dort gespeichert ist
      const response = await axios.get('https://g5-greenwheels-backend-2ilc.onrender.com/reservations/active', {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data; // Die aktiven Reservierungen
    } catch (error) {
      console.error("Fehler beim Abrufen aktiver Reservierungen: ", error);
      return null;
    }
  }

  export const updateReservation = async (reservationId, updatedReservationData) => {
    try {
      const token = localStorage.getItem("token"); // Replace with your token management method
      await axios.put(`https://g5-greenwheels-backend-2ilc.onrender.com/reservations/${reservationId}`, updatedReservationData, {
        headers: { Authorization: `Bearer ${token}` },
      });
     //  setReservations(updatedReservations);
    } catch (error) {
      console.error("Error updating reservation:", error);
    }
  }

  export const bookReservation = async (reservationId) => {
    try {
      const token = localStorage.getItem("token"); // Replace with your token management method
      await axios.post(`https://g5-greenwheels-backend-2ilc.onrender.com/booking`, {reservationId}, {
        headers: { Authorization: `Bearer ${token}` },
      });
     //  setReservations(updatedReservations);
    } catch (error) {
      console.error("Error updating reservation:", error);
    }
  }

  export const confirmReservation = async (reservationId) => {
    console.log(reservationId)
    try {
      const token = localStorage.getItem("token"); // Replace with your token management method
      console.log(token)
      await axios.put(`https://g5-greenwheels-backend-2ilc.onrender.com/reservations/book/${reservationId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.error("Error updating reservation:", error);
    }
  };