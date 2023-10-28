const Airtable = require("airtable");
const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_KEY);

const table =base("coffee_stores")

const getMinifiedRecord = (record) => {
  return {
    recordId: record.id,
    ...record.fields,
  };
};

const getMinifiedRecords = (records) => {
  return records.map((record) => getMinifiedRecord(record));
};

const findStorebyId = async (id) => {
  try {
    const findCoffeeStore = await table
      .select({
        filterByFormula: `id = "${id}"`,
      })
      .firstPage();

    if (findCoffeeStore.length > 0) {
      const record = getMinifiedRecords(findCoffeeStore);
      return record;
    }
    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export { table, getMinifiedRecords, findStorebyId };
