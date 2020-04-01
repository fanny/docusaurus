/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';

function BlogPostPage(props) {
  const {content: BlogPostContents} = props;
  const {frontMatter, metadata} = BlogPostContents;
  return (
    <Layout title={metadata.title} description={metadata.description}>
      {BlogPostContents && (
        <div className="container justify-content-center my-xl">
          <div className="row">
            <div className="col col-8">
              <BlogPostItem
                frontMatter={frontMatter}
                metadata={metadata}
                isBlogPostPage>
                <BlogPostContents />
              </BlogPostItem>
              {(metadata.nextItem || metadata.prevItem) && (
                <div className="my-xl">
                  <BlogPostPaginator
                    nextItem={metadata.nextItem}
                    prevItem={metadata.prevItem}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default BlogPostPage;
