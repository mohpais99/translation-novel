import { Home, List } from "./views";

const listNovel = [
    {
        path: "/",
        name: "Beranda",
        component: Home,
        role: null
    },
    {
        path: "/daftar-novel",
        name: "Daftar Novel",
        component: List,
        role: null
    }
]

export default listNovel;