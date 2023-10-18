export abstract class Bebe {

    private id: string;
    private nome: string;
    private peso: number;
    private altura: number;

    public constructor(
        _id: string,
        _nome: string,
        _peso: number,
        _altura: number,
        ){

            this.id = _id;
            this.nome = _nome;
            this.peso = _peso;
            this.altura = _altura;
        }

            public getId(): string{ 
                return this.id;
            }

            public setId(_id: string): void{ 
                this.id = _id;
            }

             public getNome(): string{ 
                return this.nome;
            }

            public setNome(_nome: string): void{ 
                this.nome = _nome;
            }

            public getPeso(): number{ 
                return this.peso;
            }

            public setPeso(_peso: number): void{ 
                this.peso = _peso;
            }

            public getAltura(): number{ 
                return this.altura;
            }

            public setAltura(_altura: number): void{ 
                this.altura = _altura;
            }
}
