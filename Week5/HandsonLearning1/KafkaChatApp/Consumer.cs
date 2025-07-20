using System;
using Confluent.Kafka;

public class ConsumerDemo
{
    public static void ConsumeMessages()
    {
        var config = new ConsumerConfig
        {
            BootstrapServers = "localhost:9092",
            GroupId = "chat-consumer-group",
            AutoOffsetReset = AutoOffsetReset.Earliest
        };

        using var consumer = new ConsumerBuilder<Null, string>(config).Build();
        consumer.Subscribe("chat-messages");

        Console.WriteLine("Listening for messages (Ctrl+C to quit):");
        while (true)
        {
            var consumeResult = consumer.Consume();
            Console.WriteLine($"Received: {consumeResult.Message.Value}");
        }
    }
}
