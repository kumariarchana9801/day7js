const result=new XMLHttpRequest;
result.open("GET","https://restcountries.com/v3.1/all",true);
result.send();
result.onload=function(){
    const response=result.response;
    var responsedata=JSON.parse(response);
   // console.log(responsedata);
    const name=responsedata.filter((contry)=>contry.region==="Asia");
    name.forEach((cn1)=>console.log(cn1.name.common));
    const population1=responsedata.filter((pop)=>pop.population<200000);
    population1.forEach((cn2)=>console.log(cn2.name.common));
    responsedata.forEach(element => {console.log(`
      Name:${element.name.common}
   capital:${element.capital} 
      flag:${element.flag}`);});
   var populat=responsedata.map((x)=>x.population)
    let total=populat.reduce((a,r)=>{
        return a+r
    },0)
     console.log("Total population:" +total);
   const curr=responsedata.filter((cur)=>cur.currencies && cur.currencies.USD)
    curr.forEach((usd)=>console.log(usd.name.common))
}