using bytebank_ADM.funcionarios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytebank_ADM.SistemaInterno
{
    public interface Autenticavel
    {
        public bool Autenticar(string senha);
    }
}
