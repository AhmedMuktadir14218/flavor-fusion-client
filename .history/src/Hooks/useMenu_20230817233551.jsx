import { useEffect } from "react";
import { useState } from "react";

const useMenu = () => {

    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu()
            })
    }, [])

    return [menu,loading]
};

export default useMenu;