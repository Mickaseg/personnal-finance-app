import {Toast, ToastProvider, ToastViewport} from "@/components/ui/toast";
import {useToast} from "@/components/hooks/use-toast";
import {CheckCircle2} from "lucide-react";

export const SuccessToast = ({message}) => {
    const {toast} = useToast();

    return (
        <Toast className="">
            <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500"/>
                <div className="text-green-800 text-sm font-medium">
                    {message}
                </div>
            </div>
        </Toast>
    );
};