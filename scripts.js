var massa = [45,52,65,82,58,105,106,78,98,68,56,63,94,67,78,73,95,84,67,83,82,61,85,82,73]
var distincao = ['40 |-- 55','55 |-- 70','70 |-- 85','85 |-- 100','100 --|']


// criacao das variaveis de f(frequencia) e p(porcentagem)
var f1 = 0;
var f2 = 0;
var f3 = 0;
var f4 = 0;
var f5 = 0;
var p1 = 0;
var p2 = 0;
var p3 = 0;
var p4 = 0;
var p5 = 0;


// Faz a contagem das massas(pesos) e a porcentagem em relação ao total
for (var i = 0; i <= massa.length; i++){
	if (massa[i] < 55) {
		f1 += 1;
		p1 = ( f1 / massa.length ) * 100;
	}
	else if (massa[i] >= 55 && massa[i] < 70) {
		f2 += 1;
		p2 = ( f2 / massa.length ) * 100;
	}
	else if (massa[i] >= 70 && massa[i] < 85) {
		f3 += 1;
		p3 = ( f3 / massa.length ) * 100;
	}
	else if (massa[i] >= 85 && massa[i] < 100) {
		f4 += 1;
		p4 = ( f4 / massa.length ) * 100;
	}
	else if (massa[i] >= 100) {
		f5 += 1;
		p5 = ( f5 / massa.length ) * 100;
	}
}


// Atribuição de valores concatenados as variaveis para serem usadas como porcentagem
 pc1 = p1+'%';
 pc2 = p2+'%';
 pc3 = p3+'%';
 pc4 = p4+'%';
 pc5 = p5+'%';



// Atribuições de valores das frequancias nas barras
document.getElementById('f1').innerHTML = f1;
document.getElementById('f2').innerHTML = f2;
document.getElementById('f3').innerHTML = f3;
document.getElementById('f4').innerHTML = f4;
document.getElementById('f5').innerHTML = f5;


// Atribuições dos valores de porcentagens nas barras
document.getElementById('p1').innerHTML = pc1;
document.getElementById('p2').innerHTML = pc2;
document.getElementById('p3').innerHTML = pc3;
document.getElementById('p4').innerHTML = pc4;
document.getElementById('p5').innerHTML = pc5;


// Definição do tamanho das barras. Recebem as variaveis concatenadas p %
document.getElementById('b1').style.height = pc1;
document.getElementById('b2').style.height = pc2;
document.getElementById('b3').style.height = pc3;
document.getElementById('b4').style.height = pc4;
document.getElementById('b5').style.height = pc5;



// Posicionamento dos valores em relação às barras. Recebem as variaveis concatenadas p %
document.getElementById('f1').style.bottom = pc1;
document.getElementById('f2').style.bottom = pc2;
document.getElementById('f3').style.bottom = pc3;
document.getElementById('f4').style.bottom = pc4;
document.getElementById('f5').style.bottom = pc5;


// Criação da tabela de distribuição de frequencia
fs = [f1,f2,f3,f4,f5]
ps = [p1,p2,p3,p4,p5]


// Captação dos ids das colunas das tabelas
var pesos = document.querySelector('#massa');
var f = document.querySelector('#f');
var fr = document.querySelector('#fr');
var fa = document.querySelector('#fa');
var fra = document.querySelector('#fra');





// Variaveis que irão enviar os dados para as tabela de frequencia no HTML
var massas = '';
var f1 = '';
var pf = '';
var faa = '';
var fraa = '';


// Somadores e arrays de Fa e Fra
sumf = 0;
sumfr = 0;
sf = []
sfr = []


for( var x = 0 ; x < distincao.length; x++){
	massas += distincao[x] + '<br>';
	f1 += fs[x] + '<br>';
	pf += ps[x] + '<br>';

	sumf = sumf + fs[x]
	sf.push(sumf)

	sumfr = sumfr + ps[x]
	sfr.push(sumfr)
}

