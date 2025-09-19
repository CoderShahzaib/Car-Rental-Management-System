export default async function handler(req, res) {
  try {
    if (req.method !== "DELETE") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    const id = req.query.id; // Angular sends ID as query param
    if (!id) {
      return res.status(400).json({ message: "Customer ID is required" });
    }

    const response = await fetch(`https://freeapi.miniprojectideas.com/api/CarRentalApp/DeletCustomerById?id=${id}`, {
      method: "DELETE"
    });

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ message: "Error deleting customer", error: error.message });
  }
}
