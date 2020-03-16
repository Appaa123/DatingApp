using System.Threading.Tasks;
using DatingApp.API.Model;

namespace DatingApp.API.Data
{
    public interface IAuthRepository     // This is REPOSITORY PATTERN which mediates between client and data
    {
         Task<User> Register(User username, string password);
         Task<User> Login(string username, string password);
         Task<bool> UserExists(string username);
         
    }
}