import { getMinifiedRecords, table, findStorebyId } from "../../lib/airtable";

const createCoffeeStore = async (req, res) => {
  try {
    if (req.method == "POST") {
      const { id, name, address, country, voting, imgUrl } = req.body;

      if (id) {
        const store = await findStorebyId(id);
        if (store) {
          res.status(400).json({ error: "Store already exists" });
          return;
        }
      } else {
        res.status(400).json({ error: "Please provide id" });
        return;
      }
      //create a record

      if (name) {
        const createRecord = await table.create([
          {
            fields: {
              id,
              name,
              address,
              country,
              voting,
              imgUrl,
            },
          },
        ]);

        const record = getMinifiedRecords(createRecord);

        res.status(200).json(record);
      } else {
        res.status(400).json({ error: "Please provide id and name" });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong1234",err });
  }
};

export default createCoffeeStore;
