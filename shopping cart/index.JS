
var plus=document.querySelectorAll('.plus')
var munis=document.getElementsByClassName('minus')
// console.log(plus)
var p=document.querySelectorAll('p');
var total=document.getElementById('total')
var prices=document.querySelectorAll('.price')
var deletes=document.querySelectorAll('.delete')
function calcul(event){
    var btn1=event.target
    var div=btn1.parentElement
    var tr =div.parentElement.parentElement
    var unitPrice=Number(tr.querySelector(".unitPrice").innerHTML)
    var price=tr.querySelector(".price")
    // console.log(tr)
    // console.log(btn1);
    console.log(div);
    var p=div.querySelector('p')
    console.log(p);
    p.innerHTML++;
    price.innerHTML=p.innerHTML*unitPrice
    sum()
}

for(let i=0; i<plus.length; i++)
plus[i].addEventListener('click',calcul);


function somme(dec){
   var btn2=dec.target
   var div=btn2.parentElement
   var tr=div.parentElement.parentElement
   var unitPrice=Number(tr.querySelector('.unitPrice').innerHTML)
   var Price=tr.querySelector('.price')
   var p=div.querySelector('p');
      if((p.innerHTML)>0) {
          p.innerHTML--;
          Price.innerHTML=unitPrice*p.innerHTML
          sum()
      }
   

}
for(let i=0; i<munis.length; i++){


    munis[i].addEventListener('click',somme)
}




var like=document.getElementsByClassName("like")
console.log(like);

function chngColor(e){
    var btn = e.target
    // console.log(btn);
    if (btn.style.color=='red'){
        btn.style.color='#424242'     
    }
    else{
        btn.style.color='red'
    }
}

for(var i =0;i<like.length; i++){

    like[i].addEventListener('click',chngColor)
    }
    function sum(){
        var somme=0
        for (let i = 0; i <prices.length; i++) {
            somme+= Number(prices[i].innerHTML)
   
        }
        total.innerHTML=somme
       
    }

   function deletRow(e){
      var cible=e.target
      var tr = cible.parentElement.parentElement.parentElement.parentElement
    //   console.log(tr)
      var price=tr.querySelector('.price')
      price.innerHTML=0
      tr.remove()
      sum()
      
      




}

    for (var i = 0; i < deletes.length; i++) {
        
        deletes[i].addEventListener('click',deletRow)
    }

   

    



    
    
