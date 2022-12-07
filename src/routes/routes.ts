const routes = {
    home:'/',
    login:'/login',
    register:'/register',
    account:'/account',
    projects:'/projects',
    project:(projectId?:string)=>(projectId?`/projects/:${projectId}`:'/projects/:projectId'),
    admin:{
        user:'/admin/user', 
    }

};
export default routes;