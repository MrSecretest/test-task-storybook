import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";
import { ComponentProps } from "react";
import { Meta, StoryObj } from '@storybook/nextjs'

type StoryProps = ComponentProps<typeof SidebarMenu>;

const meta: Meta<StoryProps> = {
    component: SidebarMenu,
    title: "Component/Navigation",
    parameters: {
            docs: {
                description:{
                    component:"Sidebar menu with headers that can include multiple links"
                }
            }
    }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args:{
        items:[    
            { title: "Dashboard", links: ["Overview", "Stats", "Reports"] },
            { title: "Profile", links: ["Account", "Preferences", "Privacy"] },
            { title: "Settings", links: ["Theme", "Notifications", "Security"] },
            { title: "Analytics", links: ["Visitors", "Conversions", "Revenue"] },
            { title: "Projects", links: ["Active", "Archived", "Templates"] },
            { title: "Team", links: ["Members", "Roles", "Invitations"] },
            { title: "Messages", links: ["Inbox", "Sent", "Drafts"] },
            { title: "Calendar", links: ["Events", "Reminders", "Holidays"] },
            { title: "Tasks", links: ["Today", "Upcoming", "Completed"] },
            { title: "Files", links: ["Documents", "Images", "Videos"] },
            { title: "Support", links: ["FAQ", "Contact", "Tickets"] },
            { title: "Billing", links: ["Invoices", "Payments", "Subscriptions"] },
            { title: "Notifications", links: ["Email", "Push", "SMS"] },
            { title: "Integrations", links: ["Apps", "APIs", "Webhooks"] },
            { title: "Reports", links: ["Monthly", "Quarterly", "Yearly"] },
            { title: "Insights", links: ["Trends", "Benchmarks", "Forecasts"] },
            { title: "Marketing", links: ["Campaigns", "Leads", "Ads"] },
            { title: "Security", links: ["Passwords", "2FA", "Sessions"] },
            { title: "Feedback", links: ["Reviews", "Suggestions", "Surveys"] },
            { title: "Help", links: ["Documentation", "Guides", "Tutorials"] },
        ],
        hidden:true
    }
}

export const EmptyWithOpenedIndex: Story = {
    args:{
        
        openedIndex: 5
    }
}

export const Opened: Story = {
    args:{
        items:[    
            { title: "Dashboard", links: ["Overview", "Stats", "Reports"] },
            { title: "Profile", links: ["Account", "Preferences", "Privacy"] },
            { title: "Settings", links: ["Theme", "Notifications", "Security"] },
            { title: "Analytics", links: ["Visitors", "Conversions", "Revenue"] },
            { title: "Projects", links: ["Active", "Archived", "Templates"] },
            { title: "Team", links: ["Members", "Roles", "Invitations"] },
            { title: "Messages", links: ["Inbox", "Sent", "Drafts"] },
            { title: "Calendar", links: ["Events", "Reminders", "Holidays"] },
            { title: "Tasks", links: ["Today", "Upcoming", "Completed"] },
            { title: "Files", links: ["Documents", "Images", "Videos"] },
            { title: "Support", links: ["FAQ", "Contact", "Tickets"] },
            { title: "Billing", links: ["Invoices", "Payments", "Subscriptions"] },
            { title: "Notifications", links: ["Email", "Push", "SMS"] },
            { title: "Integrations", links: ["Apps", "APIs", "Webhooks"] },
            { title: "Reports", links: ["Monthly", "Quarterly", "Yearly"] },
            { title: "Insights", links: ["Trends", "Benchmarks", "Forecasts"] },
            { title: "Marketing", links: ["Campaigns", "Leads", "Ads"] },
            { title: "Security", links: ["Passwords", "2FA", "Sessions"] },
            { title: "Feedback", links: ["Reviews", "Suggestions", "Surveys"] },
            { title: "Help", links: ["Documentation", "Guides", "Tutorials"] },
        ],
        hidden:false,
        openedIndex: 2
    }
}
