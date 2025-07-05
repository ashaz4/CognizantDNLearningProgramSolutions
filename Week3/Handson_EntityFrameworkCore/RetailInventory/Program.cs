using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

class Program
{
    static async Task Main(string[] args)
    {
        using var context = new AppDbContext();

        // 1. Retrieve all products and print them with their category
        Console.WriteLine("All Products:");
        var products = await context.Products.Include(p => p.Category).ToListAsync();
        foreach (var p in products)
            Console.WriteLine($"{p.Name} - ₹{p.Price} ({p.Category?.Name})");

        Console.WriteLine();

        // 2. Find a product by ID (for example, ID = 1)
        var product = await context.Products.FindAsync(1);
        if (product != null)
            Console.WriteLine($"Found by ID 1: {product.Name} - ₹{product.Price}");
        else
            Console.WriteLine("No product found with ID 1.");

        Console.WriteLine();

        // 3. Find the first product with price > 50000
        var expensive = await context.Products.FirstOrDefaultAsync(p => p.Price > 50000);
        if (expensive != null)
            Console.WriteLine($"First expensive product (>₹50000): {expensive.Name} - ₹{expensive.Price}");
        else
            Console.WriteLine("No expensive product found (>₹50000).");
    }
}
