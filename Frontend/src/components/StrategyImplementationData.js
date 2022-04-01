
const SavedStrategyImplementation = async (id) =>{
    try{
    // const response = await fetch("localhost:8000/api/send/savedImplementation", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({strategyId : id})
    //   });
    //  var json;// = await response.json()
      
    //   if (!json.err){
    //     console.log("register Successfull")
    //   }
    //   else{
    //     console.log(json);
    //     alert("Invalid !!");
    //   }
    }catch(err){
        console.log(err)
    }

      
 var json = {
    "Id": 3,
    "Name": "Minimum Loss AARTI IND",
    "StockName": "NSE",
    "Ticker": "AARTIIND",
    "ExpiryDate": "2022-04-01T18:30:00.000Z",
    "userId": 2,
    "Description": "Buying Call and Put at almost same strike price",
    "InvestmentStrategySkeletonId": 5,
    "listInstruments": [
        {
            "Id": 3,
            "StrikePrice": 900,
            "Premium": 390,
            "Quantity": 4,
            "OptionSkeletonId": 5,
            "InvestmentStrategyId": 3,
            "Side": "BUY",
            "Type": "CALL",
            "InstrumentSkeletonId": 5,
            "segment": "option",
            "SkeletonId": 5
        },
        {
            "Id": 4,
            "StrikePrice": 910,
            "Premium": 370,
            "Quantity": 4,
            "OptionSkeletonId": 6,
            "InvestmentStrategyId": 3,
            "Side": "BUY",
            "Type": "PUT",
            "InstrumentSkeletonId": 6,
            "segment": "option",
            "SkeletonId": 6
        }
    ]
}

    
      var detail = {
        "id" : json.Id,
        "name" : json.StrategyName,
        "description" : json.ImplementationDescription,
        "exchange" : json.StockName,
        "ticker" : json.Ticker,
        "expiry" : json.ExpiryDate,
        "InvestmentStrategySkeletonId" : json.InvestmentStrategySkeletonId,
        "strategyName" : json.SkeletonName,
        "descriptionSkeleton" : json.SkeletonDescripion,
        "instruments" : [],
        
    }
    
    
    var list = json.listInstruments;
    var tempList = [];
    console.log("llist = ");
    console.log(list);
    for(let i in list){
        var insTemp = {
            "id" : list[i].Id, 
            "strikePrice" : list[i].StrikePrice,
            "premium" : list[i].Premium,
            "quantity" : list[i].Quantity,
            "segment" : list[i].segment,
            "side" : list[i].Side,
            "type" : list[i].Type,
            "price" : list[i].Price
        }
        tempList.push(insTemp);
        console.log(insTemp);
    }
    console.log(tempList);
    detail.instruments = tempList;
    console.log("instruments ================");
    console.log(detail.instruments);
    
    var arr = [];
    arr.push(detail);
    
    console.log("finall");
    console.log(arr);

    return arr;
}

/*
    Data Format

    [
        {
            id: 3
            InvestmentStrategySkeletonId: 5
            description: undefined
            descriptionSkeleton: undefined
            exchange: "NSE"
            expiry: "2022-04-01T18:30:00.000Z"
            name: undefined
            strategyName: undefined
            ticker: "AARTIIND"
            instruments:[
                {   
                    id: 3
                    premium: 390
                    price: undefined
                    quantity: 4
                    segment: "option"
                    side: "BUY"
                    strikePrice: 900
                    type: "CALL"
                },
                {
                    id: 4
                    premium: 370
                    price: undefined
                    quantity: 4
                    segment: "option"
                    side: "BUY"
                    strikePrice: 910
                    type: "PUT"
                }
            ]
        }
    ]

 */   
    
module.exports = SavedStrategyImplementation