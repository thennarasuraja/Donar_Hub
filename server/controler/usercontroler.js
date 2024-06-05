import connection from '../configure/index.js'

export class UserControler{
    static creatuser(req,res){
        const user=req.body
        console.log(user,"dfgdgsdgg")
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
    static loginuser(req,res){
        const login=req.body
         console.log(user,"dfgdgsdgg")
        connection.query(`select * from user where email=${login.email} and password=${login.password}`,(err,result)=>{
            if (err) {
                console.log(err);

                return res.send("something error ");
            }
  
            return res.json({
                success:true,
                
                
            })
        })
    }

}