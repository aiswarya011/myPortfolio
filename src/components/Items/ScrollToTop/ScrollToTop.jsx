import { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { RiArrowUpLine } from "react-icons/ri";


const ScrollToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return show ? (
        <Button
            onClick={scrollToTop}
            position="fixed"
            bottom="30px"
            right="30px"
            borderRadius="full"
            size="lg"
            colorScheme="teal"
            boxShadow="lg"
            zIndex="tooltip"
            p={4}
            minW="auto"
        >
            <RiArrowUpLine size={24} />
        </Button>


    ) : null;
};

export default ScrollToTop;
