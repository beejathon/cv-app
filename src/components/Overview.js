import React from "react";

const Overview = (props) => {
    const { general } = props;

    return (
      <div>
        {general.map((item) => {
          let text = item.toString();
          return <p key={item}>{text}</p>
        })}
      </div>
    );
}

export default Overview;