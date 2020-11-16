// Dica: para os exercícios abaixo, use arquivos maiores que 10mb, ou a leitura
// será realizada em menos de 1 milissegundo, o que tira toda a graça. 😄
// Exercício 1 : Utilizando apenas funções síncronas, crie um script que
// leia dois arquivos e:
// Escreva, no terminal, para cada arquivo, qual foi o tempo necessário para
// lê-lo do disco;
// Escreva, no terminal, para cada arquivo, seu tamanho em bytes;
// Escreva, no terminal, ao final do processo, qual o tempo total necessário
// para a execução completa do script.

const fs = require('fs');

const startScriptTime = Date.now();

const startFile1Time = Date.now();
const file1 = fs.readFileSync('teste.txt');
const endFile1Time = Date.now();

const startFile2Time = Date.now();
const file2 = fs.readFileSync('teste2.txt');
const endFile2Time = Date.now();

const totalFile1Time = endFile1Time - startFile1Time;
const totalFile2Time = endFile2Time - startFile2Time;

console.log(`O primeiro arquivo foi carregado em ${totalFile1Time} ms e possui ${file1.byteLength} bytes`);
console.log(`O segundo arquivo foi carregado em ${totalFile2Time} ms e possui ${file2.byteLength} bytes`);
// const stats1 = fs.statSync('teste.txt');
// console.log(`O primeiro arquivo foi carregado e possui ${file1.byteLength} bytes`);
// const stats2 = fs.statSync('teste.txt');
// console.log(`O segundo arquivo foi carregado e possui ${stats2.size} bytes`);
const endScriptTime = Date.now();
const totalScriptTime = endScriptTime - startScriptTime;


console.log(`A execução do script levou um tempo total de: ${totalScriptTime} ms`);

//  https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options

// fs.readFileSync
