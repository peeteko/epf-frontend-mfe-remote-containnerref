import { LanguageShortNames } from "src/app/models/language.model";

export enum PlatformTypes {
    SHOPIFY = 'SHOPIFY',
    PRESTASHOP = 'PRESTASHOP',
    MAGENTO = 'MAGENTO',
    WOOCOMMERCE = 'WOOCOMMERCE',
    LIGHTSPEED = 'LIGHTSPEED'
}

export enum PlatformDomainText {
    SHOPIFY = 'myshopify.com',
    PRESTASHOP = 'mypretashop.com',
    MAGENTO = 'megento.com',
    WOOCOMMERCE = 'woocommerce.com',
    LIGHTSPEED = 'lightspeed.com'
}


export enum ConnectionState {
    ATTEMPTED = 'ATTEMPTED',
    ESTABLISHED = 'ESTABLISHED',
}

export interface Connection {
    id: string;
    shopId: string;
    platformType: PlatformTypes;
    customerAccountID: string;
    state: ConnectionState;
    authorizationUrl: string | null;
    createdAt:  string;
    link:  string;
}

// Temporaray Interface for Available Online stores.
export interface PlatformInfo {
    platformType: PlatformTypes;
    isActive: boolean;
    isHidden?: boolean; // If this property not available, then consider isHidden as false
    imagePath: string;
    pdfLink?: {[k in LanguageShortNames]: string};
    titleKey: string;
    descriptionKey?: string;
}

//feature is not enabled for a user
export interface Configuration {
    epfEnabled: boolean;
}

