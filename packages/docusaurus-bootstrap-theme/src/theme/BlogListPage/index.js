/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

function BlogListPage(props) {
  const {metadata, items} = props;
  console.log(metadata, items);

  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center mt-xl">
        Hey
      </div>
    </div>
  )
}

export default BlogListPage;
