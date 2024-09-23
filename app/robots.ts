import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            }
        ],
        sitemap: 'https://marius-ollivier.ch/sitemap.xml'
    }
}