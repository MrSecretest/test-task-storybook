import Input from "@/components/Input/Input";
import { ComponentProps } from "react";
import {Meta, StoryObj} from '@storybook/nextjs'

type StoryProps = ComponentProps<typeof Input>;

const meta: Meta<StoryProps> = {
    component: Input,
    title: "Component/Input",
    parameters: {
        docs: {
            description:{
                component:"Reusable Input component that will let you set clearable and type props"
            }
        }
    }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        type: "text",
        clearable: false,
    }
};

export const Clearable: Story = {
    args: {
        type: "text",
        clearable: true,
    }
};

export const ClearableNumber: Story = {
    args: {
        type: "number",
        clearable: true,
    }
};

export const Password: Story = {
    args: {
        type: "password",
        clearable: false,
    }
};

export const PasswordClearable: Story = {
    args:{
        type: "password",
        clearable: true,
    }
}