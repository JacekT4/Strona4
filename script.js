<<<<<<< HEAD
(function() {                          //Tak trzeba budować funkcje w js dla bezpieczeństwa żeby nie były dostepne globalnie
	var debug = false;           //(To + linia 4 i 8) Narzędzie deweloperskie do sprawdzania błędów, po wykonanej pracy mozna zmienic true na false. 
=======
(function() {
	var debug = true;                                                                     //narzedzie deweloperskie, po wykonanej pracy mozna zmienic true na false
>>>>>>> 4c0a53d1131ab3dda285eed689f26cd9d8a0fc64
	var usunZListy = function usunZListy(wiersz) {
		debug && console.log(wiersz);
		wiersz.remove();        //Funkcja do usuwania wierszy.
	}	
	var dodajDoListy = function dodajDoListy(lista, wartosc) {
		debug && console.log(lista, wartosc);
<<<<<<< HEAD
		wartosc = wartosc.replace(/[^a-z0-9 ]/gi,'');    //ZABEZPIECZNIE - RegEx //^wszystko rożne od tego po prawej // g - globalne // i - nie 	 	zwraca uwagi na wielkość liter
=======
		wartosc = wartosc.replace(/[^a-z0-9 ]/gi,'');                       //ZABEZPIECZNIE //^wszystko rożne od tego po prawej // gi - globalnie i i to 	nie 	 	zwraca uwagi na wielkość liter
>>>>>>> 4c0a53d1131ab3dda285eed689f26cd9d8a0fc64
		var  wiersz = document.createElement("li");                      //var - deklarowanie w danym bloku, lepiej let a najlepiej const
		var  usuwacz = document.createElement("button");
		wiersz.innerHTML = wartosc;
		usuwacz.innerHTML = "Usuń";                                      //stworzylismy do dodawania przycisku "Usuń"
		usuwacz.addEventListener("click", function() {
			usunZListy(wiersz);		
		});
		wiersz.appendChild(usuwacz);
		lista.appendChild(wiersz);
	}
	var dodaj = document.getElementById("dodaj");
	var lista = document.getElementById("lista");

<<<<<<< HEAD
	dodaj.addEventListener("click", function() {                           //jako drugi parametr funkcja która po kliknięciu doda warotość produktu
=======
	dodaj.addEventListener("click", function() {
>>>>>>> 4c0a53d1131ab3dda285eed689f26cd9d8a0fc64
		var wartosc = document.getElementById("produkt").value;
		dodajDoListy(lista, wartosc);
	});
})();