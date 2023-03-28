import { useNavigate } from "react-router-dom"
import { PrivateRoutes } from "../../models"

function ButtomHome() {

  const navigate = useNavigate()

  const handleClicHome = () =>{
      navigate(PrivateRoutes.HOME, { replace: true })
  }

  return (
    <div>
      <button onClick={handleClicHome}> Ir al home </button>
    </div>
  )
}
export default ButtomHome