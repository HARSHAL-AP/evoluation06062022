async function loaddata(){
    try{
        let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`

        let res=await fetch(url)

        let data=await res.json();
        adda(data[0].vouchers)
       //console.log(data[0].vouchers)
    }catch(err){
        console.log(err)
    }
}
loaddata()


function adda(data){
    var voucherslist=document.getElementById("voucher_list")
    data.map(function(el){
        var box=document.createElement('div')
        let img=document.createElement('img')
        img.src=el.image
        let tital=document.createElement('h3')
        tital.innerText=el.name
        let price=document.createElement('p')
        price.innerText=el.price
        let addto=document.createElement('button')
        addto.innerText="Add To Purches"
    box.append(img,tital,price,addto)
    voucherslist.append(box)

    })
}


let arr=JSON.parse(localStorage.getItem("user"))||[]