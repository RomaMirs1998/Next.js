const Airtable = require("airtable");
const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_API_KEY_AIRTABLE,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const table = base("Coffee-Stores");

const getMinifiedRecord = (record) => {
  return {
    ...record.fields,
  };
};

const getMinifiedRecords = (records) => {
  return records.map((record) => getMinifiedRecord(record));
};

export { table, getMinifiedRecords };
