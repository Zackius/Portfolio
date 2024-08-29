import { House, BriefcaseBusiness, Construction , Newspaper } from 'lucide-react';

const MenuList = [
    {
        group: "Menu",
    
    items: [
    {
        link: "/",
        text: "Home",
        icon: <House/>
    },
    {
        link: "@/components/ui/skills",
        text: "Skills", 
        icon: <BriefcaseBusiness/>
    },
    {
        link: "@/components/ui/projects",
        text: "Projects", 
        icon: <Construction/>
    },
    {
        link: "@/components/ui/articles",
        text: "Articles", 
        icon: <Newspaper/>
    }]
}
]

export default MenuList