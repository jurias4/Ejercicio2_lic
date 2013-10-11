function buscarpalabras(char cadenabusca[], var &coincidencias, char similar[]){
	int conta;	
	char palabras[4][10]= {"Tablets","Iphones","Laptops","Ipods"};
	
	alert("entro");
	for(conta=0;conta<4;conta++){
			if(/cadenabuscar/.test(palabras[conta]))	
			alert("palabra encontrada");
		}//fin de ciclo for conta 
	
	
	}