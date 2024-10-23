import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Define the type for menu items
const ActionDropdown = ({
                            children,
                            items,
                            align = "end",
                            className = "w-32"
                        }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent align={align} className={className}>
                {items.map((item, index) => (
                    <DropdownMenuItem
                        key={index}
                        onClick={item.onClick}
                        className={`cursor-pointer border-b-2 last:border-0 ${item.className || ''}`}
                        disabled={item.disabled}
                    >
                        {item.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ActionDropdown;