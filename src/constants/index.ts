import exp from "constants";
import { Computer, Facebook, Instagram, Linkedin, Moon, Sun, Twitter } from "lucide-react";
import path from "path";

export const themes = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Computer },
];

export const quickLinks = [
    {
        text: "Formulas Library", path: "/"
    }, {
        text: "Inventor Profiles", path: "/"
    }, {
        text: "Code Snippets", path: "/"
    }, {
        text: "Code Editor", path: "/"
    }, {
        text: "Blog/Resources", path: "/"
    }, {
        text: "Contact Us", path: "/"
    }
]

export const socialMediaLinks = [
    {
        text: "Linkdein", url: "/", icon: Linkedin
    }, {
        text: "Instagram", url: "/", icon: Instagram
    }, {
        text: "Facebook", url: "/", icon: Facebook,
    }, {
        text: "Twitter", url: "/", icon: Twitter
    }
]

export const supportLinks = [
    {
        text: "FAQs", path: "/"
    }, {
        text: "Help Center/Support", path: "/"
    },
]

export const categories = [
    {
        text: "Math Topics", path: "/"
    }, {
        text: "Physics Topics", path: "/"
    }
]