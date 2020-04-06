using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class TransactionModel
    {
        [Key]
        public int TransactionId { get; set; }

        [MaxLength(12)]
        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "Account Number")]
        [Column(TypeName = "nvarchar(12)")]
        public string AccountNumber { get; set; }

        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "Beneficary Name")]
        [Column(TypeName = "nvarchar(100)")]
        public string BeneficaryName { get; set; }

        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "Bank Name")]
        [Column(TypeName = "nvarchar(100)")]
        public string BankName { get; set; }
        
        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "SWIFT Cod")]
        [Column(TypeName = "nvarchar(11)")]
        public string SWIFTCod { get; set; }
        
        [Required(ErrorMessage = "This field is required")]
        public int Amount { get; set; }
        
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy}")]
        public DateTime Date { get; set; }
    }
}
