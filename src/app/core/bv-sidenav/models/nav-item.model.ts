export interface NavItemModel {
    label: string;
    icon?: string;
    route?: string;
    disabled?: boolean;
    children?: NavItemModel[];
    displayNavItem?: boolean;
    roles: string[];
}
