import React from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

export interface LinkProps extends RouterLinkProps {
    children: React.ReactNode;
    className?: string;
}

const Link: React.FC<LinkProps> = ({ to, children, className, ...rest }) => (
    <RouterLink to={to} className={className} {...rest}>
        {children}
    </RouterLink>
);

export default Link;