function fizzBuzz() {

    var results = [];
    clearResults();
    i = 1;
    text = "";
    while (i <= 100) {
        if (i % 3 === 0){
            results[i] = "fizz number: =" + i;
            var li = document.createElement("LI");                 
            var results = document.createTextNode(results[i]);         
            li.appendChild(results);                              
            document.getElementById("result").appendChild(li);   
       
           

        } 
        if (i % 5 === 0){
            results[i] = "buzz number: =" + i;
            var li = document.createElement("LI");                 
            var results = document.createTextNode(results[i]);         
            li.appendChild(results);                              
            document.getElementById("result").appendChild(li);   
          
          

        } 
        if (i % 3 === 0 && i % 5 === 0){
            results[i] = "fizzbuzz number: =" + i;
            var li = document.createElement("LI");                 
            var results = document.createTextNode(results[i]);         
            li.appendChild(results);                              
            document.getElementById("result").appendChild(li);   
          
          
         

        } 
     
        i++;
        
      }
}

function fibonacci() {

clearResults();
var number = [0, 1];
for(var i=number.length; i<10; i++) {
    number[i] = number[i-2] + number[i-1];
}
var li = document.createElement("LI");                 
var results = document.createTextNode(number);         
li.appendChild(results);                              
document.getElementById("result").appendChild(li);   

} 

function clearResults()  {

document.getElementById('result').innerHTML = "";
}

