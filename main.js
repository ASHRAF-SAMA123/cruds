let title =document.getElementById("title")
let price =document.getElementById("price")
let taxes =document.getElementById("taxes")
let ads =document.getElementById("ads")
let discount =document.getElementById("discount")
let totel =document.getElementById("totel")
let count =document.getElementById("count")
let category =document.getElementById("category")
let submit =document.getElementById("submit")
let mod ="create"
let tem

function gettotel(){
    if (price.value != ""){
        let resuit = (+price.value + +taxes.value + +ads.value) + -discount.value
        totel.innerHTML=resuit
        totel.style.background="green"
    }else {
        totel.innerHTML = ""
        totel.style.background="red"
    }
}
let datapro 

if (localStorage.product != null){
    datapro=JSON.parse(localStorage.product)

}else{
    datapro = [ ]
}

submit.onclick=function(){
    let newpro =
    {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        totel:totel.innerHTML,
        count:count.value,
        category:category.value
    }
    if (mod==="create"){
        if (newpro.count>1){
            for(let i=0;i<newpro.count;i++){
                datapro.push(newpro)
            }
        }else{
            datapro.push(newpro)
        }
    }else{
    datapro[tem]=newpro
    mod="create"
     submit.innerHTML="create"
     count.style.display= "block"
    }
    localStorage.setItem("product" , JSON.stringify(datapro))
    claerdata()
    showdata()
}

function claerdata(){
    title.value =""
    price.value=""
    taxes.value=""
    ads.value=""
    discount.value=""
    totel.innerHTML=""
    count.value=""
    category.value=""
}

function showdata(){
   let table = ""

for( let i=0; i< datapro.length; i++){
    table +=`
    <tr>
    <td>${i}</td>
    <td>${datapro[i].title}</td>
    <td>${datapro[i].price}</td>
    <td>${datapro[i].taxes}</td>
    <td>${datapro[i].ads}</td>
    <td>${datapro[i].discount}</td>
    <td>${datapro[i].totel}</td>
    <td>${datapro[i].category}</td>
    <td><button onclick="updatedata(${i})">update</button></td>
    <td><button onclick="deleteitem(${i})">delete</button></td>
    </tr>
    `
}
document.getElementById("tbody").innerHTML= table
let delAll = document.getElementById("delAll")
if (datapro.length>0){
    delAll.innerHTML=   `
    <button onclick="deleteAll()" >deleteAll(${datapro.length})</button>` 
}else{
    delAll.innerHTML=""
}
gettotel()
}
showdata()

function deleteitem(i){
    datapro.splice(i,1)
    localStorage.product=JSON.stringify(datapro)
    showdata()

}

function deleteAll(){
  localStorage.product=
  datapro.splice(0)
  showdata()
}


function updatedata(i){
    title.value =datapro[i].title
    price.value=datapro[i].price
    taxes.value=datapro[i].taxes
    ads.value=datapro[i].ads
    discount.value=datapro[i].discount
    category.value=datapro[i].category
     gettotel()
     count.style.display= "none"
     submit.innerHTML="update"
     mod="update"
     tem = i
     scroll({
        top:0,
        behavior:"smooth"
     })
    
}


// let searchmood = "title"

// function getsearchmood(id){
// let search=document.getElementById("search")
//  if(searchmood = "title"){
//     searchmood = "title"
//  }else{
//     searchmood = "category"
//  }
//  search.focus
// }