const fs = require('fs')
const path = require('path')
const dateAndTime = new Date()
const date = dateAndTime.toLocaleDateString()

class UserInfo{
    constructor(amount, user, operation){
        this.user = user
        this.operation = operation
        this.amount = amount
        this.id = Date.now()
        this.date = date
        this.currency = "EUR"
        //this.result = result()
        //this.operation === "cash_in"?this.amount * 0.03:this.amount
    }

    

  resultIn(){
     if(this.operation === "cash_in" && this.amount * 0.0003 <= 5){
        return Math.ceil((this.amount*0.0003)*100)/100
     }else{
         return 5
     }
  }

  

  resultOut(){
       if(this.user === "juridical" && this.amount<=1.67){
         return 0.5
        }else if (this.user === "natural" && this.amount>1000){
            return Math.ceil(((this.amount - 1000)*0.003)*100)/100
        }else if (this.user === "natural" && this.amount<=1000){
            return 0
     }else{
         return Math.ceil((this.amount*0.003)*100)/100
     }
  }

    toJSON(){
        return ({
            date: this.date,
            user_id: this.id,
            user_type: this.user,
            type: this.operation,
            operation: {
                amount: this.amount,
                currency: this.currency
            },
            result: this.operation === "cash_in"?this.resultIn():this.resultOut()
        })
    }

    //metodas sudes duomenis i JSOn ir saugos atskirame faile
    async save(){
        const userinfo = await UserInfo.getAll()
        userinfo.push(this.toJSON())

        return new Promise((resolve, reject) =>{
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'userInfo.json'),
                JSON.stringify(userinfo),
                (err) => {
                    if(err){
                        reject(err)
                    }else{
                        resolve()
                    }
                }
            )
        })
    }

    static getAll(){
        return new Promise((resolve, reject) =>{
            fs.readFile(
                path.join(__dirname, '..' , 'data', 'userInfo.json'),
                'utf-8',
                (err, content) =>{
                    if(err) {
                        reject(err)
                    } else {
                        resolve(JSON.parse(content))
                        //resolve(content)
                    }
                }
            )
        }) 
    }
}

module.exports = UserInfo