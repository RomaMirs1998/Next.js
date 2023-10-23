import { getMinifiedRecords, table } from "../../lib/airtable";

const createCoffeeStore = async (req, res) => {
  try {
    if (req.method == "POST") {
      const { id, name, address, country, voting, imgUrl } = req.body;
      console.log("req.body: ", req.body);

      if (id) {
        const findCoffeeStore = await table
          .select({
            filterByFormula: `id = "${id}"`,
          })
          .firstPage();

        console.log("findCoffeeStore: ", findCoffeeStore);
        console.log("findCoffeeStore.length: ", findCoffeeStore.length);

        if (findCoffeeStore.length > 0) {
          const record = getMinifiedRecords(findCoffeeStore);

          return res.status(200).json(record);
        }
      } else {
        return res.status(400).json({ error: "Please provide id" });
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

        return res.status(200).json(record);
      } else {
        return res.status(400).json({ error: "Please provide id and name" });
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export default createCoffeeStore;
