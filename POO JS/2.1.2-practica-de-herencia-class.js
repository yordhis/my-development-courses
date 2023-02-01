const c = console.log

// TAREA CREAR TRES CLASES QUE EXTIENDA LA FORMA
// Y DIBUJEN UN CIRCULO, UN CUADRADO Y UN RECTANGULO QUE 
// SE DOS BESES MAS ANCHO DE LO ALTO

    class Forma{
        constructor(ancho, alto, color){
            this.ancho = ancho
            this.alto = alto
            this.color = color
        }

        // acciones
        dibujar(){
            document.write(
                `<div style="
                    width: ${this.ancho}px; 
                    height: ${this.alto}px; 
                    background: ${this.color};
                    border-radius: ${this.radio}%;
                    "> 
                    
                    ${this.ancho}
                
                   </div> <br>`
            )
        }
    }

    class Circulo extends Forma{
        constructor(ancho, alto, color, radio){
            super(ancho, alto, color)
            this.radio = radio
        }
    }
    
    class Redtangulo extends Forma{
        
        constructor(ancho, alto, color){
            // validando que el ancho sea dos vesce mas largo que lo alto
            let validateAncho = ancho/2
           

            if(validateAncho == alto){
                super(ancho, alto, color)
            }else{
                // alert("El ancho debe ser dos veces mas largo que el alto, vuelve a intentar")
                do{
                    // statement
                    ancho = prompt('El ancho debe ser dos veces mas largo que el alto, vuelve a intentar')
                    let validate = ancho/2

                } while (validate == alto);
                // hacemos la accion
                super(ancho, alto, color)
            }
        }
    }
    
    class Cuadrado extends Forma{
        constructor(lado, color){
            super(lado, lado, color)
        }
    }

    cuadrado = new Cuadrado(100, 'red' )   
    redtangulo = new Redtangulo(91, 45, 'blue')
    circulo = new Circulo(45, 45, 'green', 50)

    c(circulo.dibujar())
    c(redtangulo.dibujar())
    c(cuadrado.dibujar())