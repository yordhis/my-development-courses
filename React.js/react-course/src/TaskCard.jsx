import './taskCard.css'

export function TaskCard({ ready }) {
    
    return ( 
        <div className="card" style={{ borderRadius: '10px' }}>
        <h1>Tarea 1</h1>
        <span className={ ready ? 'bg-green' : 'bg-red' }>
            { ready ? 'Tarea realizada' : 'Tarea Pendiente :D' }
        </span>
    </div>
    )

}