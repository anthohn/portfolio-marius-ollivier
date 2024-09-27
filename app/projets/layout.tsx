import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Projets",
};

export default function ProjetsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}