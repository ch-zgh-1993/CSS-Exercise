// 
// create by zgh
// 上色
// 
  
const divs = document.getElementsByTagName('div');

function getRandomColor(){
	let a = Math.random() * 255;
	let b = Math.random() * 255;
	let c = Math.random() * 255;
	return `rgb(${a}, ${b}, ${c})`;
}

//  上色
!function(){
	console.info(divs)
	let arr = [...divs];
	arr.forEach((el) => {
		if(el.className.indexOf('wrapper') === -1){
			el.style.background = getRandomColor();	
		}
	});
}();