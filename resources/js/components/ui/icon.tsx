// components/Icon.tsx
import React from 'react';
import * as LucideIcons from 'lucide-react';

// Get all keys (icon names) from LucideIcons for type checking
type LucideIconName = keyof typeof LucideIcons;

// Define the props for our Icon component
interface IconProps extends React.SVGProps<SVGSVGElement> {
    /**
     * The name of the Lucide icon to render (e.g., 'Home', 'Settings').
     * Must be one of the valid Lucide icon names.
     */
    name: LucideIconName;
    /**
     * Optional CSS classes to apply to the SVG.
     */
    className?: string;
    /**
     * Optional size of the icon in pixels. Defaults to 24.
     */
    size?: number | string;
    /**
     * Optional color of the icon. Defaults to 'currentColor'.
     */
    color?: string;
    /**
     * Optional stroke width of the icon. Defaults to 2.
     */
    strokeWidth?: number | string;
    /**
     * Optional fill color of the icon. Defaults to 'none'.
     */
    fill?: string;
    // We're extending React.SVGProps<SVGSVGElement> so other SVG attributes
    // like aria-label, etc., are automatically type-checked.
}

export const Icon: React.FC<IconProps> = ({
    name,
    className,
    size = 24,
    color = 'currentColor',
    strokeWidth = 2,
    fill = 'none',
    ...rest
}) => {
    // Assert the type of LucideIcons[name] to be a React.ElementType
    // This tells TypeScript that it's a valid React component.
    const LucideIcon = LucideIcons[name] as React.ElementType | undefined;

    if (!LucideIcon) {
        console.warn(`Icon "${name}" not found in LucideIcons.`);
        return null;
    }

    return (
        <LucideIcon
            className={className}
            size={size}
            color={color}
            strokeWidth={strokeWidth}
            fill={fill}
            {...rest}
        />
    );
};