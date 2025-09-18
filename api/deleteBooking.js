export default async function handler(req, res) {
  try {
    const id = req.query.id;
    const response = await fetch(
      `https://freeapi.miniprojectideas.com/api/CarRentalApp/DeletBookingById?id=${id}`,
      { method: "DELETE" }
    );
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error deleting booking", error: error.message });
  }
}
