var plus=document.querySelectorAll('.plus')
var moin=document.querySelectorAll('.minus')
var p = document.getElementsByTagName('p')
var total= document.getElementById("total")
var prices=document.querySelectorAll('.price')
var like= document.getElementsByClassName("like")
var delet = document.querySelectorAll(".delete")
//  var unitPrice= document.querySelectorAll('.unitPrice') 











for (var i = 0; i < delet.length; i++) {
    delet[i].addEventListener('click',deletRow)
    
    
}

function changeCol(e){
   var  btn=e.target
    if(btn.style.color =='red'){
        btn.style.color ='#424242'
        // console.log( btn)
    }
    else{
        btn.style.color = 'red'
        
    }
}








for(var i=0; i<like.length; i++){
like[i].addEventListener('click', changeCol)
}



function sum(){
    var somme=0

    for(var i=0; i<prices.length; i++){

        somme+= Number(prices[i].innerHTML)

    }
    total.innerHTML=somme

    }
    







function  increment(e){
   var btn1=e.target
   var div = btn1.parentElement
   var tr =div.parentElement.parentElement
   var prices=tr.querySelector('.price')
   var unitPrice=Number(tr.querySelector('.unitPrice').innerHTML)
   var p = div.querySelector('p')
   
   p.innerHTML++
   prices.innerHTML=unitPrice*(p.innerHTML)
   sum()
   
//    console.log(prices)
}


for( var i=0; i<plus.length; i++)
    plus[i].addEventListener('click', increment)


function decrement(e){
    var btn2 = e.target
    var div = btn2.parentElement
    var p=div.querySelector('p')
    var tr= div.parentElement.parentElement
    // console.log('tr')
     var prices=tr.querySelector('.price')
    // console.log('prices')
    var unitPrice = Number(tr.querySelector(".unitPrice").innerHTML)
     console.log('unitPrice')

    if((p.innerHTML)>0){

        p.innerHTML--;
        prices.innerHTML=unitPrice*(p.innerHTML)
        sum()
        // console.log( prices.innerHTML)

    }
}









for(var i=0; i<moin.length; i++)
moin[i].addEventListener('click', decrement)




function deletRow(e){
    var cible=e.target
    var tr=cible.parentElement.parentElement.parentElement.parentElement
    console.log(tr);
    var price=document.querySelector(".price")
    price.innerHTML=0
    tr.remove()
    sum()
  
 }