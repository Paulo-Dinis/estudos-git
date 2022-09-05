using bytebank_ADM.SistemaInterno;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytebank_ADM.funcionarios
{
    public class Diretor : FuncionarioAutenticavel
    {
        public Diretor(string cpf):base(cpf, 5000)
        {
            Console.WriteLine("Criando Diretor");
        }
        public override double getBonificacao()
        {
            return Salario * 0.15;
        }

        public override void AumentarSalario()
        {
            Salario *= 1.5;
        }
    }
}
