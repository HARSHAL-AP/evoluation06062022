function userdata(a,b,c,d){
    this.userName=a,
    this.userEmail=b,
    this.Addres=c,
    this.wallet=d
}


let arr=JSON.parse(localStorage.getItem("user"))||[]
//console.log(arr)
function aadddata(element){
element.preventDefault()
  
let form=document.getElementById("form")

let name=form.name.value
let email=form.email.value
let addres=form.address.value
let amount=form.amount.value

console.log(name,email,addres)

let userinfo=new userdata(name,email,addres,amount)
console.log(userinfo)
arr.push(userinfo)
localStorage.setItem("user",JSON.stringify(arr))
}
