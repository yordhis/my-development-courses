/* SCOPE */
// ES EL CONTEXTO DE DONDE EXISTE LAS VARIABLES
// EN JS EXISTE EL SCOPE A NIVEL DE BLOQUES

{
    let nivel1 = 10
    {
        c(nivel1)
    }
}

c(nivel1) // aqui no da una salida del dato ya que no tiene acceso