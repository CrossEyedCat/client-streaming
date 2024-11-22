import { Tab } from ".";

export default {
    title: "Components/Tab",
    component: Tab,
    argTypes: {
        status: {
            options: ["out", "reg"],
            control: { type: "select" },
        },
        size: {
            options: ["m", "s"],
            control: { type: "select" },
        },
    },
};

export const Default = {
    args: {
        status: "out",
        size: "m",
        className: {},
    },
};
