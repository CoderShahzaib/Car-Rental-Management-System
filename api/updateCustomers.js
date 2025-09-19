export default async function handler(req, res) {
  try {
    if (req.method !== "PUT") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    // Parse JSON body
    const body = await new Promise((resolve, reject) => {
      let data = "";
      req.on("data", chunk => data += chunk);
      req.on("end", () => resolve(JSON.parse(data)));
      req.on("error", err => reject(err));
    });

    const response = await fetch("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCustomer", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    });

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ message: "Error updating customer", error: error.message });
  }
}
