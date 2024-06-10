import connection from "../configure/index.js";

export class ApplicationControler {
  static create(req, res) {
    const application=req.body
    connection.query("INSERT INTO application SET ?",[application],(err,result)=>{
        if(err){
            console.log(err)
            return res.json({
            success:false,
    err
        })
        }
        return res.json({
            success:true,
    
        })
    })
  }
  static update(req, res) {
    const updatedata = req.body;
    connection.query(`UPDATE application SET status='${updatedata.status}' WHERE applicationId=${updatedata.application}`,(err,result)=>{
        if(err){
            console.log(err)
            return res.send("something error")
        }
        return res.json({
            success:true,
            data:result
        })
    })
  }
  static getapplication(req, res) {
    const studentId=req.query.studentId
    const donorId=req.query.donorId

let whereQuery='where 1=1'

if(studentId){
    whereQuery+=` And application.userId=${studentId}`
}
if(donorId){
    whereQuery+=` And donation.userId=${donorId}`
}


    connection.query(`SELECT application.*,user.name,donation.DonationName,eligible,(SELECT user.name FROM user WHERE donation.userId=user.userId) as donorName from application INNER join user on application.userId=user.userId INNER JOIN donation on application.donationId=donation.donationId ${whereQuery};`,(err,result)=>{
        if(err){
            console.log(err)
            return res.send("something error")
        }
        return res.json({
            success:true,
            data:result
        })
    })
  }
}
