import { Nav } from "../components/navbar"

export function Layout({children}){

    return(
    <>
    <Nav></Nav>
    {children}
    </>
    )
}
    