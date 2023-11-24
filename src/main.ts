import { NotaFiscal } from "./model/NotaFiscal";

const notaF1 = new NotaFiscal (`1234567-9876543`);
notaF1.pessoaF.setNome(`Manuela Silva`);
notaF1.pessoaF.setCpf(`2345-2345`);
console.log(`Nome:${notaF1.pessoaF.getNome()}`);
console.log(`CPF: ${notaF1.pessoaF.getCpf()}`);
console.log(`Nota Fiscal nº: ${notaF1.getNotaFiscal()}`);

const notaF2v = new NotaFiscal (`098765434567098`);
notaF2v.pessoaF.setNome(`Silva Manuela`);
notaF2v.pessoaF.setCpf(`234567898760`);
console.log(`Nome: ${notaF2v.pessoaF.getNome()}`);
console.log(`Nota Fiscal nº: ${notaF2v.getNotaFiscal()}`);