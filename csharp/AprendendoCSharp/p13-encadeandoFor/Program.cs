using System;
class Programa
{
    static void Main(string[] args)
    {
        Console.WriteLine("Executando o projeto 13 - Encadeando For");

        //Com Break
        for(int contadorLinhas = 0; contadorLinhas < 10; contadorLinhas++)
        {
            for(int contadorColuna = 0; contadorColuna < 10; contadorColuna++)
            {
                Console.Write("*");
                if (contadorColuna >= contadorLinhas)
                    break;
            }
            Console.WriteLine();
        }


        //Sem Break
        for (int contadorLinhas = 0; contadorLinhas < 10; contadorLinhas++)
        {
            for (int contadorColuna = 0; contadorColuna <= contadorLinhas; contadorColuna++)
            {
                Console.Write("*");
            }
            Console.WriteLine();
        }

        Console.WriteLine("Tecle enter para fechar ...");
        Console.ReadLine();
    }
}
