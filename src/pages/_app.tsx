import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Archivo } from "next/font/google";

const roboto = Archivo({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Adharvs children clinic</title>
        <meta
          name="description"
          content="Welcome to adharvs children clinic, a caring and compassionate pediatric clinic dedicated to the health and well-being of your little ones. Our experienced team of doctors and healthcare professionals provides high-quality medical care for children from newborns to adolescents. From routine check-ups and vaccinations to specialized treatments, we ensure that your child receives the best care in a comfortable, child-friendly environment. We understand the importance of making every visit a positive experience and are here to support your child's growth, development, and health every step of the way."
        />
        <meta
          name="keywords"
          content="pediatric care, children's health, kids' doctor, pediatric clinic, newborn care, vaccinations for children, children's wellness check-up, pediatric specialist, family-friendly pediatric care, child development support"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://getbootstrap.com/docs/5.3/assets/css/docs.css"
          rel="stylesheet"
        />

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

        {/* <!-- Canonical Tag (if applicable) --> */}
        {/* <link rel="canonical" href="https://www.example.com/pediatric-care" /> */}

        {/* <!-- Open Graph (for social media sharing) --> */}
        <meta
          property="og:title"
          content="Best Pediatric Care for Children at Adharvs children clinic"
        />
        <meta
          property="og:description"
          content="Discover top pediatric healthcare services at Adharvs children clinic, offering check-ups, vaccinations, and specialized care for children of all ages."
        />
        {/* <meta
          property="og:image"
          content="https://www.example.com/images/clinic.jpg"
        />
        <meta
          property="og:url"
          content="https://www.example.com/pediatric-care"
        /> */}

        {/* <!-- Twitter Card (for social media sharing) --> */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta
          name="twitter:title"
          content="Expert Pediatric Care at Adharvs children clinic"
        />
        <meta
          name="twitter:description"
          content="Providing personalized and professional pediatric services including wellness check-ups and vaccinations."
        />
        {/* <meta
          name="twitter:image"
          content="https://www.example.com/images/clinic.jpg"
        /> */}

        {/* <!-- Viewport Meta Tag (for mobile responsiveness) --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
