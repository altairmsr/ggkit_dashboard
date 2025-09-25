import React from "react";
import { getStudentPosition } from "../../utils/studentUtils";
import style from "./GroupElement.module.scss";

const GroupElement = ({ id, group, img = null, pos }) => {
  const position = getStudentPosition(id);

  return (
    <div className={`${style.group} ${pos}`}>
      <h5>
        {position}. {group}
      </h5>
      {img && <img src={`/assets/${pos}.png`} alt={`${pos} medal`} />}
    </div>
  );
};

export default GroupElement;
