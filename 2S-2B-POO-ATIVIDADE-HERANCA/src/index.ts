import { PessoaFisica } from "./model/PessoaFisica";
import { PessoaJuridica } from "./model/PessoaJuridica";

const a1 = new PessoaFisica (`Maria`,`68768787979798`);
a1.setNome(`Julia`);
a1.setCpf(`79797979544678`);
console.log(`Nome: ${a1.getNome()}, CPF: ${a1.getCpf()}`);

const a2 = new PessoaJuridica (`Lucian`,`83638387747484894`);
a1.setNome(`Lara`);
a1.setCpf(`973974875595858`);
console.log(`Nome: ${a2.getNome()}, CPF: ${a2.getCnpj()}`);

