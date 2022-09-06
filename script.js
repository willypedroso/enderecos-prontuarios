window.onload = function() {
	document.getElementById("pront").value = "";
	document.getElementById("pront").focus();
    }

    document.addEventListener('keypress', function(e){
	if(e.which == 13){
	   buscar();
	}
	}, false);

    var result = document.getElementById("result");

    function buscar() {
        var pront = document.getElementById("pront").value;
	
	document.getElementById("result").innerHTML = "";

	if(pront <= 0 || pront > 99999) {
	    alert("Valor inválido. Tente novamente.");
	} else if (pront >= 1 && pront <= 892) {
		result.innerHTML = "Sala: 1 | Armário: 1 | Prateleira: 1"	    
	} else if (pront >= 893 && pront <= 1859) {
		result.innerHTML = "Sala: 1 | Armário: 1 | Prateleira: 2"	    
	} else if (pront >= 1860 && pront <= 2869) {
		result.innerHTML = "Sala: 1 | Armário: 1 | Prateleira: 3"	    
	} else if (pront >= 2870 && pront <= 3656) {
		result.innerHTML = "Sala: 1 | Armário: 1 | Prateleira: 4"	    
	} else if (pront >= 3657 && pront <= 4436) {
		result.innerHTML = "Sala: 1 | Armário: 1 | Prateleira: 5"	    
	} else if (pront >= 4437 && pront <= 5323) {
		result.innerHTML = "Sala: 1 | Armário: 2 | Prateleira: 1"	    
	} else if (pront >= 5324 && pront <= 6026) {
		result.innerHTML = "Sala: 1 | Armário: 2 | Prateleira: 2"	    
	} else if (pront >= 6027 && pront <= 6878) {
		result.innerHTML = "Sala: 1 | Armário: 2 | Prateleira: 3"	    
	} else if (pront >= 6879 && pront <= 7680) {
		result.innerHTML = "Sala: 1 | Armário: 2 | Prateleira: 4"	    
	} else if (pront >= 7681 && pront <= 8582) {
		result.innerHTML = "Sala: 1 | Armário: 2 | Prateleira: 5"	    
	} else if (pront >= 8583 && pront <= 9499) {
		result.innerHTML = "Sala: 1 | Armário: 3 | Prateleira: 1"	    
	} else if (pront >= 9500 && pront <= 10371) {
		result.innerHTML = "Sala: 1 | Armário: 3 | Prateleira: 2"	    
	} else if (pront >= 10372 && pront <= 11317) {
		result.innerHTML = "Sala: 1 | Armário: 3 | Prateleira: 3"	    
	} else if (pront >= 11318 && pront <= 12157) {
		result.innerHTML = "Sala: 1 | Armário: 3 | Prateleira: 4"	    
	} else if (pront >= 12158 && pront <= 13048) {
		result.innerHTML = "Sala: 1 | Armário: 3 | Prateleira: 5"	    
	} else if (pront >= 13049 && pront <= 13838) {
		result.innerHTML = "Sala: 1 | Armário: 4 | Prateleira: 1"	    
	} else if (pront >= 13839 && pront <= 14587) {
		result.innerHTML = "Sala: 1 | Armário: 4 | Prateleira: 2"	    
	} else if (pront >= 14588 && pront <= 15220) {
		result.innerHTML = "Sala: 1 | Armário: 4 | Prateleira: 3"	    
	} else if (pront >= 15221 && pront <= 16175) {
		result.innerHTML = "Sala: 1 | Armário: 4 | Prateleira: 4"	    
	} else if (pront >= 16176 && pront <= 17122) {
		result.innerHTML = "Sala: 1 | Armário: 4 | Prateleira: 5"	    
	} else if (pront >= 17123 && pront <= 17969) {
		result.innerHTML = "Sala: 1 | Armário: 5 | Prateleira: 1"	    
	} else if (pront >= 17970 && pront <= 18940) {
		result.innerHTML = "Sala: 1 | Armário: 5 | Prateleira: 2"	    
	} else if (pront >= 18941 && pront <= 19965) {
		result.innerHTML = "Sala: 1 | Armário: 5 | Prateleira: 3"	    
	} else if (pront >= 19966 && pront <= 20843) {
		result.innerHTML = "Sala: 1 | Armário: 5 | Prateleira: 4"	    
	} else if (pront >= 20844 && pront <= 21740) {
		result.innerHTML = "Sala: 1 | Armário: 5 | Prateleira: 5"	    
	} else if (pront >= 21741 && pront <= 22871) {
		result.innerHTML = "Sala: 1 | Armário: 6 | Prateleira: 1"	    
	} else if (pront >= 22872 && pront <= 23905) {
		result.innerHTML = "Sala: 1 | Armário: 6 | Prateleira: 2"	    
	} else if (pront >= 23906 && pront <= 24997) {
		result.innerHTML = "Sala: 1 | Armário: 6 | Prateleira: 3"	    
	} else if (pront >= 24998 && pront <= 25653) {
		result.innerHTML = "Sala: 1 | Armário: 6 | Prateleira: 4"	    
	} else if (pront >= 25654 && pront <= 26299) {
		result.innerHTML = "Sala: 1 | Armário: 6 | Prateleira: 5"	    
	} else if (pront >= 26300 && pront <= 27149) {
		result.innerHTML = "Sala: 1 | Armário: 7 | Prateleira: 1"	    
	} else if (pront >= 27150 && pront <= 27489) {
		result.innerHTML = "Sala: 1 | Armário: 7 | Prateleira: 2"	    
	} else if (pront >= 27490 && pront <= 28355) {
		result.innerHTML = "Sala: 1 | Armário: 7 | Prateleira: 3"	    
	} else if (pront >= 28356 && pront <= 29426) {
		result.innerHTML = "Sala: 1 | Armário: 7 | Prateleira: 4"	    
	} else if (pront >= 29427 && pront <= 30586) {
		result.innerHTML = "Sala: 1 | Armário: 7 | Prateleira: 5"	    
	} else if (pront >= 30587 && pront <= 31752) {
		result.innerHTML = "Sala: 2 | Armário: 1 | Prateleira: 1"	    
	} else if (pront >= 31753 && pront <= 32767) {
		result.innerHTML = "Sala: 2 | Armário: 1 | Prateleira: 2"	    
	} else if (pront >= 32768 && pront <= 33777) {
		result.innerHTML = "Sala: 2 | Armário: 1 | Prateleira: 3"	    
	} else if (pront >= 33778 && pront <= 34449) {
		result.innerHTML = "Sala: 2 | Armário: 1 | Prateleira: 4"	    
	} else if (pront >= 34450 && pront <= 35467) {
		result.innerHTML = "Sala: 2 | Armário: 1 | Prateleira: 5"	    
	} else if (pront >= 35468 && pront <= 36411) {
		result.innerHTML = "Sala: 2 | Armário: 2 | Prateleira: 1"	    
	} else if (pront >= 36412 && pront <= 37366) {
		result.innerHTML = "Sala: 2 | Armário: 2 | Prateleira: 2"	    
	} else if (pront >= 37367 && pront <= 38171) {
		result.innerHTML = "Sala: 2 | Armário: 2 | Prateleira: 3"	    
	} else if (pront >= 38172 && pront <= 38885) {
		result.innerHTML = "Sala: 2 | Armário: 2 | Prateleira: 4"	    
	} else if (pront >= 38886 && pront <= 39668) {
		result.innerHTML = "Sala: 2 | Armário: 2 | Prateleira: 5"	    
	} else if (pront >= 39669 && pront <= 40457) {
		result.innerHTML = "Sala: 2 | Armário: 3 | Prateleira: 1"	    
	} else if (pront >= 40458 && pront <= 41238) {
		result.innerHTML = "Sala: 2 | Armário: 3 | Prateleira: 2"	    
	} else if (pront >= 41239 && pront <= 42059) {
		result.innerHTML = "Sala: 2 | Armário: 3 | Prateleira: 3"	    
	} else if (pront >= 42060 && pront <= 42922) {
		result.innerHTML = "Sala: 2 | Armário: 3 | Prateleira: 4"	    
	} else if (pront >= 42923 && pront <= 43943) {
		result.innerHTML = "Sala: 2 | Armário: 3 | Prateleira: 5"	    
	} else if (pront >= 43944 && pront <= 44988) {
		result.innerHTML = "Sala: 2 | Armário: 4 | Prateleira: 1"	    
	} else if (pront >= 44989 && pront <= 45959) {
		result.innerHTML = "Sala: 2 | Armário: 4 | Prateleira: 2"	    
	} else if (pront >= 45960 && pront <= 47085) {
		result.innerHTML = "Sala: 2 | Armário: 4 | Prateleira: 3"	    
	} else if (pront >= 47086 && pront <= 48233) {
		result.innerHTML = "Sala: 2 | Armário: 4 | Prateleira: 4"	    
	} else if (pront >= 48234 && pront <= 49519) {
		result.innerHTML = "Sala: 2 | Armário: 4 | Prateleira: 5"	    
	} else if (pront >= 49520 && pront <= 50899) {
		result.innerHTML = "Sala: 2 | Armário: 5 | Prateleira: 1"	    
	} else if (pront >= 50900 && pront <= 52269) {
		result.innerHTML = "Sala: 2 | Armário: 5 | Prateleira: 2"	    
	} else if (pront >= 52270 && pront <= 53702) {
		result.innerHTML = "Sala: 2 | Armário: 5 | Prateleira: 3"	    
	} else if (pront >= 53703 && pront <= 57939) {
		result.innerHTML = "Sala: 2 | Armário: 5 | Prateleira: 4"	    
	} else if (pront >= 54940 && pront <= 55840) {
		result.innerHTML = "Sala: 2 | Armário: 5 | Prateleira: 5"	    
	} else if (pront >= 55841 && pront <= 56607) {
		result.innerHTML = "Sala: 3 | Armário: 1 | Prateleira: 1"	    
	} else if (pront >= 56608 && pront <= 57410) {
		result.innerHTML = "Sala: 3 | Armário: 1 | Prateleira: 2"	    
	} else if (pront >= 57411 && pront <= 58189) {
		result.innerHTML = "Sala: 3 | Armário: 1 | Prateleira: 3"	    
	} else if (pront >= 58190 && pront <= 58999) {
		result.innerHTML = "Sala: 3 | Armário: 1 | Prateleira: 4"	    
	} else if (pront >= 59000 && pront <= 59810) {
		result.innerHTML = "Sala: 3 | Armário: 1 | Prateleira: 5"	    
	} else if (pront >= 59811 && pront <= 60600) {
		result.innerHTML = "Sala: 3 | Armário: 2 | Prateleira: 1"	    
	} else if (pront >= 60601 && pront <= 61449) {
		result.innerHTML = "Sala: 3 | Armário: 2 | Prateleira: 2"	    
	} else if (pront >= 61450 && pront <= 62295) {
		result.innerHTML = "Sala: 3 | Armário: 2 | Prateleira: 3"	    
	} else if (pront >= 62296 && pront <= 63279) {
		result.innerHTML = "Sala: 3 | Armário: 2 | Prateleira: 4"	    
	} else if (pront >= 63280 && pront <= 64236) {
		result.innerHTML = "Sala: 3 | Armário: 2 | Prateleira: 5"	    
	} else if (pront >= 64237 && pront <= 65041) {
		result.innerHTML = "Sala: 3 | Armário: 3 | Prateleira: 1"	    
	} else if (pront >= 65042 && pront <= 66012) {
		result.innerHTML = "Sala: 3 | Armário: 3 | Prateleira: 2"	    
	} else if (pront >= 66013 && pront <= 66931) {
		result.innerHTML = "Sala: 3 | Armário: 3 | Prateleira: 3"	    
	} else if (pront >= 66932 && pront <= 67618) {
		result.innerHTML = "Sala: 3 | Armário: 3 | Prateleira: 4"	    
	} else if (pront >= 67619 && pront <= 68137) {
		result.innerHTML = "Sala: 3 | Armário: 3 | Prateleira: 5"	    
	} else if (pront >= 68138 && pront <= 68926) {
		result.innerHTML = "Sala: 3 | Armário: 4 | Prateleira: 1"	    
	} else if (pront >= 68927 && pront <= 69696) {
		result.innerHTML = "Sala: 3 | Armário: 4 | Prateleira: 2"	    
	} else if (pront >= 69697 && pront <= 70500) {
		result.innerHTML = "Sala: 3 | Armário: 4 | Prateleira: 3"	    
	} else if (pront >= 70501 && pront <= 71447) {
		result.innerHTML = "Sala: 3 | Armário: 4 | Prateleira: 4"	    
	} else if (pront >= 71448 && pront <= 72313) {
		result.innerHTML = "Sala: 3 | Armário: 4 | Prateleira: 5"	    
	} else if (pront >= 72314 && pront <= 72980) {
		result.innerHTML = "Sala: 4 | Armário: 1 | Prateleira: 1"	    
	} else if (pront >= 72981 && pront <= 73592) {
		result.innerHTML = "Sala: 4 | Armário: 1 | Prateleira: 2"	    
	} else if (pront >= 73593 && pront <= 74256) {
		result.innerHTML = "Sala: 4 | Armário: 1 | Prateleira: 3"	    
	} else if (pront >= 74257 && pront <= 74950) {
		result.innerHTML = "Sala: 4 | Armário: 1 | Prateleira: 4"	    
	} else if (pront >= 74951 && pront <= 75689) {
		result.innerHTML = "Sala: 4 | Armário: 1 | Prateleira: 5"	    
	} else if (pront >= 75690 && pront <= 76518) {
		result.innerHTML = "Sala: 4 | Armário: 1 | Prateleira: 6"	    
	} else if (pront >= 76519 && pront <= 77348) {
		result.innerHTML = "Sala: 4 | Armário: 2 | Prateleira: 1"	    
	} else if (pront >= 77349 && pront <= 78259) {
		result.innerHTML = "Sala: 4 | Armário: 2 | Prateleira: 2"	    
	} else if (pront >= 78260 && pront <= 79301) {
		result.innerHTML = "Sala: 4 | Armário: 2 | Prateleira: 3"	    
	} else if (pront >= 79302) {
		result.innerHTML = "Sala: 4 | Armário: 2 | Prateleira: 4"	    
	}
	document.getElementById("pront").value = "";
	document.getElementById("pront").focus();	
    }