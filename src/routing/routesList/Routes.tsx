import {ForgotPassword} from "@/pages/publicPages/forgotPassword/forgotPassword";
import {SignIn} from "@/pages/publicPages/signIn/signIn";
import {Decks} from "@/pages/decks";
import {EditProfileMainPage} from "@/pages/editProfilePages/editProfileMainPage/editProfileMainPage";
import {SignUp} from "@/pages/publicPages/signUp/signUp";
import {CheckEmail} from "@/pages/publicPages/checkEmail/checkEmailPage";
import {TestComponentsPage} from "@/pages/testPages/testComponentsPage";
import {CreateNewPasswordPage} from "@/pages/publicPages/createNewPassword/createNewPasswordPage";


export const paths = {
  SIGN_IN: '/sign_in',
  SIGN_UP: '/sign_up',
  FORGOT_PASSWORD: '/forgot_password',
  CHECK_EMAIL_PAGE: '/checkEmailPage',
  DECKS: '/decks',
  EDIT_MAIN_PROFILE: '/edit_main_profile',
  CREATE_NEW_PASSWORD: '/recover-password/:id',
}

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
const getButtonInfo = (routeName: string) => {
  return (routeName === 'login')
      ? {buttonText: 'Sign Up', navigateTo: paths.SIGN_UP}
      : {buttonText: 'Sign In', navigateTo: paths.SIGN_IN}
}
export const routesConfig: RouteConfigType[] = [

  {
    routeName: "login",
    path: paths.SIGN_IN,
    element: <SignIn/>,
    buttonInfo: getButtonInfo("login"),
  },
  {
    routeName: "forgot_password",
    path: paths.FORGOT_PASSWORD,
    element: <ForgotPassword/>,
    buttonInfo: getButtonInfo("forgot_password"),
  },
  {
    routeName: "create_new_password",
    path: paths.CREATE_NEW_PASSWORD,
    element: <CreateNewPasswordPage/>,
    buttonInfo: getButtonInfo("forgot_password"),
  },
  {
    routeName: "sign_up",
    path: paths.SIGN_UP,
    element: <SignUp/>,
    buttonInfo: getButtonInfo("sign_up"),
  },
  {
    routeName: "checkEmailPage",
    path: paths.CHECK_EMAIL_PAGE,
    element: <CheckEmail/>,
    buttonInfo: getButtonInfo("checkEmailPage"),
  },
  {
    routeName: "decks",
    path: paths.DECKS,
    element: <Decks/>,
    private: true,
  },
  {
    routeName: "edit_main_profile",
    path: paths.EDIT_MAIN_PROFILE,
    element: <EditProfileMainPage name={"Eric"} email={"as@gmail.com"}/>,
    private: true,
  },
   {
    routeName: "testComponentsPage",
    path: '/test_page',
    element: <TestComponentsPage/>,
    buttonInfo: getButtonInfo("testComponentsPage"),
  },


]