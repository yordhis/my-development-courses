/**
 * 
 * Barinas, 29-07-2022
 * video 6.4_6.5
 * 
 * profesor: Jonathan Mircha
 * 
 * @_PATRON_OBSERVADOR
 *  
 */
// Seguidores
((c) => {

    c('********@_PATRON_OBSERVADOR*******')

    class Click {
        constructor(){
            this.handlers = []
        }
    
        subscribe (fn) {
            this.handlers.push(fn)
        }
    
        unsubscribe (fn) {
            this.handlers = this.handlers.filter( item => (item !== fn) ? item : false )
        }
    
        fire (msg) {
            this.handlers.forEach( item => item(msg) )
        }
    }
    
    class Log {
        constructor(){
            this.log = ''
        }
    
        add (msg) {
            this.log += `${msg}\n`
        }
    
        show () {
            c(this.log)
            this.log = ''
        }
    }

    /**
     * @_Clase_Click representa al sujeto observable (pub)
     * 
     * @_Metodo_clickHandler es la funcion observadora (sub) este controlador
     *   subscribe y cancela la observacion, adicionalmente dispra los eventos 
     *   para visualizar las notificaciones de los mismos
     * 
     * @_Clase_Log es una clase auxiliar que recoge y muestra los resultados
     * 
     * 
     */

    // ejecutamos el sistema de subscripcion

    const click = new Click(),
    log = new Log(),
    clickHandler = item => log.add(`Dispara: ${item}`) // Funcion que procesa la subcripcion

    click.subscribe(clickHandler) // encendemos la subscripciones
    click.fire(' Seguidor 1 ') // Insertamos el item o subscriptor
    click.fire(' Seguidor 2 ')
    click.fire(' Seguidor 3 ')
    click.unsubscribe(clickHandler) // aqui se apaga el evento de subscripciones
    click.fire(' Seguidor 4 ') // esto no puede subscribirse
    click.fire(' Seguidor 6 ') // esto no puede subscribirse
    click.subscribe(clickHandler)
    click.fire(' Seguidor 5 ') // este si

    // visualizamos en console

    log.show()






})(console.log);

// Ejercicio King of Figthers  
((c) => {

    c('**************Ejercicio King of Figthers***********')

    // PUB (clase publicadora)
    class Player {
        constructor(){
            this.players = []
        }

        add (player) {
            this.players.push(player)
        }

        notify (obj) {
            this.players.forEach( player => player(obj) )
        }
    }

    // Sub (clase subscriptora)
    class Fight {
        constructor(fighter1, fighter2){
            this.players = new Player()
            this.fighter1 = fighter1
            this.fighter2 = fighter2
            this.round = 1
        }

        readyGo () {
            let match = {}
            
            if ( Math.floor( (Math.random() * 2) + 1) === 1 ) {
                match = {
                    winner:  this.fighter1,
                    looser:  this.fighter2,
                }
            } else {
                match = {
                    winner:  this.fighter2,
                    looser:  this.fighter1,
                }
            }
            match.round = this.round
            this.round++

            this.players.notify(match)
        }
    }


    const kof = new Fight('Juan', 'Luis')

    kof.players.add( obj => c(`Ronda: ${obj.round} \n Ganador: ${obj.winner} \n Perdedor: ${obj.looser}`) )
    kof.readyGo()
    kof.readyGo()
    kof.readyGo()
    

})(console.log)

