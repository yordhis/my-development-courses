const c = console.log

// clase principal del proyecto
class Usuario {
    constructor(name, lastname, email, edad){
        this.name = name
        this.lastname = lastname
        this.email = email
        this.edad = edad
    }

    // acciones del usaurio

    saludar(){
        return document.write(
            `<h1> hola mi nombre es ${this.name} </h1>`
        )

    
    }
}

// clase desendiente de la principal
class Worker extends Usuario{
    constructor(name, lastname, email, edad, profetion, exp, lang){
        super(name, lastname, email, edad)
        this.profetion = profetion
        this.exp = exp
        this.lang = lang

    }
}

// clase desendiente de la principal
class Student extends Usuario{
    constructor(name, lastname, email, edad, curso, active){
        super(name, lastname, email, edad)
        this.curso = curso
        this.active = active

    }
}

$usuario = new Usuario('Yordhis', 'Osuna', 'yordhis.10@gmail.com', 26)
$worker = new Worker('Juan', 'Perez', 'perez.10@gmail.com', 30, 'Ing. Informatico', 10, 'PHP')
$student = new Student('Junior', 'Quintero', 'quintero.10@gmail.com', 18, 'PHP desde cero', true)

c($usuario.saludar())
c($worker.saludar())
c($student.saludar())