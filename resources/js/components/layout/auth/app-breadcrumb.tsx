import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { mainNavItems } from "@/data/navigation";
import { findBreadcrumbTrail } from "@/lib/utils";

export const AppBreadcrumb: React.FC = () => {

    const location = useLocation();
    const path = location.pathname;
    const trail = findBreadcrumbTrail(mainNavItems, path) || [];

    if (trail.length === 0) return null;

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {trail.map((item, idx) => {
                    const isLast = idx === trail.length - 1;

                    return (
                        <BreadcrumbItem key={item.title}>
                            <BreadcrumbLink asChild={!isLast}>
                                {isLast ? (
                                    <span className="inline-flex items-center gap-1 font-medium text-foreground">
                                        {item.title}
                                    </span>
                                ) : (
                                    <Link
                                        to={item.url || "#"}
                                        className="inline-flex items-center gap-1"
                                    >
                                        {item.title}
                                    </Link>
                                )}
                            </BreadcrumbLink>
                            {!isLast && <BreadcrumbSeparator />}
                        </BreadcrumbItem>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
};
