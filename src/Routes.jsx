import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import TODOwithtaskTwo from "pages/TODOwithtaskTwo";
import TODOwithtaskOne from "pages/TODOwithtaskOne";
import EDIT from "pages/EDIT";
import TODOwithtask from "pages/TODOwithtask";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "todowithtasktwo",
      element: <TODOwithtaskTwo />,
    },
    {
      path: "todowithtaskone",
      element: <TODOwithtaskOne />,
    },
    {
      path: "edit",
      element: <EDIT />,
    },
    {
      path: "todowithtask",
      element: <TODOwithtask />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
