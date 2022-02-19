import { Helmet } from 'react-helmet-async';

const HelmetBlock = ({
  title,
  name,
  content,
  description,
  faviconUrl
}) => {
  return(
      <Helmet>
        <title>{ title }</title>
        <meta charSet="utf-8" />
        <meta name={ name } content={ content } description={ description }/>
        <link rel='icon' type='image/png' href={ faviconUrl } sizes='16x16' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Inter:wght@100;300;400;600;700&family=Jacques+Francois+Shadow&family=Yanone+Kaffeesatz:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width" />
      </Helmet>
  )
};

export default HelmetBlock