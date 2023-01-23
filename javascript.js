      
      
      document.getElementById("frase").value ="";
      document.getElementById("fraseEncriptada").value ="";
      document.getElementsByClassName("copiarTexto")[0].style.display = "none";      
               

      function encriptar() {
              // Obtener la frase  del textarea proporcionada por el usuario
              let frase = document.getElementById("frase").value;
              var frase2=frase;
              var frase3=frase;

              if(frase === "") {
                alert("No hay nada para Encriptar!");
                return;
              
              }
              frase2 = frase2.replace(/ai/g, "a");
              frase2 = frase2.replace(/enter/g, "e");
              frase2 = frase2.replace(/imes/g, "i");              
              frase2 = frase2.replace(/ober/g, "o");
              frase2 = frase2.replace(/ufat/g, "u");

              frase3 = frase3.replace(/a/g, "ai"   );
              frase3 = frase3.replace(/e/g, "enter");
              frase3 = frase3.replace(/i/g, "imes" );
              frase3 = frase3.replace(/o/g, "ober" );
              frase3 = frase3.replace(/u/g, "ufat" );


            
              
              if(frase === frase2){
                     // Validar si la frase contiene letras mayúsculas, números, acento "´" y caracteres especiales.
                    
                     if (/[A-ZÁÉÍÓÚáéíóú0-9]/.test(frase)) {
                      alert("No se permite letras Mayúsculas \nNúmeros  y el uso del Acento");
                      document.getElementById("frase").value="";
                      return;
                    }

                    // Valida si la frase tiene caracteres especiales ignorando los siguientes  
                    if (/[^a-zA-Z0-9,\ ;\ !\ ñ\ \n . ]/g.test(frase)) {
                      alert("No se permite Caracteres Especiales");
                      document.getElementById("frase").value="";
                      console.log("La frase tiene caracteres especiales");
                      return;
                    } 
                    
                    
                    // Reemplazar las letras con las "llaves" de encriptación
                    
                    
                    frase = frase.replace(/e/g, "enter");
                    frase = frase.replace(/i/g, "imes" );
                    frase = frase.replace(/a/g, "ai"   );
                    frase = frase.replace(/o/g, "ober" );
                    frase = frase.replace(/u/g, "ufat" );

                    // Mostrar la frase encriptada en el textarea "fraseEncriptada"
                    document.getElementById("fraseEncriptada").value = frase;
                   
              }else{
                    if(frase2!==frase3){
                      alert("Texto ya ENCRIPTADO!");
                      return;
                    }
                   }  
              
                 
              


              // 
              document.getElementsByClassName("fraseEncriptada")[0].style.backgroundImage="none";
              document.getElementsByClassName("hTres")[0].style.display="none";
              document.getElementsByClassName("parrafo")[0].style.display="none";
              
              document.getElementsByClassName("copiarTexto")[0].style.display="block";
         
              
              //document.getElementById("frase").value="";  
             
              
            }
      
      function desencriptar() {
        
              // Obtener la frase encriptada del textarea "frase"
              let frase = document.getElementById("frase").value;
              var frase2=frase;

             
              // Reemplazar las "llaves" de encriptación con las letras originales
              
              frase = frase.replace(/enter/g, "e");
              frase = frase.replace(/imes/g, "i");
              frase = frase.replace(/ai/g, "a");              
              frase = frase.replace(/ober/g, "o");
              frase = frase.replace(/ufat/g, "u");

              // Mostrar la frase desencriptada en el textarea de "fraseEncriptada" si se cumple la condición
              if (frase2===frase){
                return;
              }else{               
                document.getElementById("fraseEncriptada").value = frase;
              }
              document.getElementsByClassName("fraseEncriptada")[0].style.backgroundImage="none";
              document.getElementsByClassName("hTres")[0].style.display="none";
              document.getElementsByClassName("parrafo")[0].style.display="none";
              
              document.getElementsByClassName("copiarTexto")[0].style.display="block"; 
             document.getElementById("frase").value = "";
      }
     
      function copiarTexto(fraseEncriptada) { 
        let textArea = document.getElementById(fraseEncriptada);
        let texto=textArea.value;           
        //document.getElementById("frase").value = "";

        
        
        if(textArea.value === "") {
                alert("No hay nada para copiar");

              
          } else {                                      
                    textArea.select();
                    navigator.clipboard.writeText(texto)   
                                    
                   
                                .then(() => {
                                  document.getElementById("frase").value = texto;
                                  document.getElementById("fraseEncriptada").value = "";
                                  alert('Texto copiado \ny a un click de DESENCRIPTAR!');
                                })
                                /*.catch(err => {
                                    alert('Error al copiar texto al portapapeles: ', err);
                                });*/
                 }
      }   
      