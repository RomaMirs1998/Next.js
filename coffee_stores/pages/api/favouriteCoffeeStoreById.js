import { findStorebyId,table,getMinifiedRecords } from "../../lib/airtable";

const favouriteCoffeeStoreById = async (req, res) => {
    if(req.method == "PUT"){

        try{
        const {id} = req.body;
        if(id){
        const records =await findStorebyId(id);
        if(records &&records.length>0){
            const record = records[0];
            const updatedRecord = await table.update([
                {
                    id:record.recordId,
                    fields:{
                        voting:record.voting +1
                    }
                }
            ])
            res.status(200).json(getMinifiedRecords(updatedRecord));
        }else{
        res.status(200)
        res.json({ msg: "No record found" ,id })
    }}
        else{
            res.status(400).json({msg:"Please provide id"})
        }
    }catch(err){
        
        res.status(500).json({msg:"Something went wrong"});
    }


}
}

export default favouriteCoffeeStoreById;