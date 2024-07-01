import {ForgotPassword} from "@/pages/publicPages/forgotPassword/forgotPassword";
import {SignIn} from "@/pages/publicPages/signIn/signIn";
import {Decks} from "@/pages/decks";
import {EditProfileMainPage} from "@/pages/editProfilePages/editProfileMainPage/editProfileMainPage";
import {SignUp} from "@/pages/publicPages/signUp/signUp";
import {CreateNewPassword} from "@/components/auth/createNewPassword/createNewPassword";
import {CheckEmail} from "@/pages/publicPages/checkEmail/checkEmailPage";
import {TestComponentsPage} from "@/pages/testPages/testComponentsPage";

export const SIGN_IN = '/sign_in';
export const SIGN_UP = '/sign_up';

type RouteConfigType = {
  routeName: string,
  path: string,
  element: JSX.Element,
  private?: boolean
  buttonInfo?: {
    buttonText: string,
    navigateTo: string,
  }
}
export type TButtonInfo = {
    buttonText: string;
    navigateTo: string
}
const getButtonInfo = (routeName: string) =>  {
  return (routeName === 'login')
  ? { buttonText: 'SignUp', navigateTo: SIGN_UP}
  : { buttonText: 'SignIn', navigateTo: SIGN_IN}
}
export const routesConfig: RouteConfigType[] = [

  {
    routeName: "login",
    path: SIGN_IN,
    element: <SignIn />,
    buttonInfo: getButtonInfo("login"),
  },
  {
    routeName: "forgot_password",
    path: '/forgot_password',
    element: <ForgotPassword />,
    buttonInfo: getButtonInfo("forgot_password"),
  },
  {
    routeName: "sign_up",
    path: SIGN_UP,
    element: <SignUp/>,
    buttonInfo: getButtonInfo("sign_up"),
  },
  {
    routeName: "checkEmailPage",
    path: '/checkEmailPage',
    element: <CheckEmail />,
    buttonInfo: getButtonInfo("checkEmailPage"),
  },
  {
    routeName: "decks",
    path: '/decks',
    element: <Decks />,
    private: true,
  },
  {
    routeName: "edit_main_profile",
    path: '/edit_main_profile',
    element: <EditProfileMainPage name = {"Eric"} email = {"as@gmail.com"} />,
    private: true,
  },
  {
    routeName: "createNewPassword",
    path: '/createNewPassword',
    element: <CreateNewPassword />,
    private: true,
  }, {
    routeName: "testComponentsPage",
    path: '/test_page',
    element: <TestComponentsPage />,
    private: false,
    buttonInfo: getButtonInfo("testComponentsPage"),
  },



]