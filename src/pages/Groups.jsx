import React from "react";
import GroupElement from "../components/groupEl/GroupElement";
import Layout from "../components/Layout/Layout";
import groupList from "../data/groupList";
import { useGroups } from "../hooks/useData";

const Groups = () => {
  const normalizedGroups = useGroups(groupList);

  return (
    <Layout title="Топ 5 групп">
      <div className="group_cont">
        {normalizedGroups.map((el) => (
          <GroupElement
            key={el.id}
            id={el.id}
            group={el.group}
            img={el.img}
            pos={el.pos}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Groups;
