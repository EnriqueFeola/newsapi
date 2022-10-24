import Head from "next/head";

export default function PageLayout({ children, title = "NewsApp" }) {
  return (
    <>
      <head>
        <title>{title}</title>
        <meta
          name="description"
          content="newsapp - the best app to read news"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <header>newsapi</header>
      <main>{children}</main>
      <style jsx>
        {`
          header {
            padding: 20px;
          }
        `}
      </style>
    </>
  );
}
