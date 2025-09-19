
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const bookingId = req.query.bookingId;

  if (!bookingId) {
    return res.status(400).json({ message: "Booking ID is required" });
  }

  try {
    const response = await fetch(
      `https://freeapi.miniprojectideas.com/api/CarRentalApp/GetBookingByBookingId?bookingId=${bookingId}`
    );
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching booking", error: error.message });
  }
}
