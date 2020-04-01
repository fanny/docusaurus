/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import {MDXProvider} from '@mdx-js/react';

import Link from '@docusaurus/Link';
import MDXComponents from '@theme/MDXComponents';

import styles from './styles.module.css';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function BlogPostItem(props) {
  const {
    children,
    frontMatter,
    metadata,
    truncated,
    isBlogPostPage = false,
  } = props;
  const {date, permalink, tags} = metadata;
  const {author, title} = frontMatter;

  const authorURL = frontMatter.author_url || frontMatter.authorURL;
  const authorTitle = frontMatter.author_title || frontMatter.authorTitle;
  const authorImageURL =
    frontMatter.author_image_url || frontMatter.authorImageURL;

  const renderPostHeader = () => {
    const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
    const match = date.substring(0, 10).split('-');
    const year = match[0];
    const month = MONTHS[parseInt(match[1], 10) - 1];
    const day = parseInt(match[2], 10);

    return (
      <header>
        <TitleHeading
          className={classnames('display-4 row mb-sm', styles.blogPostTitle)}>
          {isBlogPostPage ? title : <Link to={permalink}>{title}</Link>}
        </TitleHeading>
        <div className="row mb-2">
          <time dateTime={date} className={classnames('text-muted', styles.blogPostDate)}>
            {month} {day}, {year}
          </time>
        </div>
        <div className="row">
          <div className="col-xs">
          {authorImageURL && (
            <a
              href={authorURL}
              target="_blank"
              rel="noreferrer noopener">
              <img
                className="rounded-circle"
                style={{width: "50px"}}
                src={authorImageURL}
                alt={author}
              />
            </a>
          )}
          </div>
          <div className="col mb-2">
            {author && (
              <>
                <h4 className="mb-0">
                  <a href={authorURL} target="_blank" rel="noreferrer noopener">
                    {author}
                  </a>
                </h4>
                <small className="text-muted">{authorTitle}</small>
              </>
            )}
          </div>
        </div>
      </header>
    );
  };

  return (
    <article className={!isBlogPostPage ? 'mb-xl' : undefined}>
      {renderPostHeader()}
      <section className="row lead markdown">
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </section>
      {(tags.length > 0 || truncated) && (
        <footer className="row">
          {tags.length > 0 && (
            <div className="col-xs">
              <strong>Tags:</strong>
              {tags.map(({label, permalink: tagPermalink}) => (
                <Link
                  key={tagPermalink}
                  className="mx-2"
                  to={tagPermalink}>
                  {label}
                </Link>
              ))}
            </div>
          )}
          {truncated && (
            <div className="col text-right">
              <Link
                to={metadata.permalink}
                aria-label={`Read more about ${title}`}>
                <strong>Read More</strong>
              </Link>
            </div>
          )}
        </footer>
      )}
    </article>
  );
}

export default BlogPostItem;
