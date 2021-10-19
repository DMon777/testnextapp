import Menu from "./Menu";

function Layout( props ){

    return(
        <div className = "wrapper" >
            <Menu />
            {props.children}
        </div>
    )

}

export default Layout;