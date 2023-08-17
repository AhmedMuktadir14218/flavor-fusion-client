import { useEffect } from "react";
import { useState } from "react";

const useMenu = () => {

    const [menu, setMenu] = useState([]);
    const [menu, setloading] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false)
            })
    }, [])

    return [menu,loading]
};

export default useMenu;