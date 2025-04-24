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

    const newItem = new Item (req.body)

    newItem.save().then(
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

export function getGoodItem(req,res){
    res.json({
        message:"Good Item"
    })
}

export function searchItem(req,res){

    //const itemname = req.body.name;
    //get paramitaers

    const itemname = req.params.name;

    Item.find(
        {
            name : itemname
        }
    ).then(
        (items)=>{{
            res.json(items)
        }
    }).catch(()=>{
        res.json({
            message:"Error"
        })
    })
}