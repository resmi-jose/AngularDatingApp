using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Data
{
   public  interface IAuthRepository
    {
        Task<User> Register(User user, string Password);
        Task<User> Login(string username, string Password);
        Task<bool> UserExists(string username);
    }
}
