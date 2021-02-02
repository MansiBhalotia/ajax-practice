
var x=document.querySelectorAll(".link");
console.log(x)
       for(i=0;i<x.length;i++){
        var x1=x[i];

        x1.addEventListener("click",function(){
            var y=document.querySelector(".active");
            y.classList.remove("active");

            this.classList.toggle("active");
            
        });
       }

 var xhttpTest= new XMLHttpRequest();
 xhttpTest.open("GET",'https://superheroapi.com/api/2882172515440054/1',true);
 xhttpTest.send();
 xhttpTest.onreadystatechange=function(){
     if(this.readyState==4 && this.status==200){
     var resp=JSON.parse(this.responseText)
     console.log(resp);
     var test=document.querySelectorAll(".link");
     
    
    for(j=0;j<test.length;j++){
        var x1=test[j];
        x1.addEventListener("click",function(){
           var q=this.dataset.test;
           var p=this.dataset.test1;
           console.log(q);
            
           
         var h=document.querySelector("h3");
         if(this.dataset.test1!="null")
        h.innerHTML=resp[q][p];
         else
        h.innerHTML=resp[q];
        
         var h1=document.querySelector(".description");
         h1.innerHTML=this.dataset.test;
    
        });
}
}
}
    