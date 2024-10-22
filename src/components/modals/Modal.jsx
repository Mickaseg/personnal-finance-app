import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';


const Modal = ({
                   isOpen,
                   onClose,
                   title,
                   description,
                   children,
                   footer
               }) => {

    return (

        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className={"sm:max-w-md"}>
                <DialogHeader>
                    <div className="flex items-center justify-between pb-3">
                        <DialogTitle className={"text-preset1"}>{title}</DialogTitle>
                    </div>
                    {description && (
                        <DialogDescription>
                            {description}
                        </DialogDescription>
                    )}
                </DialogHeader>
                <div className="space-y-4">
                    {children}
                </div>
                {footer && (
                    <DialogFooter>
                        {footer}
                    </DialogFooter>
                )}
            </DialogContent>
        </Dialog>
    );
};
export default Modal;

// Example usage
// const ExampleModalUsage = () => {
//     const [isOpen, setIsOpen] = React.useState(false);
//
//     return (
//         <div className="p-4">
//             <Button onClick={() => setIsOpen(true)}>
//                 Open Modal
//             </Button>
//
//             <Modal
//                 isOpen={isOpen}
//                 onClose={() => setIsOpen(false)}
//                 title="Example Modal"
//                 description="This is a simple modal example"
//                 footer={
//                     <div className="flex gap-2">
//                         <Button variant="outline" onClick={() => setIsOpen(false)}>
//                             Cancel
//                         </Button>
//                         <Button onClick={() => setIsOpen(false)}>
//                             Save Changes
//                         </Button>
//                     </div>
//                 }
//             >
//                 <p>Your modal content goes here</p>
//             </Modal>
//         </div>
//     );
// };
//
// export default ExampleModalUsage;