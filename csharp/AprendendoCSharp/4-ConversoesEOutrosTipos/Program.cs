﻿using System;
class Programa
{
    static void Main(string[] args)
    {
        double salario = 3000.15;
        Console.WriteLine(salario);

        int salarioInterio = (int)salario;
        Console.WriteLine(salarioInterio);

        // O long é um tipo de variável de 64 bits
        long x = 20000000000000;
        Console.WriteLine(x);

        short y = 1500;
        Console.WriteLine(y);

        float altura = 1.62f;
        Console.WriteLine(altura);

        Console.WriteLine("Tecle enter para fechar ...");
        Console.ReadLine();
    }
}
