import { SideMenu, Header } from "../index"
export const Layout = (props) => {
    return <div id="member-layout" class="page-container">
        <SideMenu />
        <div class="main-panel">
            <Header />
            {props.children}
        </div>
    </div>
}