export const appRoutes = {
    root: "/",
    faq: "/frequently-asked-questions",
    press_releases: '/press-releases',
    inner_country: {
        static: '/country/:countryName',
        dynamic: (country) => (`/country/${country}`)
    },
    productPricing: "/product-and-pricig",
    loading: "/loading",

}


export const headerLinks = [
    { label: "Home", to: appRoutes.root },
    { label: "Products & Pricing", to: appRoutes.productPricing },
    { label: "Press Releases", to: appRoutes.press_releases },
    { label: "FAQ’s", to: appRoutes.faq },
];


