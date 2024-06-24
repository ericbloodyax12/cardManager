import {ForgotPassword} from "@/pages/publicPages/forgotPassword/forgotPassword";
import {SignIn} from "@/pages/publicPages/signIn/signIn";
import {Decks} from "@/pages/decks";
import {EditProfileMainPage} from "@/pages/editProfilePages/editProfileMainPage/editProfileMainPage";
import {SignUp} from "@/pages/publicPages/signUp/signUp";

type RouteConfigType = {
  name: string,
  path: string,
  element:  JSX.Element,
  private?: boolean
}
export const routesConfig: RouteConfigType[] = [
  {
    name: "main",
    path: '/',
    element: <Decks />,
    private: true,
  },
  {
    name: "login",
    path: '/login',
    element: <SignIn />,
  },
  {
    name: "forgot_password",
    path: '/forgot_password',
    element: <ForgotPassword />,
  },
  {
    name: "sign_up",
    path: '/sign_up',
    element: <SignUp/>,
  },
  {
    name: "decks",
    path: '/decks',
    element: <Decks />,
    private: true,
  },
  {
    name: "edit_main_profile",
    path: '/edit_main_profile',
    element: <EditProfileMainPage name = {"Eric"} email = {"as@gmail.com"} />,
    private: true,
  },
]