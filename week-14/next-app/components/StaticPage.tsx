export const StaticPage = () => {
    return <div className="flex justify-center">
        <div>
            <div className="text-center pt-10 text-3xl font-extrabold">Benifits of Static-Site rendering in next.js</div>
            <div className="text-justify pt-10 text-xl font-semibold text-slate-700 w-full max-w-screen-md">
                Static rendering in Next.js offers several key benefits that make it an attractive choice for
                building modern web applications. Firstly, it significantly enhances performance by generating
                HTML at build time, allowing pages to load faster as they are served directly from a CDN or
                web server without the need for server-side processing on each request. This leads to a smoother
                and quicker user experience. Secondly, static rendering improves scalability since the generated
                static files can be easily cached and distributed globally, handling high traffic with ease.
                Additionally, it enhances SEO (Search Engine Optimization) as search engines can easily crawl
                and index the pre-rendered HTML, resulting in better visibility and ranking. Moreover, static
                rendering ensures higher reliability and security because the pre-generated pages are less
                prone to server-side vulnerabilities and issues. Overall, static rendering in Next.js
                provides a robust solution for creating fast, scalable, and secure web applications
                with excellent performance and SEO benefits
            </div>
        </div>
    </div>
}