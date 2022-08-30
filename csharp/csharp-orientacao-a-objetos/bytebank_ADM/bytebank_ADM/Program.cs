using bytebank_ADM.funcionarios;
using bytebank_ADM.ParceriaComercial;
using bytebank_ADM.SistemaInterno;
using bytebank_ADM.utilitario;

Console.WriteLine("Boas Vindas, ao ByteBank Administração.");

//CalcularBonificacao();
UsarSistema();

 void CalcularBonificacao()
{
    GerenciadorDeBonificacao gerenciador = new GerenciadorDeBonificacao();

    Designer pedro = new Designer("833.22.048-39");
    pedro.Nome = "Pedro";

    Desenvolvedor samya = new Desenvolvedor("457.785.789-45");
    samya.Nome = "Samya";

    Diretor paula = new Diretor("159.753.398-04");
    paula.Nome = "Paula";

    Auxiliar igor = new Auxiliar("981.198.778-53");
    igor.Nome = "Igor";

    GerenteDeContas camila = new GerenteDeContas("326.985.628-89");
    camila.Nome = "Camila";

    gerenciador.Registrar(pedro);
    gerenciador.Registrar(paula);
    gerenciador.Registrar(igor);
    gerenciador.Registrar(camila);
    gerenciador.Registrar(samya);

    Console.WriteLine("Total de bonificação: " + gerenciador.getBonifcacao());
}

void UsarSistema()
{
    SistemaInterno sistemainterno = new SistemaInterno();

    Diretor roberta = new Diretor("159.458.978-75");
    roberta.Nome = "Roberta";
    roberta.Senha = "123";


    GerenteDeContas ursula = new GerenteDeContas("444.458.754-23");
    ursula.Nome = "Ursula";
    ursula.Senha = "321";


    ParceiroComercial joao = new ParceiroComercial();
    joao.Senha = "123";

    sistemainterno.Logar(roberta, "123");
    sistemainterno.Logar(ursula, "321");
    sistemainterno.Logar(joao, "123");
}

Console.ReadKey();