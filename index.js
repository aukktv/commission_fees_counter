const express = require('express')
const exphbs = require('express-handlebars')
const UserInfo = require('./models/userInfo')
const app = express()

//objektas hendlebars konfiguravimui
const hbs = exphbs.create({
    defaultLayout: 'main-layout',
    extname: 'hbs'
})

//hbs modulis registruojamas expresse kaip irankis html psl atvaizdavimui
app.engine('hbs', hbs.engine)

//po registracijos dar butina nurodyti du param, cia jis jau naudojamas
app.set('view engine', 'hbs')
app.set('views', 'pages')

//uzregistruojame kataloga public kaip viesa, t.y rasant failo varda su /priekyje, express zino, kad jis
//yra siame kataloge (pvz '/style.css') - nereikia nurodyti viso kelio
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
   res.render('index')
})

app.post('/', async (req, res) =>{
    const userInfo = new UserInfo(req.body.amount, req.body.user, req.body.operation)
    await userInfo.save()
    res.redirect('/result')
    
})

app.get('/result', async (req, res) => {
const userInfo = await UserInfo.getAll()
const size = userInfo.length
const last = userInfo[size-1]

console.log(last)
    res.render('result', {last})
  
 })




const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})