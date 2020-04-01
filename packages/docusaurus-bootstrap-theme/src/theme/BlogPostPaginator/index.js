/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';

function BlogPostPaginator(props) {
  const {nextItem, prevItem} = props;

  return (
    <nav className="row row-cols-2 no-gutters">
      <div className="text-left">
        {prevItem && (
          <Link to={prevItem.permalink}>
            <span className="text-muted">Previous Post</span>
            <h6>
              &laquo; {prevItem.title}
            </h6>
          </Link>
        )}
      </div>
      <div className="text-right">
        {nextItem && (
          <Link to={nextItem.permalink}>
            <span className="text-muted">Next Post</span>
            <h6>
              {nextItem.title} &raquo;
            </h6>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default BlogPostPaginator;
