const axios = require('axios');
const cheerio = require('cheerio');

async function checkSEO(url) {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const schema = $('script[type="application/ld+json"]').map((i, el) => {
        const json = JSON.parse($(el).html());
        return {
            type: json['@type'],
            data: json
        };
    }).get();

    const opengraph = $('meta[property^="og:"]').map((i, el) => ({
        property: $(el).attr('property'),
        content: $(el).attr('content')
    })).get();

    const seoMetaTags = {
        title: $('title').text(),
        description: $('meta[name="description"]').attr('content'),
        keywords: $('meta[name="keywords"]').attr('content'),
        robots: $('meta[name="robots"]').attr('content'),
        canonical: $('link[rel="canonical"]').attr('href'),
        viewport: $('meta[name="viewport"]').attr('content'),
        twitterCard: $('meta[name^="twitter:"]').map((i, el) => ({
            name: $(el).attr('name'),
            content: $(el).attr('content')
        })).get(),
        charset: $('meta[charset]').attr('charset'),
        author: $('meta[name="author"]').attr('content'),
        refresh: $('meta[http-equiv="refresh"]').attr('content'),
        contentType: $('meta[http-equiv="Content-Type"]').attr('content'),
        language: $('html').attr('lang'),
        xUaCompatible: $('meta[http-equiv="X-UA-Compatible"]').attr('content')
    };

    return {
        schema,
        opengraph,
        seoMetaTags
    };
}

module.exports = { checkSEO };