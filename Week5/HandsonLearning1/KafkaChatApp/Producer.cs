using System;
using Confluent.Kafka;

public class ProducerDemo
{
    public static async Task ProduceMessages()
    {
        var config = new ProducerConfig
        {
            BootstrapServers = "localhost:9092"
        };

        using var producer = new ProducerBuilder<Null, string>(config).Build();

        Console.WriteLine("Type messages. Enter 'exit' to quit:");
        string message;
        while ((message = Console.ReadLine()) != "exit")
        {
            var result = await producer.ProduceAsync(
                "chat-messages", new Message<Null, string> { Value = message });
            Console.WriteLine($"Sent: {message}");
        }
    }
}
