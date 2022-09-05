using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytebank_ADM.funcionarios
{
    public class Desenvolvedor : Funcionario 
    {
        public Desenvolvedor(string cpf) : base(cpf, 3000)
        {

        }

        public override void AumentarSalario()
        {
            this.Salario *= 1.5;
        }

        public override double getBonificacao()
        {
            return Salario * 0.1;
        }
    }
}
