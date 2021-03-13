import React from 'react';
import { useHistory } from 'react-router-dom';

const Links = () => {
  let history = useHistory();

  return (
    <div className="mb-3">
      <div onClick={() => history.push("/app/today")}>Today</div>
    </div>
  );
};

export default Links;