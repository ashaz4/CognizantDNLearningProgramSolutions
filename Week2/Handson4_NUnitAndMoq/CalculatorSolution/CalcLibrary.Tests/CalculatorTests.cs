using CalcLibrary;
using NUnit.Framework;
using System;

namespace CalcLibrary.Tests
{
    [TestFixture]
    public class CalculatorTests
    {
        private SimpleCalculator _calculator;

        [SetUp]
        public void Setup()
        {
            _calculator = new SimpleCalculator();
        }

        [TearDown]
        public void Cleanup()
        {
            _calculator.AllClear();
        }

        [Test]
        [TestCase(5.0, 7.0, 12.0)]
        [TestCase(-2.5, 3.5, 1.0)]
        [TestCase(0.0, 0.0, 0.0)]
        public void Addition_ValidInputs_ReturnsSum(double a, double b, double expected)
        {
            double result = _calculator.Addition(a, b);
            Assert.That(result, Is.EqualTo(expected).Within(0.0001));
        }
        // Subtraction tests
[Test]
[TestCase(10.0, 3.0, 7.0)]
[TestCase(5.5, 2.5, 3.0)]
public void Subtraction_ValidInputs_ReturnsDifference(double a, double b, double expected)
{
    double result = _calculator.Subtraction(a, b);
    Assert.That(result, Is.EqualTo(expected).Within(0.0001));
}

// Multiplication tests
[Test]
[TestCase(3.0, 4.0, 12.0)]
[TestCase(2.5, 4.0, 10.0)]
public void Multiplication_ValidInputs_ReturnsProduct(double a, double b, double expected)
{
    double result = _calculator.Multiplication(a, b);
    Assert.That(result, Is.EqualTo(expected).Within(0.0001));
}

// Division tests
[Test]
[TestCase(10.0, 2.0, 5.0)]
[TestCase(9.0, 3.0, 3.0)]
public void Division_ValidInputs_ReturnsQuotient(double a, double b, double expected)
{
    double result = _calculator.Division(a, b);
    Assert.That(result, Is.EqualTo(expected).Within(0.0001));
}

// Division by zero test
[Test]
public void Division_ByZero_ThrowsArgumentException()
{
    Assert.Throws<ArgumentException>(() => _calculator.Division(5.0, 0.0));
}

// AllClear test
[Test]
public void AllClear_ResetsResultToZero()
{
    _calculator.Addition(5.0, 3.0);
    _calculator.AllClear();
    Assert.That(_calculator.GetResult, Is.EqualTo(0.0));
}

    }
}
