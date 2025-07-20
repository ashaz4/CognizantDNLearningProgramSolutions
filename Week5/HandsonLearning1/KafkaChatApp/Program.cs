using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        Console.Write("Type 'p' for Producer or 'c' for Consumer: ");
        var choice = Console.ReadLine();
        if (choice == "p")
            await ProducerDemo.ProduceMessages();
        else if (choice == "c")
            ConsumerDemo.ConsumeMessages();
        else
            Console.WriteLine("Invalid option.");
    }
}
