# Commission fees counter
### Description
A tool for commission fees calculation 
by depositing money into a financial company or withdrawing cash. 

Provides the ability to calculate what the commission fees will be depending on the type of user (natural person or legal person) and the transaction (cash_in or cash_out).

### Example

<!--![](C:\Users\aukkt\OneDrive\Stalinis kompiuteris\Counter.png)-->
<img src="C:\Users\aukkt\OneDrive\Stalinis kompiuteris\Counter.png" width="600" height="400" alt="example">

### Technologies

- Node.js 12.16.1.
- npm 6.13.4
- express 4.17.1
- express-handlebars 4.0.4
- nodemon 2.0.4
- bootstrap 4.5.0

### Instaliation instruction

> In command-line clone this Project with git command to your workspace. Open command-line and write this commands:

```html
git clone https://github.com/aukktv/commission_fees_counter.git
```

> Staring UI application with comands:

```html
npm install
npm start
```

> UI application will run on localhost:3000.

### Functionality

- In the "Enter amount of money" field, user enters the amount of money they want to deposit or withdraw
- Then chooses person type (natural or legal)
- Then chooses operation type (cash-in or cash-ot)
- And press "Count"
- Validation works: if at least one of the fields is not filled in, a message is received and no commissions are calculated
- If all fields are filled, in the field "You commission feeds will be: " user receives counted amount of commission fees
- With the link "Back to counter" user can go back to counter and repeat the action

