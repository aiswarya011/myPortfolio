import React, { useState } from 'react'
import { Breadcrumb } from "@chakra-ui/react"



const NavBars = ({ items }) => {
    const [selected, setSelected] = useState("aboutMe");

    const handleClick = (e, id) => {
        e.preventDefault();
        setSelected(id);
        // Optional: scroll into view or navigate
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <Breadcrumb.Root>
            <Breadcrumb.List>
                {items.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <Breadcrumb.Item>
                            {selected === item.id ? (
                                <Breadcrumb.CurrentLink>{item.title}</Breadcrumb.CurrentLink>
                            ) : (
                                <Breadcrumb.Link
                                    href={`#${item.id}`}
                                    onClick={(e) => handleClick(e, item.id)}
                                >
                                    {item.title}
                                </Breadcrumb.Link>
                            )}
                        </Breadcrumb.Item>
                        {index < items.length - 1 && <Breadcrumb.Separator />}
                    </React.Fragment>
                ))}
            </Breadcrumb.List>
        </Breadcrumb.Root>
    );
}

export default NavBars
