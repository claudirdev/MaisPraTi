const ContaBancaria = require('./contaBancaria')

describe('Testes da classe ContaBancaria', () => {
    let conta;
    beforeEach(() => {
        conta = new ContaBancaria()
    })

    test('Saldo inicial deve ser 0', () => {
        expect(conta.consultarSaldo()).toBe(0);
    })

    test('Depositar 100 deve resultar em saldo 100', () => {
        conta.depositar(100);
        expect(conta.consultarSaldo()).toBe(100);
    })

    test('Depositar valor negativo deve lançar erro', () => {
        expect(() => conta.depositar(-10)).toThrow('O valor depositado deve ser maior que zero');        
    });
    
    test('Depositar valor zero deve lançar erro', () => {
        expect(() => conta.depositar(0)).toThrow('O valor depositado deve ser maior que zero');        
    });

    test('Saque maior que o saldo deve lançar erro', () => {
        conta.depositar(30);
        expect(() => conta.sacar(50)).toThrow('Saldo insuficiente');
    });

    test('Saque com valor zero deve lançar erro', () => {
        expect(() => conta.sacar(0)).toThrow('O valor sacado deve ser maior que zero');
    });

    test('Saque com valor negativo deve lançar erro', () => {
        expect(() => conta.sacar(-10)).toThrow('O valor sacado deve ser maior que zero');
    });

})

