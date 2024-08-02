import Image from "next/image";

type Animal = {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
};

export default async function AnimaisPage() {
  const response = await fetch("https://api.origamid.online/animais");
  const animais = (await response.json()) as Animal[];

  if (animais)
    return (
      <ul>
        {animais.map((animal) => {
          return (
            <li key={animal.id}>
              <p>{animal.nome}</p>
              <Image
                src={animal.imagem}
                width={2400}
                height={1600}
                alt={animal.descricao}
                quality={75}
                sizes="100vw"
              />
            </li>
          );
        })}
      </ul>
    );
}