for(var y = 0; y < distincao.length; y++){
	faa += sf[y] + '<br>';
	fraa += sfr[y] + '<br>'
}


pesos.innerHTML = massas;
f.innerHTML = f1;
fr.innerHTML = pf;
fa.innerHTML = faa;
fra.innerHTML = fraa;


// Inserir texto na tag p ao clicar no botao de saiba mais

function saibaMais(elemento){
	document.getElementById('texto').innerHTML = 'Dados coletados para a analise de massa( peso ) de 50 pessoas, <br>'+
	'Esses dados estão separados por uma  distribuição de frequencia com classe. <br>'+
	'Dados superiores informam a quantidade de pessoas entre esta faixa de peso e os dados inferiores '+
	'informam a porcentagem(%) em relação ao total.';
	document.getElementById('fechar').style.opacity = "0.9";
}

function fechar(elemento){
	document.getElementById('texto').innerHTML = '';
	document.getElementById('fechar').style.opacity = '0';
}



// Altrar cor de fundo do grafico, clicando no menu de opções

function Wheat(elemento){
	document.getElementById('grafics').style.backgroundColor = '#F5DEB3';
}
function LightPink(elemento){
	document.getElementById('grafics').style.backgroundColor = '#FFB6C1';
}
function LightCoral(elemento){
	document.getElementById('grafics').style.backgroundColor = '#F08080';
}
function Salmon(elemento){
	document.getElementById('grafics').style.backgroundColor = '#FA8072';
}
function White(elemento){
	document.getElementById('grafics').style.backgroundColor = 'white';
}
function Black(elemento){
	document.getElementById('grafics').style.backgroundColor = '#000000';
}
function Original(elemento){
	document.getElementById('grafics').style.backgroundColor = '#F1EADC';
}


// Alterar as cores das fontes
function Teal(elemento){
	for (var fs = 0; fs < 5; fs++){
	var cf = 'f' + (fs + 1);
	document.getElementById(cf).style.color = '#008080'
	}	
}
function Dark(elemento){
	for (var fs = 0; fs < 5; fs++){
	var cf = 'f' + (fs + 1);
	document.getElementById(cf).style.color = '	#000000'
	}	
}
function DarkSeaGreen(elemento){
	for (var fs = 0; fs < 5; fs++){
	var cf = 'f' + (fs + 1);
	document.getElementById(cf).style.color = '	#8FBC8F'
	}	
}
function Snow(elemento){
	for (var fs = 0; fs < 5; fs++){
	var cf = 'f' + (fs + 1);
	document.getElementById(cf).style.color = '#FFFAFA'
	}	
}


// Alterar as cores das barras

function Preto(elemento){
	for (var bs = 0; bs < 5; bs++){
	var bf = 'b' + (bs + 1);
	document.getElementById(bf).style.backgroundColor = 'black'
	}	
}
function Branco(elemento){
	for (var bs = 0; bs < 5; bs++){
	var bf = 'b' + (bs + 1);
	document.getElementById(bf).style.backgroundColor = 'white'
	}	
}
function Tomato(elemento){
	for (var bs = 0; bs < 5; bs++){
	var bf = 'b' + (bs + 1);
	document.getElementById(bf).style.backgroundColor = 'tomato'
	}	
}
function Azul(elemento){
	for (var bs = 0; bs < 5; bs++){
	var bf = 'b' + (bs + 1);
	document.getElementById(bf).style.backgroundColor = '#0080FF'
	}	
}
function MediumTurquoise(elemento){
	for (var bs = 0; bs < 5; bs++){
	var bf = 'b' + (bs + 1);
	document.getElementById(bf).style.backgroundColor = '#48D1CC'
	}	
}


// Controlar intensidade das linhas dos graficos

function Alta(elemento){
	document.getElementById('grafics').style.backgroundImage = "url('img/line1.png')";
}
function Media(elemento){
	document.getElementById('grafics').style.backgroundImage = "url('img/line2.png')";
}
function Nenhuma(elemento){
	document.getElementById('grafics').style.backgroundImage = "url('')";
}
