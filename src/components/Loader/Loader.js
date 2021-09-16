import React from 'react';

const Loader = () => {
    return (
        <div class="d-flex justify-content-center ">
            <button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
    </div>
    );
};

export default Loader;
