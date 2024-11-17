import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
    const { name } = useContext(AuthContext);
    
    return (
        <div>
            {name}
        </div>
    );
};

export default Navbar;