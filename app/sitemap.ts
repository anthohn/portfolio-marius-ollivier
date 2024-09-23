import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {

    return [
        {
            url: 'https://marius-ollivier.ch',
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: 'https://marius-ollivier.ch/projets',
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: 'https://marius-ollivier.ch/contact',
            lastModified: new Date(),
            priority: 0.8,
        }
    ]

}