import Link from 'next/link';


function Menu(){

    return(
        <ul>
            <li> <Link href = "/" > Main </Link></li>
            <li> <Link href = "/about-us" > About us </Link></li>

        </ul>
    );

}

export default Menu;