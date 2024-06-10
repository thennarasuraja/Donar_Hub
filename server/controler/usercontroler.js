import connection from "../configure/index.js";

export class UserControler {
  static creatuser(req, res) {
    const user = req.body;
    console.log(user, "dfgdgsdgg");
    connection.query(`INSERT INTO user SET ?`,[user],(err,result)=>{
        if (err) {
            console.log(err);

            return res.json({
            success:false,

        });
        }
        user.id=result.insertId;

        const Alldata={
            ...user,
            id:result.insertId
        }
        return res.json({
            success:true,
            data:Alldata

        })
    })
  }
  static loginuser(req, res) {
    const login = req.body;
    console.log(login, "dfgdgsdgg");
    connection.query(`select * from user where email='${login.email}' and password='${login.password}'`,(err,result)=>{
        if (err) {
            console.log(err)
              return res.json({
            success:false,
            message:"Something Wrong"
        })
        }
        if(result.length>0){
        return res.json({
            success:true,
            user:result[0]
        })
        }
        return res.json({
            success:false,
            message:"User Is Not Found"
        })
       
    })
  }
  static getuser(req,res){
    const userId=req.query.userId
    // const donorId=req.query.donorId
    

     connection.query(`SELECT * from user WHERE userId=${userId}`,(err,result)=>{
      if(err){
        return res.send("something error")
      }

      return res.json({
        success:true,
        userdata:result
      })
     })
  }
  static update(req,res){
    const updatedata=req.body
    console.log(updatedata)
    
    connection.query(`UPDATE user SET ? WHERE user.userId=${updatedata.userId}`,[updatedata],(err,result)=>{
      if(err){
        return res.send("something error")
      } 
      
      return res.json({
        success:true,
        message:'updated successfully'
      })
    })
  }
}
