import userModel from '../core/Schema.js'

class query{
  
     save=(body)=>{

        return new Promise((resolve,reject)=>{
          try{
            userModel.create(body,(err,data)=>{
                 if(data){
                    resolve(
                       
                        data
                    )
                 }
                 else{
                    throw err.message

                 }
            })
        }catch(err){
          
             reject(err);

        }


           


        })



    }

    find=(body)=>{
        return new Promise((resolve,reject)=>{
            try{
           userModel.findOne({$and:[{email:body.email},{name:body.name}]},(err,data)=>{
            
              if(data){
                resolve(data)
              }
              else{
                reject({message:"data Not Found"});
              }

           }) }
           catch(error){
               console.log("err1-->",error.message);
           }    
            
        })
    }

}


export default query;