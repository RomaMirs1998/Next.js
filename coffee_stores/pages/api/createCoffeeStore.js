const Airtable = require("airtable");
const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_API_KEY_AIRTABLE,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const table = base("Coffee-Stores");

const createCoffeeStore = async (req, res) => {
  try{  
  if (req.method == "POST") {
    //find a record by id
    const findCoffeeStore = await table
      .select({
        filterByFormula: `id = 1`,
      })
      .firstPage();

      console.log({findCoffeeStore});
    if (findCoffeeStore.length > 0) {

       const record = findCoffeeStore.map(record => {
            return {
                ...record.fields
            }})
         

      res.status(200).json(record);
    } else {
        //create a record 
    const createRecord = await table.create([
        {
            fields:{
                id:"1",
                name:"Starbucks",
                address:"123 Main Street",
                country:"New York",
                voting:200,
                imgUrl:"www.abc.de"
            }
        }
    ])
    const record = createRecord.map(record => {
        return {
            ...record.fields
        }})
     
      res.status(200).json( record );
    }
}
}catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
    }
};


export default createCoffeeStore;
