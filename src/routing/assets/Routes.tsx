import {ForgotPassword} from "@/pages/publicPages/forgotPassword/forgotPassword";
import {SignIn} from "@/pages/publicPages/signIn/signIn";
import {Decks} from "@/pages/decks";
import {EditProfileMainPage} from "@/pages/editProfilePages/editProfileMainPage/editProfileMainPage";
import {SignUp} from "@/pages/publicPages/signUp/signUp";

type RouteConfigType = {
  path: string,
  element:  JSX.Element,
  private?: boolean
}
export const routesConfig: RouteConfigType[] = [
  {
    path: '/',
    element: <Decks />,
    private: true,
  },
  {
    path: '/login',
    element: <SignIn />,
  },
  {
    path: '/forgot_password',
    element: <ForgotPassword />,
  },
  {
    path: '/sign_up',
    element: <SignUp/>,
  },
  {
    path: '/decks',
    element: <Decks />,
    private: true,
  },
  {
    path: '/edit_main_profile',
    element: <EditProfileMainPage name = {"Eric"} email = {"as@gmail.com"} />,
    private: true,
  },
]