#App

# RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas até 10km;
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

# RNs (Regra de negócios)

- [x] O Usuário nao deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário nao pode fazer 2 check-ins no mesmo dia;
- [x] O usuário nao pode fazer check-ins se nao estiver perto(100mt) da academia;
- [x] O check-in so pode ser validado até 20min após criado;
- [ ] O check-in só pode ser validade por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

# RNFs (Requisitos não funcionais)

- [x] A senha so usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um BD PostgreSQL;
- [x] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (Jason Web Token)
