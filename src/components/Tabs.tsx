'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
    defaultTab?: string;
    className?: string;
}

const Tabs = ({ tabs, defaultTab, className = '' }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`tabs-container ${className}`}
        >
            {/* Tab Headers */}
            <div className="tabs-header">
                <div className="flex flex-wrap">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {tabs.find(tab => tab.id === activeTab)?.content}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Tabs;
