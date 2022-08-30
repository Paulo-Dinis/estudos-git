using bytebank;
using bytebank.Titular;

Console.WriteLine("Boas vindas ao seu banco, ByteBank!");

//ContaCorrente conta1 = new ContaCorrente();
//conta1.titular = "João Malaco";
//conta1.conta = "10123-x";
//conta1.numero_agencia = 1;
//conta1.nome_agencia = "Agência Central";
//conta1.saldo = 100;

//ContaCorrente conta2 = new ContaCorrente();
//conta2.titular = "Paulo Dinis";
//conta2.conta = "10123-x";
//conta2.numero_agencia = 1;
//conta2.nome_agencia = "Agência Central";
//conta2.saldo = 100;

//Cliente cliente = new Cliente();
//cliente.nome = "Paulo Dinis";
//cliente.cpf = "4448799565";
//cliente.profissao = "Programador C#";

//ContaCorrente conta3 = new ContaCorrente();
//conta3.titular = new Cliente();
//conta3.titular.nome = "Paulo Dinis";
//conta3.titular.profissao = "Programador C#";
//conta3.titular.cpf = "44456878951";
//conta3.conta = "254565-x"; 
//conta3.numero_agencia = 35;
//conta3.nome_agencia = "Agencia blabla";


//Console.WriteLine(conta3.titular.nome);


Cliente sarah = new Cliente();

ContaCorrente conta5 = new ContaCorrente(235, "15654-x");
ContaCorrente conta6 = new ContaCorrente(365, "95428-x");

Console.WriteLine(ContaCorrente.TotalDeContasCriada);

Console.ReadKey();