export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const body = await req.json();
    const response = await fetch("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCustomer", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error updating customer", error: error.message });
  }
}
