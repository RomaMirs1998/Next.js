import { fetchCoffeeStores } from "../../lib/coffee-stores";

const getCoffeeStoresByLocation = async (req, res) => {
  try {
    const { location } = req.query;
    if (!location) {
      res.status(400).json({ message: "location is required" });
    }

    const response = await fetchCoffeeStores(location);
    res.status(200).json(response);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default getCoffeeStoresByLocation;
