
    palabra = new Object();
    descrip = new Object();
    direcc = new Object();

palabra[0] = 6

palabra[1] = ["iphone","3g"]
descrip[1] = "Iphone 3gs, Iphone4, Iphone5"
direcc[1] = "datos/Iphones.html"

palabra[2] = "laptop"
descrip[2] = "Toshiba Satellite C70, HP Pavilion g6-2319ss, SONY SVD13215PLB"
direcc[2] = "datos/Laptods.html"

palabra[3] = "ipod"
descrip[3] = "Ipod Shuffle, Ipod Touch, Ipod Classic"
direcc[3] = "datos/Ipods.html"

palabra[4] = "tablet"
descrip[4] = "Samsung Galaxy Tab 2 10.1,  Samsumg Galaxy Note 10.1, Samsumg Galaxy Tab 7.0"
direcc[4] = "datos/Tablets.html"

palabra[5] = "iph"
descrip[5] = "Iphone 3gs, Iphone4, Iphone5"
direcc[5] = "datos/Iphones.html"
    function checkDatabase() {

      var Found = false
      var Item = document.forms[0].searchfor.value.toLowerCase();

stats='toolbar=no,location=no,directories=no,status=no,menubar=no,height=300,width=300,'
stats += 'scrollbars=yes,resizable=yes' 
MsgBox = window.open ("","msgWindow",stats) 
MsgBox.opener = window;
MsgBox.opener.name = "opener";
MsgBox.document.write("<head><title>Resultados de la busqueda</title></head>");
MsgBox.document.write ("<body bgcolor=white text=black link=blue vlink=darkblue alink=blue><H2><CENTER><font face=arial>Resultados de la busqueda</CENTER></H2>") 
MsgBox.document.write ("<font size=3><b><center>Para el termino:  "+Item+"</center><hr width=50%></b></font>");
        for (var i=1; i <= palabra[0]; i++) {
        if(Item == palabra[i]) {
          Found = true;
         MsgBox.document.write ("<li><font face=arial><font size=2><b>"+descrip[i]+"<BR><A HREF="+direcc[i]+" target='opener'>Haz clic aqui</A></font></font>") 

        }
      }
      if(!Found)
MsgBox.document.write ("<H4>Palabra no encontrada por favor vuelva a intentar</H4>")
MsgBox.document.write ("<FORM><CENTER>") 
MsgBox.document.write ("<font size=2><font color=arial><INPUT type='button' value='cerrar' onClick = 'self.close()'></font></font>") 
MsgBox.document.write ("</CENTER></FORM>")

     }
