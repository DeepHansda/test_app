import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
const tabs = [
    { value: 'tab1', label: 'Dashboard', content: 'Welcome to your Dashboard!' },
    { value: 'tab2', label: 'Profile', content: 'Update your profile here.' },
    { value: 'tab3', label: 'Settings', content: 'Customize your settings.' },
    { value: 'tab4', label: 'Notifications', content: 'Manage your notifications.' },
    
];
export function AppTabs() {
    return (
        <Tabs defaultValue="tab1">
            <TabsList loop className="max-screen overflow-x-scroll">
                {tabs.map((item, index) => (
                    <TabsTrigger key={index} value={item.value}>{item.label}</TabsTrigger>

                ))}
                
            </TabsList>
            {tabs.map((value, index) => (
                <TabsContent className="px-4" key={index} value={value.value}>{value.content}</TabsContent>

            ))}

        </Tabs>

    )
}
