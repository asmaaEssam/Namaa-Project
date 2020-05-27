require('dotenv').config()
const requiredEnvs=["DB_HOST","PORT","LINK"]
requiredEnvs.forEach(env => {
    if(!process.env[env])
{
    console.error(`${env} variable is required"`)
    process.exit();
}
});
module.exports={
    DB_HOST:process.env.DB_HOST,
    PORT:process.env.PORT,
    LINK:process.env.LINK
}