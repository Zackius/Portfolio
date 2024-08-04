import { Terminal } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "./alert"


const AlertBox = () => {
  return (
    <Alert className="justify-center text-center text-blue-600">
    <AlertTitle>Hey!</AlertTitle>
    <AlertDescription>
      Am currently looking for my next role!
    </AlertDescription>
  </Alert>
  )
}
export default AlertBox


