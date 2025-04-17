import Item from "../models/item.js";

export function getAllItem(req,res){
    Item.find().then(
        (items)=>{
            res.json(items)
        }
    ).catch(()=>{
        res.json({
            message:"Error"
        })
    })
}


export function saveItem(req,res){

    const newItem = new item (req,body)

    Item.save().then(
        ()=>{    
            res.json({        
                message:"Save Success"
            })
        }
    ).catch(
        ()=>{
        res.json({
            message:"Error"
        })
    })
}