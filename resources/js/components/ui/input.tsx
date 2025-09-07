import * as React from "react"
import { cn } from "@/lib/utils"
import * as LucideIcons from 'lucide-react';
import { Icon } from "./icon";

type InputProps = React.ComponentProps<"input"> & {
    iconProps: {
        icon?: keyof typeof LucideIcons;
        iconPositon?: "left" | "right";
        iconContainerProps?: React.HTMLAttributes<HTMLDivElement>;
    }
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, iconProps = {}, ...props }, ref) => {
        return (
            <div className="relative w-full flex items-center gap-1.5 justify-start border rounded-sm">
                {iconProps.icon && iconProps.iconPositon === "left" && (
                    <div className="inset-y-0 flex items-center pl-3 pointer-events-none">
                        <Icon name={iconProps.icon} size={16} />
                    </div>
                )}

                <input
                    type={type}
                    className={cn(
                        "h-10 w-full focus:ring-0 focus:outline-0",
                        className
                    )}
                    ref={ref}
                    {...props}
                />

                {iconProps.icon && iconProps.iconPositon === "right" && (
                    <div className="inset-y-0 flex items-center pl-3 pointer-events-none">
                        <Icon name={iconProps.icon} size={16} />
                    </div>
                )}
            </div>
        )
    }
)
Input.displayName = "Input"

export { Input }
