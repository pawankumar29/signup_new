  import query from "../../models/DbQuery.js"
  import response from "../../Response_handler/response.js"
  import { statusCode,messages } from "../../core/constant.js";
  
  const responseObj=new response();
  const dbquery=new query();
  
class userController{

  postData=async(req,res)=>{

     try {
      const data=await  dbquery.save(req.body);
     
      if(data){
         res.render('login');
      }
      else{
         res.render('sorry');
      }
      //  if(data)
      // responseObj.success(res,statusCode.successCode,messages.success,data);
      //  else
      //  throw data;

       

     } catch (error) {
      return responseObj.error(res,statusCode.internalServerError,error.message)
     }
  

  }

  checkUser=async(req,res)=>{
      try {
        const data=await dbquery.find(req.body);

        if(data){
          res.render('about',{name:req.body.name})
          // responseObj.success(res,statusCode.internalServerError,messages.success,data);
        }
        else{
           
          // throw data.message;
        }
        
      } catch ( error) {
        res.render('sorry');
        // console.log(error);
        // return responseObj.error(res,statusCode.internalServerError,error.message)
      }
  }



}

export default userController;