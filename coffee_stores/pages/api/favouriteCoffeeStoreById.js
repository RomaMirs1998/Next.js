

const favouriteCoffeeStoreById = async (req, res) => {
    if(req.method == "PUT"){

        try{
        const {id} = req.body;
        res.status(200)
        res.json({ msg: "Hello Everyone!",id });
    }catch(err){
        
        res.status(500).json({msg:"Something went wrong"});
    }


}
}

export default favouriteCoffeeStoreById;