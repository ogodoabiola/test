import React, { useState } from 'react';
import axios from 'axios';
import './SEOAudit.css';

const SEOAudit = () => {
    const [url, setUrl] = useState('');
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResults(null);
        try {
            const response = await axios.post('/api/audit', { url });
            setResults(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="seo-audit-container">
            <header className="header">
                <h1>SEO Audit Tool</h1>
                <nav className="menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                <form onSubmit={handleSubmit} className="audit-form">
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter URL"
                        className="audit-input"
                    />
                    <button type="submit" className="audit-button">Audit</button>
                </form>
                {loading && <p>Loading...</p>}
                {results && (
                    <div className="results">
                        <h2>Results:</h2>
                        <div className="result-section">
                            <h3>SEO Meta Tags</h3>
                            <div className="result-content">
                                <MetaTagResult
                                    label="Title Tag"
                                    value={results.seoMetaTags?.title}
                                    benefit="The title tag is crucial for SEO as it tells search engines and users what the page is about. It appears in search engine results and browser tabs."
                                />
                                <MetaTagResult
                                    label="Meta Description Tag"
                                    value={results.seoMetaTags?.description}
                                    benefit="Provides a summary of the page content. It appears in search engine results and can influence click-through rates."
                                />
                                <MetaTagResult
                                    label="Meta Keywords Tag"
                                    value={results.seoMetaTags?.keywords}
                                    benefit="Historically used for SEO, but now largely ignored by search engines. Still, it can provide context for the page content."
                                />
                                <MetaTagResult
                                    label="Meta Robots Tag"
                                    value={results.seoMetaTags?.robots}
                                    benefit="Instructs search engines on how to crawl and index the page. It can prevent indexing of certain pages."
                                />
                                <MetaTagResult
                                    label="Canonical Tag"
                                    value={results.seoMetaTags?.canonical}
                                    benefit="Prevents duplicate content issues by specifying the preferred version of a webpage."
                                />
                                <MetaTagResult
                                    label="Viewport Meta Tag"
                                    value={results.seoMetaTags?.viewport}
                                    benefit="Ensures the webpage is responsive and displays correctly on different devices."
                                />
                                <MetaTagResult
                                    label="Twitter Card Meta Tags"
                                    value={results.seoMetaTags?.twitterCard?.length > 0 ? JSON.stringify(results.seoMetaTags.twitterCard, null, 2) : 'Not Present'}
                                    benefit="Enhances the appearance of shared links on Twitter by providing rich media previews."
                                />
                                <MetaTagResult
                                    label="Charset Meta Tag"
                                    value={results.seoMetaTags?.charset}
                                    benefit="Specifies the character encoding for the HTML document, ensuring proper display of text."
                                />
                                <MetaTagResult
                                    label="Author Meta Tag"
                                    value={results.seoMetaTags?.author}
                                    benefit="Provides information about the author of the webpage."
                                />
                                <MetaTagResult
                                    label="Refresh Meta Tag"
                                    value={results.seoMetaTags?.refresh}
                                    benefit="Automatically refreshes or redirects the page after a specified time."
                                />
                                <MetaTagResult
                                    label="Content-Type Meta Tag"
                                    value={results.seoMetaTags?.contentType}
                                    benefit="Specifies the MIME type and character encoding of the document."
                                />
                                <MetaTagResult
                                    label="Language Meta Tag"
                                    value={results.seoMetaTags?.language}
                                    benefit="Specifies the language of the document, aiding in localization and accessibility."
                                />
                                <MetaTagResult
                                    label="X-UA-Compatible Meta Tag"
                                    value={results.seoMetaTags?.xUaCompatible}
                                    benefit="Ensures compatibility with different versions of Internet Explorer."
                                />
                            </div>
                        </div>
                        <div className="result-section">
                            <h3>Readability Scores</h3>
                            <div className="result-content">
                                <ReadabilityResult
                                    label="Flesch-Kincaid Grade Level"
                                    value={results.readabilityScores?.fleschKincaidGrade}
                                    benefit="Indicates the U.S. school grade level required to understand the text. Lower scores indicate easier readability."
                                />
                                <ReadabilityResult
                                    label="Flesch-Kincaid Reading Ease"
                                    value={results.readabilityScores?.fleschKincaidReadingEase}
                                    benefit="Scores range from 0 to 100, with higher scores indicating easier readability. Scores below 30 are considered very difficult to read."
                                />
                                <ReadabilityResult
                                    label="Gunning Fog Index"
                                    value={results.readabilityScores?.gunningFog}
                                    benefit="Estimates the years of formal education needed to understand the text on a first reading. Lower scores indicate easier readability."
                                />
                            </div>
                        </div>
                        <div className="result-section">
                            <h3>Schema.org</h3>
                            {results.schema?.length > 0 ? (
                                results.schema.map((item, index) => (
                                    <CollapsibleSchema key={index} item={item} />
                                ))
                            ) : (
                                <p className="result-content not-present">Not Present</p>
                            )}
                        </div>
                        <div className="result-section opengraph-section">
                            <h3>OpenGraph</h3>
                            {results.opengraph?.length > 0 ? (
                                <div className="opengraph-container">
                                    <div className="opengraph-data">
                                        {results.opengraph.map((item, index) => (
                                            <div key={index} className="result-content">
                                                <strong>{item.property}:</strong> {item.content}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="opengraph-preview">
                                        <h4>Preview</h4>
                                        <div className="preview-card">
                                            <img src={results.opengraph.find(item => item.property === 'og:image')?.content} alt="Preview" />
                                            <div className="preview-content">
                                                <h5>{results.opengraph.find(item => item.property === 'og:title')?.content}</h5>
                                                <p>{results.opengraph.find(item => item.property === 'og:description')?.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <p className="result-content not-present">Not Present</p>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

const MetaTagResult = ({ label, value, benefit }) => (
    <div className="meta-tag-result">
        <strong>{label}:</strong> {value || 'Not Present'}
        <p className="meta-tag-benefit">{benefit}</p>
    </div>
);

const ReadabilityResult = ({ label, value, benefit }) => (
    <div className="readability-result">
        <strong>{label}:</strong> {value || 'Not Present'}
        <p className="readability-benefit">{benefit}</p>
    </div>
);

const CollapsibleSchema = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const schemaString = JSON.stringify(item.data, null, 2);
    const schemaLines = schemaString.split('\n');
    const previewLines = schemaLines.slice(0, 5).join('\n');

    return (
        <div className="result-content">
            <strong>Type:</strong> {item.type}
            <pre>{isExpanded ? schemaString : previewLines}</pre>
            {schemaLines.length > 5 && (
                <button onClick={toggleExpand} className="expand-button">
                    {isExpanded ? 'Show Less' : 'Show More'}
                </button>
            )}
        </div>
    );
};

export default SEOAudit;