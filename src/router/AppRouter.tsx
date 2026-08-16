import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import ComponentLayout from "../layouts/ComponentLayout";
import HomePage from "../pages/HomePage";
import ButtonPage from "../pages/components/ButtonPage";
import CardPage from "@/pages/components/CardPage";
import ModalPage from "@/pages/components/ModalPage";
import InputPage from "@/pages/components/InputPage";
import NavbarPage from "@/pages/components/NavbarPage";
import TooltipPage from "@/pages/components/TooltipPage";
import Carouselpage from "@/pages/components/Carouselpage";
import FormPage from "@/pages/components/FormPage";
import AboutPage from "@/pages/AboutPage";
import PricingSection from "@/pages/templates/PricingTemplate";


type Props = {};

const AppRouter = ({}: Props) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage/>  ,
        },
        {
          path: "templates",
          element: <PricingSection/>,
        },
        {
          path: "components",
          element: <ComponentLayout />,
          children: [
            {
              path: "button",
              element: <ButtonPage />,
            },
            {
              path: "card",
              element: <CardPage />,
            },
            {
              path: "modal",
              element: <ModalPage />,
            },
            {
              path: "input",
              element: <InputPage />,
            },
            {
              path: "navbar",
              element: <NavbarPage />,
            },
            {
              path: "tooltip",
              element: <TooltipPage/>,
            },
            {
              path: "carousel",
              element: <Carouselpage/>,
            },
            {
              path: "forms",
              element: <FormPage/>,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
