import React, { PureComponent, memo } from "react";

const Try = memo(({ tryInfo }) => {
  return (
    <div className="try">
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    </div>
  );
});

export default Try;
