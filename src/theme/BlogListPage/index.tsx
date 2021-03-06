/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogListPaginator from '@theme/BlogListPaginator';
import type { Props } from '@theme/BlogListPage';
import BlogSidebar from '@theme/BlogSidebar';
import { ThemeClassNames } from '@docusaurus/theme-common';
import Translate from '@docusaurus/Translate';

function BlogListPage(props: Props): JSX.Element {
  const { metadata, items, sidebar } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <Layout title={title} description={blogDescription}>
      <div className="container mt-6">
        <div className="grid grid-cols-1 w-full text-center">
          <h1 className="font-ibm font-medium tracking-tight text-32 lg:text-64 leading-40 lg:leading-83 text-dark-tiny">
            <Translate id="career.slogan.one">Hãy cùng nhau</Translate>
          </h1>
          <h1 className="lg:inline font-ibm tracking-tight font-medium text-32 lg:text-64 leading-40 lg:leading-83 text-dark-tiny">
            <Translate id="career.slogan.two">tạo ra</Translate>{' '}
            <span className="font-ibm font-medium tracking-tight text-32 lg:text-64 leading-40 lg:leading-83 text-green-ml">
              <Translate id="career.slogan.three">
                những sản phẩm tuyệt với.
              </Translate>{' '}
            </span>
          </h1>
        </div>
        <main className="lg:px-10 grid grid-cols-12 gap-y-4 mt-8 lg:mt-26 lg:mb-26 mb-8">
          {items.map(({ content: BlogPostContent }) => (
            <BlogPostItem
              key={BlogPostContent.metadata.permalink}
              frontMatter={BlogPostContent.frontMatter}
              metadata={BlogPostContent.metadata}
              truncated={BlogPostContent.metadata.truncated}
            >
              <BlogPostContent />
            </BlogPostItem>
          ))}
          <BlogListPaginator metadata={metadata} />
        </main>
      </div>
    </Layout>
  );
}

export default BlogListPage;
