# api-bancaria
Endpointes:

/createAccount - preenche dados em uma tabela postgres

/signIn - Faz a authenticação e gera e retorna um jwt caso esse dado exista na tabela

/dep - Deposita dinheiro e retorna um codigo de deposito "depxxxx" aleatorio (só authenticados podem fazer)

/transf - Transfere dinheiro de uma conta para outra com base na chave do outro (só authenticados podem fazer)

/profile - retorna os dados do perfil althenticado (só authenticados podem fazer)

Não conseguir fazer um PHP pois não tenho experiência, mas passei o sabado estudando php para ver se conseguia, e achei até interessante, mas não achei que seria capaz de fazer uma api em um framework php em pouco tempo, então fiz em node msm, mas irei estudar mais php.


Interface em React: https://github.com/Faguim02/interface-bancaria

Obrigado desde já.
