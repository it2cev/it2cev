
# Ambiente Mac

Vamos configurar nosso ambiente de desenvolvimento, instalando ferramentas básicas para iniciarmos no mundo da programação.

## Instalar as Ferramentas

### Homebrew

Homebrew é um gerenciador de pacotes que nos ajudará a instalar os programas de maneira programática, pelo terminal do Mac.

1. Use o atalho CMD + Espaço, para abrir o spotlight e procure por `terminal`
2. Abra o terminal cole a linha abaixo.

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Teste se a instalação foi concluida com sucesso digitando o seguinte código do terminal

```bash
brew
```

### Visual Studio Code

Visual Studio Code é uma interface de desenvolvimento e nos ajudará a escrever nossos programas

### Google Chrome

O nosso navegador padrão de desenvolvimento será o Google Chrome, pois ele é um browser moderno e que nos ajudará a desenvolver com ferramentas próprias do navegador. Além disso, o motor que roda JavaScript no Chrome é o praticamente o mesmo motor que usaremos na nossa máquina local.

### NodeJS

É um motor JavaScript capaz de entender e executar nossos códigos escritos na linguagem.


#### INSTALAR

1.  Com o terminal aberto, rode as seguintes linhas de comando: (Uma por vez ok?)

```bash
brew cask install visual-studio-code
brew cask install google-chrome
```

Abra o Visual Studio Code aberto, aperte CMD + J para abrir o terminal integrado do Visual Studio. Com esse terminal aberto, digite  o seguinte código
```bash
brew install node@12
```

Após a instalação, digite `node -v`. Caso apareça a versão do node ( exemplo.: `node 12.12.0`), então as instalações foram concluídas com sucesso.

## ERROS COMUNS

Identificado por **@Bernardo Sertório#7696** 

Caso você receba a seguinte mensagem: `“Visual Studio Code” não pode ser aberto porque a Apple não pôde verificar a presença de software malicioso. Este software precisa ser atualizado. Entre em contato com o desenvolvedor para obter mais informações.`

Solução por **@Fernando Graciano#7057**

`abre as configurações do mac e vai na aba de segurança
depois vai na primeira aba "general" e lá em baixo vai ter uma requisição de permissão para abrir o VSCode`