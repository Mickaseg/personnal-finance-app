import {Alert, AlertDescription} from "@/components/ui/alert";
import {XCircle} from "lucide-react";

const ModalAlert = ({message}) => {
    if (!message) return null;

    return (
        <Alert variant="destructive" className="mb-4">
            <XCircle className="h-4 w-4"/>
            <AlertDescription className={"pt-1"}>{message}</AlertDescription>
        </Alert>
    );
};

export default ModalAlert;