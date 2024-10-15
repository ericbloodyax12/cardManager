import {Card} from "@/components/ui/card";
import {Typography} from "@/components/ui/typography";
import {Avatar} from "@/components/assets/Avatar/avatar";
import image010 from "../../assets/images/010.jpg"
import {EditIcon} from "@/components/assets/icons/componentSvg/editIcon";
import {Button} from "@/components/ui/button";
import {useStores} from "@/contexts/storeContext/storeContext";

import "./editProfileMain.scss";

export type EditProfilePropsType = {
    name: string;
    email: string
}
export const EditProfileMain = ({name = "Eric", email = "as@gmail.com"}: EditProfilePropsType) => {
    const { authStore } = useStores()!
    return (
        <Card className="cardContainer">
            <Typography variant={"h1"}>Personal Information</Typography>
            <Avatar size={86} initialImageUrl={image010}/>
            <div className="divContainer">
                <Typography variant={"h2"}>{name}</Typography>
                <button onClick={() => {
                    // здесь навигейт видимо на старничку где будем имя менять
                }}>
                    <EditIcon/>
                </button>
            </div>
            <Typography variant={"body2"}>{email}</Typography>
            <Button withIcon={true}
                    variant={"secondary"}
                    onClick={() => {
                        authStore?.logOut()
                    }}
            >
                <Typography variant={"subtitle2"}>Logout</Typography></Button>
        </Card>
    )
}