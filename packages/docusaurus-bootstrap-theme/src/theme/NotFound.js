/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


import React from 'React'

function NotFound() {
  return (
    <div class="container">
      <div class="d-flex flex-column justify-content-center mt-sm">
        <h1>Page Not Found</h1>
        <p>We could not find what you were looking for.</p>
        <p>
          Please contact the owner of the site that linked you to the
          original URL and let them know their link is broken.
        </p>
      </div>
    </div>
  )
}


export default NotFound;
