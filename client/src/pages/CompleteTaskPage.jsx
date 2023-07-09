import { useLocation } from 'react-router-dom'
import CompleteTaskPopUp from "../components/CompleteTaskPopup"

const CompleteTaskPage = () => {
    const location = useLocation();
 const queryParams = new URLSearchParams(location.search)
  return (
    <div>
      <CompleteTaskPopUp task={queryParams.get("task")} coins={queryParams.get("coins")}/>
    </div>
  )
}

export default CompleteTaskPage