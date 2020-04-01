/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';

function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-6">
            <h3 className="display-5">Page Not Found</h3>
            <p className="lead">We could not find what you were looking for.</p>
            <p className="lead">
                Please contact the owner of the site that linked you to the
                original URL and let them know their link is broken.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
