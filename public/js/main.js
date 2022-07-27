const submitbtn=document.getElementById('submitbtn');
const city_name=document.getElementById('city_name');

//when city name is empty
const cityName=document.getElementById('cityName');
const temp_condition=document.getElementById('temp_condition');
const temp=document.getElementById('temp');

//using class in js by query selector
const dataHide=document.querySelector('.middle_layer ');
//const temp_in_cel=document.getElementById('temp_in_celtemp_in_cel');





const getInformation=async(event)=>{
    //not reload page
   event.preventDefault();  
   let cityvalue=city_name.value;


if(cityvalue===""){ 
//when city name is empty
cityName.innerText=`Please write the any City Name before serach `;
dataHide.classList.add('data_hide');
}else{
//when city having proper name
try {
    //using proper url
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=ec3556bc060bbd44c95da819dd0ef1ee&units=metric`;
const response=await fetch(url);
const data=await response.json();
//see details in ui
 const arrData=[data]
 temp.innerText=arrData[0].main.temp;
 //temp_in_cel.innerText=arrData[0].main.temp;
  //temp_condition.innerText=arrData[0].weather[0].main;    or
   const tempSituation=innerText=arrData[0].weather[0].main;
  cityName.innerText= `${arrData[0].name}, ${arrData[0].sys.country} `

//console.log(data);

//condition check sunny or cloudy
if(tempSituation=="Clear"){
    temp_condition.innerHTML="<i class='fas fa-sun' style='color:yellow;' ></i>";
}
else if(tempSituation=="Clouds"){
    temp_condition.innerHTML="<i class='fas fa-cloud' style='color:white;' ></i>";
}
else if(tempSituation=="Rain"){
    temp_condition.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;' ></i>";
}
else{
    temp_condition.innerHTML="<i class='fas fa-sun' style='color:white ;' ></i>";
}

const getToday=()=>{
    let weekday=new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";

    let CurrentTime=new Date();
    days=weekday[CurrentTime.getDay()];
    let day=document.getElementById('day');
    //return days;
    day.innerText=days;
}
getToday();


const getcurrentDate=()=>{
     
    let date=document.getElementById('today_date');
    var nowTime=new Date();
    var month=nowTime.getMonth()+1;
    var day=nowTime.getDate();
    var year=nowTime.getFullYear();

    date.innerText=`${day}/${month}/${year}`
   // console.log(day + "/" + month + "/" +year); 
};
  
getcurrentDate();


dataHide.classList.remove('data_hide');
} catch (error) {
  //any error catching in url or wrong city name
  cityName.innerText=`Please enter the proper City Name ` ; 
  dataHide.classList.add('data_hide');
}

}
}










submitbtn.addEventListener('click', getInformation);