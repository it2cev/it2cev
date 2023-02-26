# Ambiente Windows

Vamos configurar nosso ambiente de desenvolvimento, instalando ferramentas básicas para iniciarmos no mundo da programação.

## Instalar Chocolatey

Chocolatey é um gerenciador de programas e nos ajudará a instalar os programas de maneira programática, pelo terminal do Windows.

1. Abra o **PowerShell** como administrador  *( clique com o botão direto do mouse no ícone do PowerShell e procure a opção Abrir como Administrador )*
2. Coloque o código abaixo e dê **ENTER**
```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

Rode `choco` no terminal do PowerShell. 
Se aparecer a versão do chocolatey, então houve sucesso. 
Se não aparecer, desligue o PowerShell e abra novamente, como Administrador.


## Instalar as Ferramentas

### Visual Studio Code
```powershell
https://code.visualstudio.com/Download
```
Visual Studio Code é uma interface de desenvolvimento e nos ajudará a escrever nossos programas

### Google Chrome
```powershell
https://www.google.com/intl/pt-BR/chrome/
```
O nosso navegador padrão de desenvolvimento será o Google Chrome, pois ele é um browser moderno e que nos ajudará a desenvolver com ferramentas próprias do navegador. Além disso, o motor que roda JavaScript no Chrome é o praticamente o mesmo motor que usaremos na nossa máquina local.

### NodeJS

É um motor JavaScript capaz de entender e executar nossos códigos escritos na linguagem.


#### INSTALAR

1.  Com o PowerShell aberto como Administrador, rode o código abaixo.

```powershell
cinst vscode googlechrome nodejs-lts -yf
```

Após, feche o PowerShell e procure abrir o Google Chrome e o Visual Studio Code.

Com o Visual Studio Code aberto, aperte CTRL + J para abrir o terminal integrado do Visual Studio. Com o terminal aberto, digite `node -v`. Caso apareça a versão do node ( ex.: `node 12.12.0`), então as instalações foram concluídas com sucesso.

#### Erros Comuns

- Caso haja algum erro na hora da instalação de algum programa, procure desinstalar a ferramenta que deu erro, e instalar novamente. Você pode fazer isso com o comando no PowerShell, por exemplo, se houve erro no google-chrome: `choco uninstall googlechrome -yf`. Se não funcionar você pode tentar desinstalar pelo gerenciador de programas do windows.

- Algumas vezes, pode dar um erro na internet, na hora de baixar certo programa. Por isso, é importante verificar qual programa deu erro, e procurar desinstalar e instalar novamente.

- Você pode baixar cada programa em seu respectivo site ( Procure no google o site do Chrome para baixar e instalar, ou Visual Studio Code para baixar e instalar, ou NodeJS para baixar e instalar.

- Pode ser que o comando `node -v`não funcione, pois, por alguma falha no processo, ele não foi adicionado às variáveis de ambiente. Primeiro, tente reiniciar o Windows. Se não funcionar, tente adicionar manualmente. Abra o PowerShell como Administrador e coloque a essa linha de código. 
```powershell
SET PATH=C:\Program Files\Nodejs;%PATH%
```
<small>Tenha certeza que o Node foi instalado na unidade C, pasta `Program Files`e lá dentro, na pasta `Nodejs`</small>
