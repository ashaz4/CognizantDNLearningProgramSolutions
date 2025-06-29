using System;
public interface IDocument
{
    void Open();
    void Save();
}
public class WordDocument : IDocument
{
    public void Open() => Console.WriteLine("Opening Word document");
    public void Save() => Console.WriteLine("Saving Word document");
}
public class PdfDocument : IDocument
{
    public void Open() => Console.WriteLine("Opening PDF document");
    public void Save() => Console.WriteLine("Saving PDF document");
}
public abstract class DocumentFactory
{
    public abstract IDocument CreateDocument();
}
public class WordDocumentFactory : DocumentFactory
{
    public override IDocument CreateDocument() => new WordDocument();
}
public class PdfDocumentFactory : DocumentFactory
{
    public override IDocument CreateDocument()=>new PdfDocument();
}
class Program
{
    static void Main()
    {
        DocumentFactory wordFactory=new WordDocumentFactory();
        DocumentFactory pdfFactory=new PdfDocumentFactory();
        IDocument wordDoc=wordFactory.CreateDocument();
        IDocument pdfDoc=pdfFactory.CreateDocument();
        wordDoc.Open();
        wordDoc.Save();
        pdfDoc.Open();
        pdfDoc.Save();
    }
}