import React from "react";

import Grid from "../../../../common/components/Grid/Grid";

import { LuGitCompare } from "react-icons/lu";
import { MdOutlineFormatAlignLeft } from "react-icons/md";
import { GiTransform } from "react-icons/gi";
import { VscJson } from "react-icons/vsc";
import CardMenu from "../../../../common/components/CardMenu/CardMenu";
import { useNavigate } from "react-router-dom";
import CardGrid from "../../../../common/components/CardGrid/CardGrid";

const HomeView = () => {
  const navigate = useNavigate();

  return (
    <Grid>
      <CardMenu
        title={"compare"}
        delay={0}
        col={1}
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
        col={2}
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
        col={2}
        icon={(props) => <GiTransform {...props} />}
      />
      <CardMenu
        title={"generate"}
        delay={0.6}
        col={1}
        backgroud={{
          from: "from-purple-300",
          via: "via-indigo-500",
          to: "to-blue-600",
        }}
        icon={(props) => <VscJson {...props} />}
      />

      <CardGrid
        col={3}
        row={1}
        borderSize={2}
        animation={{
          delay: 0.8,
          duration: 0.5,
          opacity: 0,
          y: 20,
        }}
      >
        <div
          className="flex flex-col justify-center items-center h-full w-full
          hover:bg-gray-600 hover:bg-opacity-50
          transition duration-300 ease-in-out
          
        "
        >
          <marquee>
            <span
              className="bg-gradient-to-r from-sky-300 via-blue-500 to-purple-600
            text-transparent bg-clip-text text-3xl"
            >
              ESPACIO DE PUBLICIDAD
            </span>
          </marquee>
        </div>
      </CardGrid>
    </Grid>
  );
};

export default HomeView;
