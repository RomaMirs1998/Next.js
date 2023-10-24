import {findStorebyId } from "../../lib/airtable";

const getCoffeeStoreById = async (req, res) => {
  const { id } = req.query;
  console.log("id: ", id);
  try {
    if (id) {
      const store = await findStorebyId(id);

      if (store && store.length > 0) {
        res.status(200).json(store)
      } else {
        res.status(404).json({ msg: `No store with id: ${id}` });
      }
    } else {
      res.status(400).json({ msg: "id is required" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong" });
  }
};

export default getCoffeeStoreById;
