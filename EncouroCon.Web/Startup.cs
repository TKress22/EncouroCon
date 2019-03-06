using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EncouroCon.Web.Startup))]
namespace EncouroCon.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
