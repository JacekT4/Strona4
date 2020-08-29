(function() {
	var debug = true;                                                                     //narzedzie deweloperskie, po wykonanej pracy mozna zmienic true na false
	var usunZListy = function usunZListy(wiersz) {
		debug && console.log(wiersz);
		wiersz.remove();
	}	
	var dodajDoListy = function dodajDoListy(lista, wartosc) {
		debug && console.log(lista, wartosc);
		wartosc = wartosc.replace(/[^a-z0-9 ]/gi,'');                       //ZABEZPIECZNIE //^wszystko rożne od tego po prawej // gi - globalnie i i to 	nie 	 	zwraca uwagi na wielkość liter
		var  wiersz = document.createElement("li");                      //var - deklarowanie w danym bloku, lepiej let a najlepiej const
		var  usuwacz = document.createElement("button");
		wiersz.innerHTML = wartosc;
		usuwacz.innerHTML = "Usuń";
		usuwacz.addEventListener("click", function() {
			usunZListy(wiersz);		
		});
		wiersz.appendChild(usuwacz);
		lista.appendChild(wiersz);
	}
	var dodaj = document.getElementById("dodaj");
	var lista = document.getElementById("lista");

	dodaj.addEventListener("click", function() {
		var wartosc = document.getElementById("produkt").value;
		dodajDoListy(lista, wartosc);
	});
})();
