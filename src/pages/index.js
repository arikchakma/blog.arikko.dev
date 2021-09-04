import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import BlogSection from '../components/sections/BlogSection';
import Bio from '../components/vegetables/Bio';

function IndexPage() {
  return (
    <Layout>
      <SEO title="A Frontend Chef" />
      <Bio />
      <BlogSection />
    </Layout>
  );
}

export default IndexPage;
