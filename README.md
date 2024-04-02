# Documentação
## Aluna: Tami Uemura - 2525348

**Padrões de Projeto Utilizados:**

**Decorator:** 
- **Justificativa:** O padrão de projeto Decorator foi escolhido para a classe 'GerenciadorContatos' porque permite adicionar funcionalidades adicionais (como log de operações, validações extras, etc.) sem modificar o código existente da classe. Isso torna o código mais flexível e fácil de estender no futuro, pois as novas funcionalidades podem ser adicionadas de forma modular, mantendo a classe base inalterada. Como o sistema de gerenciamento de contatos pode precisar de novos recursos no futuro, como auditoria de operações ou controle de acesso, o padrão Decorator se encaixa perfeitamente para garantir a extensibilidade do sistema.

**Strategy:**
- **Justificativa**: O padrão de projeto Strategy foi escolhido para implementar a funcionalidade de busca de contatos porque permite encapsular algoritmos de busca diferentes em classes separadas, tornando-os intercambiáveis. Isso é útil quando há diferentes critérios de busca possíveis (por exemplo, busca por nome, telefone, email) e queremos que o cliente possa escolher o critério de busca dinamicamente. Além disso, o padrão Strategy facilita a adição de novos algoritmos de busca no futuro, garantindo que a classe 'GerenciadorContatos' não precise ser modificada para acomodar essas mudanças, o que promove o princípio de abertura/fechamento (open/closed principle) do SOLID.


**Observações Adicionais:**
-   Para a implementação do padrão Decorator, optou-se por não incluir funcionalidades adicionais neste exemplo por simplicidade. No entanto, a estrutura está preparada para a adição de decoradores conforme necessário no futuro.
-   Para a implementação do padrão Strategy, foram fornecidos exemplos simples de estratégias de busca por nome, telefone e email. No entanto, a estrutura permite a adição de novas estratégias de busca conforme necessário, mantendo a classe 'GerenciadorContatos' desacoplada das implementações específicas de busca.


