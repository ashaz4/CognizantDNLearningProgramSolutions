using System;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
using Confluent.Kafka;

namespace KafkaChatClient
{
    public partial class Form1 : Form
    {
        private CancellationTokenSource cts;

        public Form1()
        {
            InitializeComponent();
            this.Load += Form1_Load;
            this.FormClosing += Form1_FormClosing;
            btnSend.Click += btnSend_Click;
        }

        private async void btnSend_Click(object sender, EventArgs e)
        {
            var config = new ProducerConfig { BootstrapServers = "localhost:9092" };
            using var producer = new ProducerBuilder<Null, string>(config).Build();

            var username = "You";
            var messageText = txtMessage.Text.Trim();
            if (!string.IsNullOrWhiteSpace(messageText))
            {
                var formattedMessage = $"[{username}][{DateTime.Now:HH:mm}]: {messageText}";
                await producer.ProduceAsync(
                    "chat-messages",
                    new Message<Null, string> { Value = formattedMessage }
                );
                txtMessage.Clear();
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            cts = new CancellationTokenSource();
            Task.Run(() => StartConsumer(cts.Token));
        }

        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            cts?.Cancel();
        }

        private void StartConsumer(CancellationToken token)
        {
            var config = new ConsumerConfig
            {
                GroupId = "windows-chat-consumer",
                BootstrapServers = "localhost:9092",
                AutoOffsetReset = AutoOffsetReset.Earliest
            };

            using var consumer = new ConsumerBuilder<Null, string>(config).Build();
            consumer.Subscribe("chat-messages");

            while (!token.IsCancellationRequested)
            {
                try
                {
                    var cr = consumer.Consume(token);
                    Invoke((Action)(() =>
                    {
                        lstMessages.Items.Add(cr.Message.Value);
                    }));
                }
                catch (OperationCanceledException)
                {
                    break;
                }
                catch (Exception)
                {
                    // Optionally handle/log error
                }
            }
        }
    }
}
