//Перше завдання
/*
const blockX = document.getElementById('blockx');
const blockY = document.getElementById('blocky');
let c = blockY.textContent;
blockY.textContent = blockX.textContent
blockX.textContent = c
*/

//Друге завдання
/*
let fourth = document.getElementById("fourth");
let textElementContent = fourth.innerHTML;
const a = 2;
const b = 6;
function ploshcha(d1, d2, textElementContent){
	p = d1 * d2;
	fourth.innerHTML = `<p>${textElementContent}</p> <p>Площа прямокутника = ${p}.</p>`;;
}
ploshcha(a, b, textElementContent);
*/

//Третє завдання
/*document.getElementById('calculate').onclick = () => findMin();
if (document.cookie) hasCookies();

function findMin() {
	let form = document.forms.calculator;	// <form name="calculator"> element
	let elem = form.elements.numbers;		// <input name="numbers"> element
	let arr = elem.value.split(",").map(Number);
	let minNumber = Number.MAX_VALUE
	let maxNumber = 0
	
	for (i = 0; i < arr.length;i++) {		
		if (arr[i] < minNumber) minNumber=arr[i]
		if (arr[i] > maxNumber) maxNumber=arr[i]
	}
	
	alert(
		"Min: " + minNumber +"\n"+
		"Max: " + maxNumber
	);

	document.cookie = "Min=" + minNumber.toString();
	document.cookie = "Max=" + maxNumber.toString();
}
function hasCookies() {
	if (confirm(document.cookie + "\n" + "Save?")) {
		alert("Cookies are saved");
		let form = document.forms.calculator;	// <form name="calculator"> element
		form.elements.numbers.style.visibility = 'hidden'
		form.elements.calculate.style.visibility = 'hidden'
		// form.elements.numbers.remove()
		// form.elements.calculate.remove()
	} else {
		let cookies = document.cookie.split(";");
		for (let i = 0; i < cookies.length; i++) {
			let cookie = cookies[i];
			let eqPos = cookie.indexOf("=");
			let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
			document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
			document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		}
	}
}

*/

//Четверте завдання
/*
document.getElementsByTagName('body')[0].onload = () => {

    document.getElementById('fifth').style.fontWeight = localStorage.getItem("fontWeight")
    document.getElementById("checker").checked = (localStorage.getItem("radio") === 'true' )

    const cssStyles = localStorage.getItem('CSS-Styles')
    if (cssStyles === null) {
        localStorage.setItem('CSS-Styles','')
        return
    }
    const styles = cssStyles.split('$')
    for (let counter = 0; counter < styles.length; counter++) {
        if (styles[counter] === "null" || styles[counter].length < 2) {
            continue
        }
        const arr = styles[counter].split(';')
		const id =  arr[0]
		const style =  arr[1]
		const setting =  arr[2]
		addCssSetting(id,style,setting)
		alert(style)
	}
};

document.getElementById("save").onclick = () => {
   if (document.getElementById("checker").checked) {
       localStorage.setItem("fontWeight", 'bold');
       localStorage.setItem("radio", 'true');
       document.getElementById('fifth').style.fontWeight = 'bold'
	}
    else {
       document.getElementById('fifth').style.fontWeight = 'normal'
       localStorage.setItem("fontWeight", 'normal');
       localStorage.setItem("radio", 'false');
	}
}

document.getElementById("numbers").addEventListener('focus', event => {
	document.getElementById('fifth').style.fontWeight = 'bold'
} )
*/
