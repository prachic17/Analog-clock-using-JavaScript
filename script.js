const hourHand = document.querySelector('.hr');
const minHand = document.querySelector('.min');
const secHand = document.querySelector('.sec');


function setDate(){
	const now = new Date();
	const seconds = now.getSeconds();
	const secDegree = ((seconds/60)*360);
	secHand.style.transform= `rotate(${secDegree}deg)`;
     

    const minutes = now.getMinutes();
	const minDegree = ((minutes/60)*360);
	minHand.style.transform= `rotate(${minDegree}deg)`; 

	const hours = now.getHours();
	const hourDegree = ((hours/12)*360);
	hourHand.style.transform= `rotate(${hourDegree}deg)`; 


}
setInterval(setDate , 1000);
