"use client"
import { AnimatePresence, motion } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';

type SidebarMenuProps = {
    hidden: boolean,
    openedIndex?: number,
    items: Menu[]
}
interface Menu {
    title: string,
    links: string[],
}


const menuItems = [
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

]
function SidebarMenu({ hidden = true, openedIndex, items = menuItems }: SidebarMenuProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isHidden, setIsHidden] = useState(true)
    const sidebarRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (openedIndex) {
            setOpenIndex(openedIndex)
        }
        setIsHidden(hidden)
        const handleClickOutside = (e: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
                setIsHidden(true)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <motion.div ref={sidebarRef} initial={false}
            animate={{ transform: isHidden ? "translateX(300px)" : "translateX(0px)" }}
            className='sidebar-container'>
            <button className='sidebar-button sidebar-button-icon' onClick={() => setIsHidden(!isHidden)} >
                <motion.div initial={false}
                    animate={{ transform: isHidden ? "translateX(-15px) scaleX(1)" : "translateX(0px) scaleX(-1)" }}>
                    <ArrowBackIosNewIcon />
                </motion.div>
            </button>

            <div className='sidebar-content'>
                <h1>Sidebar</h1>
                <div className='menus-container'>

                    {items.map((item, index) => (
                        <div key={item.title} className='menu-section'>
                            <button
                                className="menu"
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                            >
                                {item.title}
                            </button>
                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className='links'
                                    >
                                        {item.links.map((link) => (
                                            <Link href={link} key={link} className="menu-link">
                                                {link}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </motion.div >
    )
}

export default SidebarMenu