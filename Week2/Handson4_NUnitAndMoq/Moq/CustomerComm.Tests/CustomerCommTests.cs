using NUnit.Framework;
using Moq;
using CustomerCommLib;

namespace CustomerCommTests
{
    [TestFixture]
    public class CustomerCommTests
    {
        private Mock<IMailSender> _mailSenderMock;
        private CustomerComm _customerComm;

        [SetUp]
        public void Setup()
        {
            _mailSenderMock = new Mock<IMailSender>();
            _customerComm = new CustomerComm(_mailSenderMock.Object);
        }

        [Test]
        public void SendMailToCustomer_WhenCalled_ReturnsTrue()
        {
            // Arrange
            _mailSenderMock
                .Setup(m => m.SendMail(It.IsAny<string>(), It.IsAny<string>()))
                .Returns(true);

            // Act
            bool result = _customerComm.SendMailToCustomer();

            // Assert: Use NUnit 4 constraint model
            Assert.That(result, Is.True);  // Fixed assertion
        }
    }
}