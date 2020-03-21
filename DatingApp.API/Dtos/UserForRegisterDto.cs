using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(10,MinimumLength=4,ErrorMessage="You must specify password between4 and 8 characters long")]
        public string Password { get; set; }
    }
}