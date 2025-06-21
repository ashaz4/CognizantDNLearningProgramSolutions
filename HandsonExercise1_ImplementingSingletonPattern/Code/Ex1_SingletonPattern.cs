using System;
public sealed class Logger
{
    private static Logger? _instance;
    private static readonly object _lock = new object();
    private Logger()
    {
        Console.WriteLine("Logger instance created");
    }
    public static Logger Instance
    {
        get
        {
            lock (_lock)
            {
                _instance ??= new Logger();
                return _instance;
            }
        }
    }
    public void Log(string message)
        => Console.WriteLine($"[LOG] {DateTime.Now}: {message}");
}
class SingletonTest
{
    static void Main()
    {
        Logger logger1 = Logger.Instance;
        Logger logger2 = Logger.Instance;
        Console.WriteLine($"Same instance? {ReferenceEquals(logger1, logger2)}");
        logger1.Log("Hi Coach");
        logger2.Log("This is Ashaz, testing the singleton pattern.");
    }
}
