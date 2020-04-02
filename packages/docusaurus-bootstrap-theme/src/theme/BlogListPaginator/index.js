/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';

function BlogListPaginator(props) {
  const {metadata} = props;
  const {previousPage, nextPage} = metadata;

  return (
    <nav className="row row-cols-2 no-gutters">
      <div className="text-left">
        {previousPage && (
          <Link to={previousPage}>
            <h5>
              &laquo; Newer Entries
            </h5>
          </Link>
        )}
      </div>
      <div className="text-right">
        {nextPage && (
          <Link to={nextPage}>
            <h5>
              Older Entries &raquo;
            </h5>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default BlogListPaginator;
