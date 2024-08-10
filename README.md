# Agrinho_2024
Link GitHub Pages: [Agrinho_2024](https://jaovit.github.io/Agrinho_2024/)  
#agrinho #agrinho_2024

O site oferece uma experiência interativa e customizável, projetada para facilitar a navegação e adaptação às preferências dos usuários.

## Funcionalidades do Menu

No menu principal, você encontrará várias opções de configuração:

- **Ajustes de Exibição:** Personalize o tamanho da fonte, das imagens e o espaçamento das letras. Há uma configuração geral que controla tanto a fonte quanto as imagens.
- **Temas:** Alterne as cores dos elementos do site, com temas pré-definidos, incluindo opções neutras e escuras.
- **Otimização:** Limite certas funções do site para melhorar o desempenho. Um botão para resetar todas as configurações também está disponível.

## Funcionalidades do Cabeçalho

No cabeçalho (visível em resoluções acima de 500px; em resoluções menores, os formulários são movidos para o menu), há três formulários importantes:

- **Formulário de Contato:** Permite enviar mensagens ao responsável pelo site. **Observação:** Este formulário é apenas ilustrativo e não envia mensagens reais.
- **Formulário de Compartilhamento:** Facilita o envio do link do site para diversas plataformas, permite o uso do compartilhamento nativo do dispositivo e copiar o link diretamente para a área de transferência.
- **Formulário de Login:** Oferece opções de acesso local e via Google (modo de teste) com as seguintes credenciais:
  - agrinho.loginTeste01@gmail.com | #agrinhoLoginTeste01#
  - agrinho.loginTeste02@gmail.com | #agrinhoLoginTeste02#
  - agrinho.loginTeste03@gmail.com | #agrinhoLoginTeste03#

As informações de login são armazenadas no `localStorage` e podem ser visualizadas e gerenciadas no formulário de perfil, que substitui o formulário de login. No perfil, é possível realizar logout, adicionar fotos de perfil e templates, além de ajustar outras informações.

- **Clima Local:** No canto superior esquerdo do cabeçalho, há um campo para inserir o CEP e acessar informações climáticas locais via API.

## Seção de Tópicos

A seção de tópicos exibe cards que direcionam para diferentes partes do site. Esses cards podem ser movimentados pelas setas nas bordas da seção ou por uma animação automática que os move a cada 7,5 segundos.

## Acessibilidade

No canto inferior esquerdo, há um menu de áudio que narra o conteúdo do site, melhorando a acessibilidade.

## Exemplos de Projetos

Na seção "Exemplos de Projetos", um iframe do Arduino IDE exibe um código desenvolvido para o projeto destacado na seção.

## Rodapé

No rodapé, estão disponíveis links e iframes que oferecem acesso a informações adicionais.

## Desenvolvimento e Design

O desenvolvimento do site levou cerca de dois meses e envolveu um trabalho detalhado e cuidadoso. As fotos usadas foram tiradas pessoalmente ou doadas por pessoas próximas, proporcionando um conteúdo visual autêntico e personalizado. Todos os textos foram criados com o objetivo de refletir a identidade e o propósito do site.

Para garantir que o site oferecesse uma boa experiência em diferentes dispositivos, foram usadas técnicas de design como `display: flex` e unidades de medida `vw`. Essas abordagens ajudaram a tornar o layout adaptável e responsivo a vários tamanhos de tela.

## Implementação e Código

Um dos recursos principais foi a implementação de um sistema de login, facilitado pela integração com uma API do Google. Utilizando JavaScript, JWT (JSON Web Tokens), JSON e `localStorage`, foi possível criar e gerenciar perfis de usuário de forma segura e eficiente. O código do site foi organizado em múltiplos arquivos para facilitar a programação e a manutenção.

No menu, foram criadas variáveis CSS com `:root` para armazenar valores dos inputs e aplicar estilos de forma consistente aos elementos. Além disso, uma API de clima foi integrada para fornecer informações meteorológicas atualizadas, e um iframe da IDE Arduino foi adicionado para facilitar o acesso aos recursos do projeto.

O site também conta com uma seção de otimizações que utiliza JavaScript para melhorar as animações e a interatividade. A otimização do CSS foi feita atribuindo classes específicas, como a classe `texto`, para gerenciar os estilos de diferentes elementos de forma mais eficiente.
