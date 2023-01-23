


popuniPodatke=(podaci)=>{
    for(let i=0;i<podaci.length;i++)
    { brojac = 1 + i;
        //dodavanje reda u tabelu
        let red=document.createElement("tr");                
        document.getElementById("podaciTabela").appendChild(red);
        red.className = "broj";
           
            //dodavanje celije sa nazivom
            let naziv=document.createElement("td");            
            red.appendChild(naziv);
            naziv.innerHTML=podaci[i].naziv;
            

            //dodavanje celije sa kalorijama
            let kalorije=document.createElement("td");
            red.appendChild(kalorije);
            kalorije.innerHTML=podaci[i].kalorije;

            //dodavanje celije sa mastima
            let masti=document.createElement("td");
            red.appendChild(masti);
            masti.innerHTML=podaci[i].masti;

            let ugljikohidrati=document.createElement("td");
            red.appendChild(ugljikohidrati);
            ugljikohidrati.innerHTML=podaci[i].ugljikohidrati;

            let proteini=document.createElement("td");
           red.appendChild(proteini);
            proteini.innerHTML=podaci[i].proteini;
            
           
    }

}




podaci=()=>{
fetch('https://localhost:7125/api/Namjernice')
.then(
(response) =>{
  if (response.status !== 200) {
    console.log('Geska: ' +
      response.status);
    return;
  }
  response.json().then((data)=> {
    console.log(data);
            popuniPodatke(data);
  });
}
)

.catch((err) =>{
console.log('Fetch Greska :-S', err);
});
}

lajkaj=(IDproizvodaZaLike)=>{
let adresa ='https://localhost:7125/'+IDproizvodaZaLike;
fetch(adresa)
    .then(
        (response) =>{
            if (response.status !== 200) {
                console.log('Geska: ' +
                    response.status);
                return;
            }
            response.json().then((data)=> {
                console.log(data);
                document.getElementById("like"+IDproizvodaZaLike).innerHTML=data.likeCounter;
            });
        }
    )
    .catch((err) =>{
        console.log('Fetch Greska :-S', err);
    });
}


function search_food() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('broj');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="table";                 
        }
    }
}



/********************************************************** */


/********************************************************** */