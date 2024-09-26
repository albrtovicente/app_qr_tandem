import React from "react";
import Layout from "./layout/layout";
import TablaUsuarios from "../pages/tablausuario";
function AdminUsuarios(){
return(
    <>
    <Layout>
    <h1>Lista de usuarios</h1>
    <TablaUsuarios url="http://localhost/api-qr-tandem/v1/list-users.php"></TablaUsuarios>
    </Layout>
    </>
)
}
export default AdminUsuarios