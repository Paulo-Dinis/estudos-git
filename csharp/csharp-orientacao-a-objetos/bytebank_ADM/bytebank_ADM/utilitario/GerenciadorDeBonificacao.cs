using bytebank_ADM.funcionarios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytebank_ADM.utilitario
{
    public class GerenciadorDeBonificacao
    {
        private double totalBonificacao { get; set; }

        public void Registrar(Funcionario funcionario)
        {
            this.totalBonificacao += funcionario.getBonificacao();
        }
        
        public double getBonifcacao()
        {
            return this.totalBonificacao;
        }
    }
}
