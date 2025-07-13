using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.IO;

namespace WebApplication1.Filters
{
    public class CustomExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException(ExceptionContext context)
        {
            var message = $"{DateTime.Now}: {context.Exception.Message}\n";
            File.AppendAllText("exceptions.log", message);

            context.Result = new ObjectResult("An internal server error occurred.")
            {
                StatusCode = 500
            };
            context.ExceptionHandled = true;
        }
    }
}
