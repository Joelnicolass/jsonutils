import React from "react";

import Grid from "../../../../common/components/Grid/Grid";

import { LuGitCompare } from "react-icons/lu";
import { MdOutlineFormatAlignLeft } from "react-icons/md";
import { GiTransform } from "react-icons/gi";
import { VscJson } from "react-icons/vsc";
import CardMenu from "../../../../common/components/CardMenu/CardMenu";
import { useNavigate } from "react-router-dom";

const HomeView = () => {
  const navigate = useNavigate();

  return (
    <Grid>
      <CardMenu
        title={"compare"}
        delay={0}
        size={1}
        backgroud={{
          from: "from-sky-300",
          via: "via-blue-500",
          to: "to-purple-600",
        }}
        icon={(props) => <LuGitCompare {...props} />}
        onClicked={() => {
          navigate("/compare");
        }}
      />
      <CardMenu
        title={"format"}
        backgroud={{
          from: "from-yellow-300",
          via: "via-red-500",
          to: "to-pink-600",
        }}
        delay={0.2}
        size={2}
        icon={(props) => <MdOutlineFormatAlignLeft {...props} />}
      />
      <CardMenu
        title={"transform"}
        backgroud={{
          from: "from-violet-300",
          via: "via-purple-500",
          to: "to-pink-600",
        }}
        delay={0.4}
        size={2}
        icon={(props) => <GiTransform {...props} />}
      />
      <CardMenu
        title={"generate"}
        delay={0.6}
        size={1}
        backgroud={{
          from: "from-purple-300",
          via: "via-indigo-500",
          to: "to-blue-600",
        }}
        icon={(props) => <VscJson {...props} />}
      />
    </Grid>
  );
};

export default HomeView;
