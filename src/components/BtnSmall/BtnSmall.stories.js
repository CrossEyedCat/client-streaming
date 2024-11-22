import { BtnSmall } from ".";

export default {
    title: "Components/BtnSmall",
    component: BtnSmall,
    argTypes: {
        style: {
            options: ["fill", "outline"],
            control: { type: "select" },
        },
    },
};

export const Default = {
    args: {
        icon: false,
        style: "fill",
        className: {},
    },
};
