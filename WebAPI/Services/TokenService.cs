using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Services
{
    public class TokenService : ITokenService
    {
        public TokenService(IConfiguration config)
        {

        }
        public string CreateToken(User user)
        {
            throw new NotImplementedException();
        }
    }
}
