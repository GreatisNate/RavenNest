using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using RavenNest.SDK;
using RavenNest.SDK.Endpoints;

namespace RavenNest.UnitTests
{
    [TestClass]
    public class SDKUnitTests
    {
        [TestMethod]
        public async Task TestLogin()
        {
            //var client = new RavenNestClient(new ConsoleLogger(), new LocalRavenNestStreamSettings());
            //if (!await client.LoginAsync("zerratar", "zerratar"))
            //{
            //    Assert.Fail("Failed to login");
            //}
        }

        [TestMethod]
        public async Task TestLoginStartSession()
        {
            //var client = new RavenNestClient(new ConsoleLogger(), new LocalRavenNestStreamSettings());
            //if (await client.LoginAsync("zerratar", "zerratar"))
            //{
            //    if (!await client.StartSessionAsync(true))
            //    {
            //        Assert.Fail("Failed to start session");
            //    }

            //    if (!await client.EndSessionAsync())
            //    {
            //        Assert.Fail("Failed to end session");
            //    }

            //    return;
            //}

            //Assert.Fail("Failed to login");
        }
    }
}
