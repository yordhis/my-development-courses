/**
 * 
 * Barinas, 15-07-2022
 * video 3.7
 * 
 * profesor: Jonathan Mircha
 * 
 * @_POO_HERENCIA_PROTOTIPICA
 * 
 * 
 */ 

((c) => {

    c('******@_POO_HERENCIA_PROTOTIPICA*****')

    /* TELEFONO */
        function Telefono () {
            this.puedoLlamar = true
        }

        Telefono.prototype.llamar = function () {
                c('riiiiing riiiiing!!')
        }
    
    /* CELULAR */
        function Celular () {
            this.tengoCable = false
        }

        // aplicamos la herencia
        Celular.prototype = new Telefono()
        
        // metodos
        Celular.prototype.vibrar = function () {
                c('Vbbbbbrrr Vbbbbbrrr!!')
        }
   
    /* SMART PHONE */
        function SmartPhone () {
            this.tengoInternet = true
        }

        // aplicamos la herencia
        SmartPhone.prototype = new Celular()
        
        // metodos
        SmartPhone.prototype.conectar = function () {
                c('Conectado a internet!')
        }


     /* EJECUCION */
     
     const j2 = new SmartPhone()

     c(j2)
     c(j2.puedoLlamar)
     j2.llamar()
     c(j2.tengoCable)
     j2.vibrar()
     c(j2.tengoInternet)
     j2.conectar()
     
     const nokia5120 = new Celular()

     c(nokia5120)
     c(nokia5120.puedoLlamar)
     nokia5120.llamar()
     c(nokia5120.tengoCable)
     nokia5120.vibrar()
     /* esta ultima falla porque hereda solo celular y telefono no smartrPhone */
     c(nokia5120.tengoInternet) // nokia5120.conectar is not a function
     nokia5120.conectar()

    

    


})(console.log)