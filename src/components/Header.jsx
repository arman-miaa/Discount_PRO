import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Header = () => {
    const { name } = useContext(AuthContext);
    
    return (
        <div>
            {name}
        </div>
    );
};

export default Header;