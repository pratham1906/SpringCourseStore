const {createProxyMiddleware}=require('http-proxy-middleware')

module.exports=app=>{
    app.use(
        createProxyMiddleware("/courses",{
            target:"http://localhost:8080",
            changeOrigin:true
        })
    )
}