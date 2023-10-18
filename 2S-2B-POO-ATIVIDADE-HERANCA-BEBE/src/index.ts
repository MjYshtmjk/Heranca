import { BebeNormal } from "./model/BebeNormal";
import { BebePrematuro } from "./model/BebePrematuro";
import { BebeNatimorto } from "./model/BebeNatimorto";


const a1 = new BebeNormal (`Castiel`,`68768787979798`, 1300, 70, true);
a1.setId(`Crowley`);
a1.setNome(`63937r7484848`);
a1.setPeso(1890);
a1.setAltura(20);

console.log(`Nome: ${a1.getNome()}, ID: ${a1.getId()}`);
console.log(`Peso: ${a1.getPeso()}`);
console.log(`Altura: ${a1.getAltura()}`);
console.log(`Vacinado: ${a1.getVacinado()}`);

const a2 = new BebePrematuro (`83638387747484894`, `Sam`, 2800, 60,`9` );
a2.setId(`972793272797766`);
a2.setNome(`Winchester`);
a2.setPeso(1345);
a2.setAltura(90);
console.log(`Nome: ${a2.getNome()}, ID: ${a2.getId()}`);
console.log(`Peso: ${a2.getPeso()}`);
console.log(`Altura: ${a2.getAltura()}`);
console.log(`Semanas de gestação: ${a2.getSemanasGestacao()}`);

const a3 = new BebeNatimorto (`83638387747484894`, `Sammy`, 1680, 25, `Problema na placenta da mãe`);
a3.setId(`3826647834874754`);
a3.setNome(`Winchester`);
a3.setPeso(2378);
a3.setAltura(40);
console.log(`Nome: ${a3.getNome()}, ID: ${a3.getId()}`);
console.log(`Peso: ${a3.getPeso()}`);
console.log(`Altura: ${a3.getAltura()}`);
console.log(`Causa da morte: ${a3.getCausa()}`);