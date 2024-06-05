// import connection from "../configure/index.js";

export class DonationControler {
  static createdonation(req, res) {
    const donation = req.body;
    // connection.query("INSER INTO donation set ?", [donation], (err, result) => {
    //   if (err) {
    //     console.log("error");

    //     return res.send("somthing error ");
    //   }
    //   return res.json({
    //     success: true,
    //     data: result,
    //   });
    // });
  }
  static getdonation(req, res) {
    // connection.query(`SELECT user.userId,name, donation.donationId,donation.DonationName,COUNT(application.applicationId) as totalApplication from user LEFT JOIN donation ON user.userId=donation.userId LEFT JOIN application on donation.donationId=application.donationId GROUP BY donation.donationId,user.userId;
    // `,(err,results)=>{
    //     if(err){
    //         return res.send("something error")
    //     }
    //     console.log(results)
    //     const userIdget=[...new Set(results.map(result=>result.userId))]
    //     console.log(userIdget)
    //     const donorDetails=[];
    //     for(let i of userIdget){
    //         let donationdetails={
    //             userId:i,
    //             username:"",
    //             donation:[
    //             ]
    //         }
    //         donationdetails.donation=results.filter((value)=>{
    //             return value.userId==i
    //         })
    //         donationdetails.username=donationdetails.donation[0].name
    //         donorDetails.push(donationdetails)
    //     }
    //     console.log(donorDetails)
    //     return res.json({
    //         success:true,
    //         data:donorDetails
    //     })
    // })
  }
  static updatedonation(req, res) {
    const updatedata = req.body;
    console.log("fdgfdg");
    // connection.query(`UPDATE donation SET ${updatedata} WHERE id = ${updatedata.id}`,(err,result)=>{
    //     if(err){
    //         return res.send("something error")
    //     }
    //     return res.json({
    //         success:true,
    //         data:result
    //     })
    // })
  }
}
