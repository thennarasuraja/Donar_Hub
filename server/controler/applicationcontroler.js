import connection from '../configure/index.js'


export class ApplicationControler{
    static create(req,res){
        const application=req.body
        connection.query("INSERT INTO applcation SET ?",[application],(err,result)=>{
            if(err){
                return res.send("something error")
            }
            return res.json({
                success:true,
                data:result
            })
        })
    }
    static update(req,res){
        const updatedata=req.body
        connection.query(`UPDATE application SET ${updatedata} WHERE id=${updatedata.id}`,(err,result)=>{
            if(err){
                return res.send("something error")
            }
            return res.json({
                success:true,
                data:result
            })
        })
    }
        static getapplication(req,res){
        connection.query("SELECT application.*,user.name,donation.* from application INNER join user on application.userId=user.userId INNER JOIN donation on application.donationId=donation.donationId;",(err,result)=>{
            if(err){
                return res.send("something error")
            }
            
            return res.json({
                success:true,
                data:result
            })
        })
    }
}