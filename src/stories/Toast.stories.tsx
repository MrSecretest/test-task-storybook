import Toast from "@/components/Toast/Toast";
import { ComponentProps } from "react";
import { Meta, StoryObj } from '@storybook/nextjs'

type StoryProps = ComponentProps<typeof Toast>;

const meta: Meta<StoryProps> = {
    component: Toast,
    title: "Component/Feedback",
    parameters: {
        docs: {
            description: {
                component: "Reusable Toast component with two variations of animation"
            }
        }
    }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        message: "Test Message #1",
        duration: 3,
        animation: "slide"
    }
};
export const LongerDuration: Story = {
    args: {
        message: "Test Message #2",
        duration: 5,
        animation: "slide"
    }
};
export const FadeLongerDuration: Story = {
    args: {
        message: "Test Message #3",
        duration: 5,
        animation: "fade"
    }
};