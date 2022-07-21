import { Link } from "react-router-dom";
import {
    AiOutlineMail,
    AiOutlineShop,
    AiOutlineShopping,
    AiOutlineHeart,
} from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const CustomerMenu = ({ user, fontTransform, handleLogOut, textSize }) => {
    return (
        <>
            <li>
                <Link
                    to={`/my-profile/${user}`}
                    className={`justify-start font-bold hover:text-primary ${fontTransform} ${textSize}`}
                >
                    <span className="left-0 inset-y-0 flex items-center">
                        <MdPersonOutline
                            className="h-5 w-5 text-base"
                            aria-hidden="true"
                        />
                    </span>
                    my account
                </Link>
            </li>
            <li>
                <Link
                    to={`/my-orders/${user}`}
                    className={`justify-start font-bold hover:text-primary ${fontTransform} ${textSize}`}
                >
                    <span className="left-0 inset-y-0 flex items-center">
                        <AiOutlineShopping
                            className="h-5 w-5 text-base"
                            aria-hidden="true"
                        />
                    </span>
                    orders
                </Link>
            </li>
            <li>
                <Link
                    to={`/my-messages/${user}`}
                    className={`justify-start font-bold hover:text-primary ${fontTransform} ${textSize}`}
                >
                    <span className="left-0 inset-y-0 flex items-center">
                        <AiOutlineMail
                            className="h-5 w-5 text-base"
                            aria-hidden="true"
                        />
                    </span>
                    messages
                </Link>
            </li>
            <li>
                <Link
                    to={`/my-wishlist/${user}`}
                    className={`justify-start font-bold hover:text-primary ${fontTransform} ${textSize}`}
                >
                    <span className="left-0 inset-y-0 flex items-center">
                        <AiOutlineHeart
                            className="h-5 w-5 text-base"
                            aria-hidden="true"
                        />
                    </span>
                    saved items
                </Link>
            </li>
            <li>
                <Link
                    to={`/seller-register`}
                    className={`justify-start font-bold  hover:text-primary ${fontTransform} ${textSize} animate-bounce`}
                >
                    <span className="left-0 inset-y-0 flex items-center">
                        <AiOutlineShop
                            className="h-5 w-5 text-base"
                            aria-hidden="true"
                        />
                    </span>
                    become a seller
                </Link>
            </li>
            <li className="mt-3">
                <button
                    onClick={handleLogOut}
                    className={`group relative w-full flex justify-center btn btn-md btn-outline btn-error rounded-full uppercase`}
                >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <FiLogOut
                            className="h-5 w-5 text-base group-hover:opacity-70"
                            aria-hidden="true"
                        />
                    </span>
                    Log out
                </button>
            </li>
        </>
    );
};

export default CustomerMenu;
