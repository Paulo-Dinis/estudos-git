using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytebank_ADM.funcionarios
{
    public abstract class Funcionario
    {
        //private int _tipo;

        public string Nome { get; set; }
        public string Cpf { get; private set; }
        public double Salario { get; protected set; }
        public static int TotalFuncionarios { get; private set; }
        public string Senha { get; set; }

        public Funcionario(string cpf, double salario)
        {
            Console.WriteLine("Criando Funcionario");
            this.Cpf = cpf;
            this.Salario = salario;

            TotalFuncionarios++;
        }

        public abstract double getBonificacao();

        public abstract void AumentarSalario();

        public bool Autenticar(string senha)
        {
            return this.Senha == senha;
        }
    }
}
