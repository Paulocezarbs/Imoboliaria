import {Casa} from "../classes/Casa.js";
import {Terreno} from "../classes/Terreno.js";
import {Apartamento} from "../classes/Apartamento.js";
import { corretor1, corretor2, corretor3, corretor4, corretor5, corretor6, corretor7, corretor8, corretor9, corretor10} from "./corretores.js";

//CASAS
const casa1 = new Casa (345000, 340, corretor1, "R. São Jorge, 5", "Antônio Ferreira Borges", "Cariacica", "ES", "29773-074", "casa001.jpg", 145, 1);
const casa2 = new Casa (155000, 80, corretor3, "R. Castro Alves, 237", "Jardin Limoeiro", "Serra", "ES", "29164-077", "casa003.jpg", 20, 1);
const casa3 = new Casa (95000, 40, corretor5, "R. Padre Nobrega, 572", "Bauneario Carapebus", "Serra", "ES", "22164-127", "casa005.jpg", 30, 1);
const casa4 = new Casa (1000000, 300, corretor2, "R. Piracanjuba, 1", "Praião", "Big Fundo", "ES", "29143-000", "casa007.jpg", 80, 6);
const casa5 = new Casa (1500000, 250, corretor2, "R. Das Azaleias, 22", "Distrito das Mansões", "Santa Teresa", "ES", "24157-000", "casa002.jpg", 60, 3);
const casa6 = new Casa (45000, 50, corretor5, "R. Sete de Setembro, 4", "Centro", "Vitória", "ES", "29133-021", "casa002.jpg", 10, 1);
const casa7 = new Casa (550000, 140, corretor1, "Av. Constantino Dias, 321", "Itaparica", "Vila Velha", "ES", "29221-177", "casa012.jpg", 55, 2);
const casa8 = new Casa (240000, 120, corretor3, "R. Praia da Gaivota, 9", "Coabe4", "Aracruz", "ES", "29100-117", "casa019.jpg", 40, 2);
const casa9 = new Casa (705000, 200, corretor4, "R. Almirante Barbosa, 2", "Santana", "Cariacica", "ES", "29124-072", "casa022.jpg", 80, 3);
const casa10 = new Casa (688000, 180, corretor4, "R. Pedro Nolasco, 13", "Jardim Camburi", "Vitória", "ES", "12345-888", "casa014.jpg", 100, 2);

//TERRENOS
const terreno1 = new Terreno (150000, 50, corretor9, "Três Barras", "Santo Antônio", "Fundão", "ES", "29185-000", "terreno001.jpg", 3, 1);
const terreno2 = new Terreno (30000,  30, corretor6, "Santo Antônio" ,"Av. Jerônimo Sirtoli", "Santa Teresa", "ES", "29125-120", "terreno005.jpg", 2, 0);
const terreno3 = new Terreno (1500000, 70, corretor9, "Santa Marta", "Ibirapuera", "Jacaraipe", "SP", "40750-213", "terreno022.jpg", 1, 0);
const terreno4 = new Terreno (2920500, 100, corretor8, "Beira Rio", "Ipanema", "Rio de Janeiro", "RJ", "58407-465", "terreno011.jpg", 0, 1);
const terreno5 = new Terreno (350000, 130, corretor7, "Piranema", "Centro", "Vitória", "MG", "65637-572", "terreno015.jpg", 1, 0);
const terreno6 = new Terreno (195000, 152, corretor9, "Coqueiral", "Nazaré" , "São Roque", "PR", "59114-077", "terreno020.jpg", 0, 1);
const terreno7 = new Terreno (980000, 400, corretor10, "Osséias", "Vila Velha", "Uberaba", "MG", "29325-122", "terreno012.jpg", 4, 0);
const terreno8 = new Terreno (480000, 100, corretor6, "Azaleia", "Vila da Saúde", "Rio de Janeiro", "RJ", "88340-368", "terreno017.jpg", 4, 1);
const terreno9 = new Terreno (899000, 250, corretor5, "Freire", "Vila Pavão", "São Paulo", "SP", "89252-172", "terreno025.jpg", 2, 0);
const terreno10 = new Terreno (120000, 200, corretor10, "Santo Cardoso","Cidade Nova", "Vila Velha", "PA", "68903-127", "terreno004.jpg", 30, 1);

//APARTAMENTOS
const apartamento1 = new Apartamento (900000, 127, corretor7, "Mata Atlântica, 12", "Boullevard", "Vitoria", "ES", "01000-000", "apartamento030.jpg", 2);
const apartamento2 = new Apartamento (150000, 100, corretor1, "Mata do Suá, 25", "Praia da Costa", "Vila Velha", "ES", "01100-000", "apartamento040.jpg", 5);
const apartamento3 = new Apartamento (190000, 132, corretor6, "Timbui, 22", "Vitoria", "Jacaraipe", "RJ", "01200-000", "apartamento005.jpg", 2);
const apartamento4 = new Apartamento (100000, 79, corretor10, "Vila Nova, 4", "Vila Velha", "Boa Vista", "MS", "01300-000", "apartamento002.jpg", 7);
const apartamento5 = new Apartamento (690000, 171, corretor9, "Uberaba, 78", "Vila d'água", "Alegre", "MG", "01400-000", "apartamento033.jpg", 20);
const apartamento6 = new Apartamento (1000000, 210, corretor2, "Ipanema, 67", "ibirapuera", "Rio de Janeiro", "RJ", "01500-000", "apartamento012.jpg", 23);
const apartamento7 = new Apartamento (999000, 200, corretor5, "Mata da Praia, 78", "Centro", "Niteroi", "RS", "02000-000", "apartamento001.jpg", 21);
const apartamento8 = new Apartamento (225000, 150, corretor6, "Vila Pavão, 4", "Interior", "Três Barras", "RJ", "02400-000", "apartamento032.jpg", 4);
const apartamento9 = new Apartamento (122500, 72, corretor8, "Joinville, 21", "Centro", "Teofilo Otoni", "SP", "02600-000", "apartamento021.jpg", 5);
const apartamento10 = new Apartamento (1500000, 312, corretor8, "Praia Grande, 4", "Costeiro", "São Paulo", "SP", "02700-000", "apartamento012.jpg", 1);

export const vetImoveis = [
    casa1, casa2, casa3, casa4, casa5, casa6, casa7, casa8, casa9, casa10,

    //terreno1, terreno2, terreno3, terreno4, terreno5, terreno6, terreno7, terreno8, terreno9, terreno10,

    apartamento1, apartamento2, apartamento3, apartamento4, apartamento5, apartamento6, apartamento7, apartamento8, apartamento9, apartamento10
]
