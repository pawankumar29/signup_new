class response{

  success(res,status,msg,data){

    return res.json({
        status:status,
        message:msg,
        Data:data

    })

  }

  error(res,status,msg){
    return res.json({
        status:status,
        message:msg
    })
  }


}

export default response;