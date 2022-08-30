using System;
class Programa
{
    static void Main(string[] args)
    {
        Console.WriteLine("Executando projeto 11 - Caucula poupança");

        double investimento = 1000;

        for (int mes = 1; mes <= 12; mes ++)
        {
            investimento *= 1.005;
            Console.WriteLine("No mês " + mes + " Você tem " + investimento);
        }


        Console.WriteLine("Tecle enter para fechar ...");
        Console.ReadLine();
    }
}
