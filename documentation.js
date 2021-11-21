//////////////////////////////////////////////////////////////////// TAGS //////////////////////////////////////////////////////////////////////////////

 //////////// FILTROS //////////////
/**
* @swagger
* tags:
*   name: filtros
*   description: filtros disponiveis para selecionar eventos especificos
*/
//////////// BUSCAR ////////////////
/**
* @swagger
* tags:
*   name: buscar
*   description: metodos disponiveis para busca dentro da api
*/
//////////// DETALHES //////////////
/**
* @swagger
* tags:
*   name: Informações detalhadas
*   description: informações detalhadas do objeto escolhido
*/
//////////// CONTA /////////////////
/**
* @swagger
* tags:
*   name: Gerenciar contas
*   description: gerenciamento de contas
*/
//////////// EVENTO ////////////////
/**
* @swagger
* tags:
*   name: Gerenciar eventos
*   description: gerenciar eventos, restaurantes e bares
*/
//////////// FINANCEIRO ////////////
/**
* @swagger
* tags:
*   name: Financeiro
*   description: gerenciamento financeiro
*/
//////////// USUARIO ///////////////
/**
* @swagger
* tags:
*   name: Usuario
*   description: rotas para usuario
*/

//////////////////////////////////////////////////////////////////// ROTAS //////////////////////////////////////////////////////////////////////////////

                          ///////////////////////////////////////// FILTROS /////////////////////////////////////////

//////////// BUSCAR CATEGORIAS  ///////////////////
/**
 * @swagger
 * /app/category:
 *   get:
 *     summary: 'retorna todas as categorias disponiveis'
 *     tags: [filtros]
 *     responses:
 *       200:
 *         description: Lista de categorias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/categoria'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 */

//////////// BUSCAR GENEROS ///////////////////////      
/**
 * @swagger
 * /app/genre:
 *   get:
 *     summary: 'retorna todos os gêneros  da categoria selecionada'
 *     tags: [filtros]
 *     parameters:
 *       - in: query
 *         name : category
 *     responses:
 *       200:
 *         description: Lista de gêneros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/genero'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// BUSCAR CIDADES ///////////////////////
/**
 * @swagger
 * /app/city:
 *   get:
 *     summary: 'retorna todas as cidades disponiveis'
 *     tags: [filtros]
 *     responses:
 *       200:
 *         description: Lista de cidades
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/cidade'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 */

                          ///////////////////////////////////////// BUSCAR /////////////////////////////////////////

//////////// BUSCAR INGRESSOS ////////////////////
/**
 * @swagger
 * /app/tickets:
 *   get:
 *     summary: 'retorna todos os ingressos do evento escolhido'
 *     tags: [buscar]
 *     parameters:
 *       - in: query
 *         name : partyId
 *         description: ID da festa escolhida escolhida
 *     responses:
 *       200:
 *         description: ingressos da festa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ingresso'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// BUSCAR PRODUTOS //////////////////////
/**
 * @swagger
 * /app/products:
 *   get:
 *     summary: 'retorna todos os produtos disponiveis disponiveis'
 *     tags: [buscar]
 *     parameters:
 *       - in: query
 *         name : localId
 *     responses:
 *       200:
 *         description: Lista produtos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/produto'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// BUSCAR TODOS OS EVENTOS //////////////
/**
 * @swagger
 * /app/:
 *   get:
 *     summary: 'retorna todos os eventos'
 *     tags: [buscar]
 *     parameters:
 *       - in: query
 *         name : categoryId
 *         description: ID da categoria escolhida
 *     responses:
 *       200:
 *         description: Lista de eventos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/evento'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// BUSCAR COM FILTROS //////////////////
/**
 * @swagger
 * /app/filter:
 *   get:
 *     summary: 'retorna todos os eventos com os filtros selecionados'
 *     tags: [buscar]
 *     parameters:
 *       - in: query
 *         name : categoryId
 *         description: ID da categoria escolhida
 *       - in: query
 *         name : filter
 *         description: Filtro escolhido, ACCEPTED VALLUES >> "city", "genre" , "cityGenre"
 *       - in: query
 *         name : city
 *         description: nome da cidade escolhida, pode ser passado em branco
*       - in: query
 *         name : genre
 *         description: id do genero escolhido, pode ser passado em branco
 *     responses:
 *       200:
 *         description: Lista de eventos aplicáveis aos filtros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/evento'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// BUSCAR COM NOME /////////////////////
/**
 * @swagger
 * /app/search:
 *   post:
 *     summary: 'retorna todos os eventos compativeis com a busca'
 *     tags: [buscar]
 *     parameters:
 *       - in: query
 *         name : categoryId
 *         description: ID da categoria escolhida
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/busca'
 *     responses:
 *       200:
 *         description: Lista de eventos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/evento'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

                          ///////////////////////////////////////// INFORMAÇÕES DETALHADASS /////////////////////////////////////////

//////////// DETALHES DO EVENTO ///////////////////
/**
 * @swagger
 * /app/event:
 *   get:
 *     summary: 'retorna detalhes do evento escolhido'
 *     tags: [Informações detalhadas]
 *     parameters:
 *       - in: query
 *         name : eventId
 *         description: ID do local escolhido
 *       - in: query
 *         name : categoryId
 *         description: ID da categoria do local escolhido
 *     responses:
 *       200:
 *         description: Detalhes do evento
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/evento'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

                          ///////////////////////////////////////// GERENCIAR EVENTOS /////////////////////////////////////////

//////////// CRIAR EVENTO //////////////////////
/**
 * @swagger
 * /promoter/event:
 *   post:
 *     summary: 'Rota para criação de eventos restaurantes e bares'
 *     description: 'Para criação de restaurantes e bares o type é restaurant, para criação de qualquer outro tipo de evento o type é party'
 *     tags: [Gerenciar eventos]
 *     parameters:
 *       - in: query
 *         name : type
 *         description: Tipo de evento a ser criado ACCEPTED VALLUES >> 'restaurant', 'party'
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/evento'
 *     responses:
 *       200:
 *         description: evento criado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/evento'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// CRIAR INGRESSO ////////////////////
/**
 * @swagger
 * /promoter/ticket:
 *   post:
 *     summary: 'Rota para criação de ingressos para eventos'
 *     description: 'Para colaboradores de restaurantes e bares o type é restaurant, para colaboradores de qualquer outro tipo de evento o type é party'
 *     tags: [Gerenciar eventos]
 *     parameters:
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ingresso'
 *     responses:
 *       200:
 *         description: ingresso criado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ingresso'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// CRIAR PRODUTO  ////////////////////
/**
 * @swagger
 * /promoter/poduct:
 *   post:
 *     summary: 'Rota para criação de produtos para eventos e restaurantes'
 *     description: ''
 *     tags: [Gerenciar eventos]
 *     parameters:
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/produto'
 *     responses:
 *       200:
 *         description: produto criado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/produto'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// VER TRABALHADORES /////////////////////////////
/**
 * @swagger
 * /promoter/work:
 *   get:
 *     summary: 'Rota para ver colaboradores cadastrados'
 *     description: ''
 *     tags: [Gerenciar eventos]
 *     parameters:
 *         - in: query
 *           name: localId
 *           description: Local que deseja ver os trabalhadores
 *     responses:
 *       200:
 *         description: Informações atualizadas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/trabalho'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// STATUS TRABALHADORES EVENTO ///////////////////
/**
 * @swagger
 * /promoter/work:
 *   put:
 *     summary: 'Rota para editar status de colaborador'
 *     description: ''
 *     tags: [Gerenciar eventos]
 *     parameters:
 *       - in: query
 *         name : workId
 *         description: id do trabalho a ser alterado o status
 *       - in: query
 *         name : status
 *         description: status para o qual o trabalho deve ser mudado, ACCEPTED VALUES >> "A", "I", "C"
 *     responses:
 *       200:
 *         description: Informações atualizadas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/trabalho'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

                          ///////////////////////////////////////// GERENCIAR CONTAS /////////////////////////////////////////

//////////// CRIAR CONTA ///////////////////////
/**
 * @swagger
 * /default/signup:
 *   post:
 *     summary: 'Criação de contas'
 *     description: 'O exemplo disponivel nessa rota é para criação de promotores de eventos, em caso de criação de conta de usuario verifique o exemplo na rota /signup/userexemple, ambas as contas são criadas na mesma rota, diferenciando somente os campos nescessarios e o type enviado no query da requisição'
 *     tags: [Gerenciar contas]
 *     parameters:
 *       - in: query
 *         name : type
 *         description: Tipo de conta que está sendo criada ACCEPTED VALUES >> 'user', 'promoter'
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/promotor'
 *     responses:
 *       200:
 *         description: Promotor criado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/promotor, #/components/schemas/ingresso'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// EXEMPLO USER //////////////////////
/**
 * @swagger
 * /default/signup/userexemple:
 *   post:
 *     summary: 'EXEMPLO DE CRIAÇÂO DE USUARIO'
 *     description: 'ESSA ROTA È SOMENTE DE EXEMPLO PARA CRIAÇÂO DE USUARIO, A ROTA PARA ESSE FIM É /default/signup'
 *     tags: [Gerenciar contas]
 *     parameters:
 *       - in: query
 *         name : type
 *         description: Tipo de conta que está sendo criada ACCEPTED VALUES >> 'user', 'promoter'
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/usuario'
 *     responses:
 *       200:
 *         description: Usuario criado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/promotor, #/components/schemas/usuario'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// LOGIN ////////////////////////////
/**
 * @swagger
 * /default/login:
 *   post:
 *     summary: 'Rota para login de usuario e promotor'
 *     description: 'rota usada para login de usuario e promotor'
 *     tags: [Gerenciar contas]
 *     parameters:
 *       - in: query
 *         name : type
 *         description: Tipo de conta que está fazendo login ACCEPTED VALUES >> user, promoter
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/login'
 *     responses:
 *       200:
 *         description: Informações do usuario logado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/usuario'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// MODIFICAR INFO ////////////////////
/**
 * @swagger
 * /default/update:
 *   put:
 *     summary: 'Rota para modificação de informações'
 *     description: 'Essa rota pode ser usada para mudar informações de diversos itens como: usuario, promotor, eventos, ingressos, produtos, restaurantes e bares , qualquer informação pode ser modificada, basta enviar o item em questão no body da requisição com o mesmo formato e nome dos schemas apresentados'
 *     tags: [Gerenciar contas]
 *     parameters:
 *       - in: query
 *         name : type
 *         description: Tipo de schema que esta sendo modificado ACCEPTED VALUES >> user, promoter, party, ticket, product, restaurant, bar
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/atualizar'
 *     responses:
 *       200:
 *         description: Informações atualizadas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/atualizar'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

                          ///////////////////////////////////////// FINANCEIRO /////////////////////////////////////////

//////////// SALDO DA CONTA ////////////////////
/**
 * @swagger
 * /promoter/balance:
 *   get:
 *     summary: 'Rota para verificar saldo da conta'
 *     description: ''
 *     tags: [Financeiro]
 *     parameters:
 *       - in: query
 *         name : promoterId
 *         description: ID do promotor que deseja ver o saldo
 *     responses:
 *       200:
 *         description: saldo da conta
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/saldo'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// EXTRATO ///////////////////////////
/**
 * @swagger
 * /promoter/statement:
 *   get:
 *     summary: 'Rota para verificar extrato completo da conta'
 *     description: ''
 *     tags: [Financeiro]
 *     parameters:
 *       - in: query
 *         name : promoterId
 *         description: ID do promotor que deseja ver o saldo
 *     responses:
 *       200:
 *         description: extrato da conta
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/saldo'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

                          ///////////////////////////////////////// COMPRAS /////////////////////////////////////////////


//////////// GERAR CARRINHO   ////////////////////
/**
 * @swagger
 * /user/wallet:
 *   post:
 *     summary: Rota para criação do carrinho de compras
 *     description: ''
 *     tags: [Compras]
 *     parameters:
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/carrinho'
 *     responses:
 *       200:
 *         description: carrinho de compras
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/carrinho'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// VER FORMAS DE PAGAMENTO   ////////////////////
/**
 * @swagger
 * /user/paymentmethod:
 *   post:
 *     summary: Rota para ver formas de pagamento
 *     description: ''
 *     tags: [Compras]
 *     parameters:
 *         - in: query
 *           name: totalValue
 *           description: valor total da transação
 *         - in: query
 *           name: appValue
 *           description: valor da taxa do aplicativo
 *     responses:
 *       200:
 *         description: formas de pagamento
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/formas de pagamento'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// PAGAR COM PIX   ////////////////////
/**
 * @swagger
 * /user/payment:
 *   post:
 *     summary: Rota para realizar pagamentos
 *     description: 'O exemplo presente nessa rota se refere a pagamento por pix, para pagamento por cartão de credito a vista ou parcelado visitar a aba exemplos'
 *     tags: [Compras]
 *     parameters:
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/compraPix'
 *     responses:
 *       200:
 *         description: Informações do pix para pagamento pix
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/pagamentoPix'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// PAGAR COM CARTAO   ////////////////////
/**
 * @swagger
 * /user/payment/exemple:
 *   post:
 *     summary: Rota para realizar pagamentos
 *     description: 'O exemplo presente nessa rota se refere a pagamento por cartão a visa, a requisição deve ser feita na rota /user/payment'
 *     tags: [exemplo]
 *     parameters:
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/cartão'
 *     responses:
 *       200:
 *         description: informações dos itens comprados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ingresso'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// PAGAR COM CARTAO parcelado   ////////////////////
/**
 * @swagger
 * /user/payment/exemple2:
 *   post:
 *     summary: Rota para realizar pagamentos
 *     description: 'O exemplo presente nessa rota se refere a pagamento por cartão parcelado, a requisição deve ser feita na rota /user/payment'
 *     tags: [exemplo]
 *     parameters:
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/parcelado'
 *     responses:
 *       200:
 *         description: informações dos itens comprados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ingresso'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */



//////////// REGISTRAR PARA TRABALHAR  ////////////////////
/**
 * @swagger
 * /user/work:
 *   post:
 *     summary: 'Rota para se cadastrar para trabalho'
 *     description: ''
 *     tags: [Usuario]
 *     parameters:
 *       - in: query
 *         name : type
 *         description: tipo de emprego que está se registrando ACCEPTED VALUES >> "PARTY", "RESTAURANTE"
 *       - in: query
 *         name : rc
 *         description: código de registro do local desejado
 *       - in: query
 *         name : userId
 *         description: id do usuario que deseja se cadastrar
 *     responses:
 *       200:
 *         description: Informações de trabalho
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/trabalho'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// VER TRABALHOS REGISTRADOS  ////////////////////
/**
 * @swagger
 * /user/work:
 *   get:
 *     summary: 'Rota para se ver trabalhos registrados'
 *     description: ''
 *     tags: [Usuario]
 *     parameters:
 *       - in: query
 *         name : userId
 *         description: id do usuario que deseja ver os trabalhos cadastrados
 *     responses:
 *       200:
 *         description: Informações de trabalhos cadastrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/trabalho'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// ATUALIZAR STATUS DE TRABALHO  /////////////////
/**
 * @swagger
 * /user/work:
 *   put:
 *     summary: 'Rota para atualizar status do trabalho'
 *     description: ''
 *     tags: [Usuario]
 *     parameters:
 *       - in: query
 *         name : workId
 *         description: id do trabalho a ser alterado o status
 *       - in: query
 *         name : status
 *         description: status para o qual o trabalho deve ser mudado, ACCEPTED VALUES >> "A", "I"
 *     responses:
 *       200:
 *         description: Informações do trabalho alterado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/trabalho'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// APAGAR TRABALHO  //////////////////////////////
/**
 * @swagger
 * /user/work:
 *   delete:
 *     summary: 'Rota para apagar trabalho'
 *     description: ''
 *     tags: [Usuario]
 *     parameters:
 *       - in: query
 *         name : workId
 *         description: id do trabalho a ser apagado
 *     responses:
 *       200:
 *         description: Trabalho que foi apagado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/trabalho'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////////////////////////////////////////////////////////////// SCHEMAS //////////////////////////////////////////////////////////////////////////////


                           ///////////////////////////////////////// MODELS /////////////////////////////////////////

//////////// USUARIO //////////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     usuario:
 *        type: object
 *        required:
 *              - country
 *              - name
 *              - email
 *              - password
 *              - cpfCnpj
 *              - mobilePhone
 *        properties:
 *           _id:
 *              type: String
 *              description: ID gerado pelo banco de dados
 *           country:
 *              type: string
 *              description: 'Código telefonico do pais do usuario  '
 *           name:
 *              type: string
 *              description: 'Nome do usuario'
 *           email:
 *              type: string
 *              description: 'email do usuario'
 *           password:
 *              type: string
 *              description: 'Senha do usuario'
 *           cpfCnpj:
 *              type: string
 *              description: 'CPF ou CNPJ  do usuario'
 *           photo:
 *              type: array {location, key}
 *              description: 'Foto do promotor(DETALHES NO EXEMPLO)'
 *           mobileFone:
 *              type: string
 *              description: 'celular do usuario'
 *        example:
 *              _id: 617c51404649003744ba54b8
 *              country: '+55'
 *              name: Nome do usuario
 *              email: email@email.com
 *              password: password
 *              cpfCnpj: 000 000 000 00
 *              photo: {location: https://nightapp.s3.amazonaws.com/user/6195739696b5e580b4263e5c.jpg, key: user/6195739696b5e580b4263e5c.jpg }
 *              mobilePhone: 66 99999999
 */

//////////// INGRESSO /////////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     ingresso:
 *        type: object
 *        properties:
 *           partyId:
 *              type: string
 *              description: 'Nome do Lote de ingressos '
 *           name:
 *              type: string
 *              description: 'Nome do Lote de ingressos '
 *           dataStart:
 *              type: date
 *              description: 'Data de inicio das vendas do lote'
 *           dataEnd:
 *              type: date
 *              description: 'Data de fim das vendas do lote'
 *           token:
 *              type: array [{name, price, qnt}]
 *              description: 'Ingressos do lote (CHEGAR EXEMPLOS PARA DETALHES)'
 *
 *        example:
 *            partyId: 6193b0099d96581c499f1458,
 *            name: primeiro lote,
 *            dataStart: 2021-10-15T00:00:00.000Z
 *            dataEnd: 2021-12-15T00:00:00.000Z
 *            token: [{name: Pista, price: 100, qnt: 200, id: 61940702a06562168110f281 }, {name: Pista2, price: 150, qnt: 100, id: 61940702a06562168110f281 }]
 */

//////////// GENEROS //////////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     genero:
 *       type: object
 *       description: 'Generos são divididos em 2 modelos, generos de festa(genre) e generos de restaurante e bar (restaurantGenre)'
 *       required:
 *         - name
 *       properties:
 *         _id:
 *           type: string
 *           description: Id gerada pelo banco de dados
 *         name:
 *           type: string
 *           description: Nome do genero
 *       example:
 *         _id: 617c51404649003744ba54b8
 *         name: Sertanejo
 *
 */

//////////// RESTAURANTE //////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     restaurante:
 *       type: object
 *       required:
 *         - promoterId
 *         - name
 *         - date
 *         - type
 *       properties:
 *         _id:
 *           type: string
 *           description: Id gerada pelo banco de dados
 *         name:
 *           type: string
 *           description: Nome do evento
 *         status:
 *           type: string
 *           description: status do evento
 *         promoterId:
 *           type: string
 *           description: Id do promotor do evento
 *         photo:
 *           type: array {location, key}
 *           description: 'Foto do promotor(DETALHES NO EXEMPLO)'
 *         openTime:
 *           type: array {days, time}
 *           description: dias da semana de abertura(days), hora de abertura(time)
 *         category:
 *           type: array {name, _id}
 *           description: categoria do evento
 *         genre:
 *           type: array {name, _id}
 *           description: genero do evento
 *         type:
 *           type: string
 *           description: tipo de estabelecimento ACCEPTED VALLUES >> "BAR", "RESTAURANTE"
 *         description:
 *           type: string
 *           description: Descrição do local
 *
 *       example:
 *          category: { _id: 61929c87824159320acef742, name: Show  }
 *          _id: 6193b186011b66700cdafb64
 *          genre: {_id: 61929c87824159320acef742, name: Lounge }
 *          promoterId: 6169d0f20ff4df3148581cc7
 *          promoterName: Taman
 *          artists: Artista x, Artista Y
 *          name: Taman bar
 *          type: BAR
 *          cityName: Lucas do Rio Verde
 *          rc: 9057m
 *          age: 16
 *          googleLink: google.com
 *          photo: {location: https://nightapp.s3.amazonaws.com/user/6195739696b5e580b4263e5c.jpg, key: user/6195739696b5e580b4263e5c.jpg }
 *          status: A
 *          openTime: {days: {0, 1, 2, 3, 5, 6}, time:  19:00:00}
 *          registerDate: 2021-11-16T13:26:30.363Z
 *
 */

//////////// EVENTO ///////////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     evento:
 *       type: object
 *       required:
 *         - promoterId
 *         - name
 *         - date
 *         - age
 *       properties:
 *         _id:
 *           type: string
 *           description: Id gerada pelo banco de dados
 *         name:
 *           type: string
 *           description: Nome do evento
 *         promoterName:
 *           type: number
 *           description: nome do promotor do evento
 *         artists:
 *           type: string
 *           description: Artistas presentes no evento
 *         status:
 *           type: string
 *           description: status do evento
 *         promoterId:
 *           type: string
 *           description: Id do promotor do evento
 *         photo:
 *           type: array {location, key}
 *           description: 'Foto do promotor(DETALHES NO EXEMPLO)'
 *         date:
 *           type: date
 *           description: dia do evento (Em caso de bares e restaurantes o date é substituido por openTime)
 *         category:
 *           type: array {name, _id}
 *           description: categoria do evento
 *         genre:
 *           type: array {name, _id}
 *           description: genero do evento
 *         age:
 *           type: string
 *           description: idade minima para frequentar a festa
 *         description:
 *           type: string
 *           description: Descrição do evento
 *
 *       example:
 *          category: { _id: 61929c87824159320acef742, name: Show  }
 *          _id: 6193b186011b66700cdafb64
 *          genre: {_id: 61929c87824159320acef742, name: Sertanejo }
 *          promoterId: 6169d0f20ff4df3148581cc7
 *          promoterName: Taman
 *          artists: Artista x, Artista Y
 *          name: Taman bar
 *          cityName: Lucas do Rio Verde
 *          rc: 9057m
 *          age: 16
 *          googleLink: google.com
 *          photo: {location: https://nightapp.s3.amazonaws.com/user/6195739696b5e580b4263e5c.jpg, key: user/6195739696b5e580b4263e5c.jpg }
 *          status: A
 *          date: 2021-11-16T13:26:30.363Z
 *          registerDate: 2021-11-16T13:26:30.363Z
 *
 */

//////////// PROMOTOR /////////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     promotor:
 *        type: object
 *        required:
 *              - country
 *              - name
 *              - email
 *              - password
 *              - cpfCnpj
 *              - mobilePhone
 *              - address
 *              - addressNumber
 *              - province
 *              - postalCode
 *              - companyType
 *        properties:
 *           _id:
 *              type: String
 *              description: ID gerado pelo banco de dados
 *           country:
 *              type: string
 *              description: 'Código telefonico do pais do usuario  '
 *           name:
 *              type: string
 *              description: 'Nome do promotor'
 *           email:
 *              type: string
 *              description: 'email do promotor'
 *           password:
 *              type: string
 *              description: 'Senha do promotor'
 *           cpfCnpj:
 *              type: string
 *              description: 'CPF ou CNPJ  do promotor'
 *           photo:
 *              type: array {location, key}
 *              description: 'Foto do promotor(DETALHES NO EXEMPLO)'
 *           phone:
 *              type: string
 *              description: 'Telefone fixo do promotor'
 *           mobileFone:
 *              type: string
 *              description: 'celular do promotor'
 *           address:
 *              type: string
 *              description: 'Logradouro do promotor'
 *           addressNumber:
 *              type: string
 *              description: 'Numero do endereço do promotor'
 *           province:
 *              type: string
 *              description: 'Bairro do promotor'
 *           postalCode:
 *              type: string
 *              description: 'CEP do promotor'
 *           companyType:
 *              type: string
 *              description: 'tipo de CNPJ da conta, ACCEPTE VALUES >> "MEI", "LIMITED", "INDIVIDUAL", "ASSOCIATION" '
 *
 *        example:
 *              _id: 617c51404649003744ba54b8
 *              country: '+55'
 *              name: Nome do promotor
 *              email: email@email.com
 *              password: password
 *              cpfCnpj: 000 000 000 00
 *              photo: {location: https://nightapp.s3.amazonaws.com/user/6195739696b5e580b4263e5c.jpg, key: user/6195739696b5e580b4263e5c.jpg }
 *              phone: 66 35310000,
 *              mobilePhone: 66 99999999
 *              address: Rua x
 *              addressNumber: 3455
 *              province: Jardim Primaveras
 *              companyType: MEI
 *              postalCode: 78550000
 */

//////////// PRODUTO //////////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     produto:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - type
 *         - localId
 *       properties:
 *         _id:
 *           type: string
 *           description: Id gerada pelo banco de dados
 *         name:
 *           type: string
 *           description: Nome do produto
 *         price:
 *           type: number
 *           description: preço do produto
 *         type:
 *           type: string
 *           description: tipo de produto, ACCEPTED VALUES > "FOOD", "DRINK"
 *         status:
 *           type: string
 *           description: status do produto, ACCEPTED VALUES > "A", "I", GERADO NO BACKEND
 *         localId:
 *           type: string
 *           description: Id do local que cadastrou o produto
 *         photo:
 *           type: array {location, key}
 *           description: foto do produto
 *         qnt:
 *           type: number
 *           description: quantidade de produtos disponivel
 *         description:
 *           type: string
 *           description: Descrição do produto
 *       example:
 *             _id: 61940897c4b572e556620a32
 *             localId: 6193b0099d96581c499f1458
 *             name: "combo de bebidas"
 *             price: 350
 *             status: "A"
 *             type: "DRINK"
 *
 */

//////////// CARTÂO de CREDITO ////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     cartão de credito:
 *       type: object
 *       required:
 *       description: 'Todas as informações do schema de cartão de crédito são geradas no backend'
 *       properties:
 *         userId:
 *           type: string
 *           description: Id gerada pelo banco de dados
 *         creditCardNumber:
 *           type: string
 *           description: ultimos digitos do cartão
 *         creditCardBrand:
 *           type: string
 *           description: Bandeira docartão
 *         creditCartToken:
 *           type: string
 *           description: token do cartão para realizar transações
 *
 *         exemple:
 *          userId: 617c51404649003744ba54b8
 *          creditCardNumber: 8543
 *          creditCardBrand: MASTERCARD
 *          creditCartToken: 617c51404649003744ba54b8
 *
 */

//////////// CIDADE ///////////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     cidade:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         _id:
 *           type: string
 *           description: Id gerada pelo banco de dados
 *         name:
 *           type: string
 *           description: Nome da cidade
 *       example:
 *         _id: 617c51404649003744ba54b8
 *         name: Sinop
 *
 */

//////////// CATEGORIAS ///////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     categoria:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         _id:
 *           type: string
 *           description: Id gerada pelo banco de dados
 *         name:
 *           type: string
 *           description: Nome da categoria
 *         photo:
 *           type: string
 *           description: icone da categoria
 *       example:
 *         _id: 617c51404649003744ba54b8
 *         name: Show
 *         photo : photoLink
 *
 */


//////////// TRABALHO /////////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     trabalho:
 *       type: object
 *       required:
 *         - userId
 *         - localId
 *         - localType
 *       properties:
 *         userId:
 *           type: string
 *           description: Id do usuario cadastrado
 *         localId:
 *           type: string
 *           description: tipo de local de trabalho ACCEPTED VALLUES >> "PARTY", "RESTAURANTE"
 *         localType:
 *           type: string
 *           description: icone da categoria
 *       example:
 *         userId: 617c51404649003744ba54b8
 *         localId: 617c51404649003744ba54b8
 *         localType : "PARTY"
 *
 */

//////////// DETALHES DO INGRESSO ////////////////////
/**
 * @swagger
 * /user/ticket:
 *   get:
 *     summary: 'Rota para buscar detalhes do  ingresso escolhido'
 *     description: ''
 *     tags: [Usuario]
 *     parameters:
 *       - in: query
 *         name : id
 *         description: ID do ingresso que deseja ver os detalhes
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ingresso'
 *     responses:
 *       200:
 *         description: Informações atualizadas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ingresso'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// VER PRODUTOS DE UM EVENTO ESPECIFICO ////////////////////
/**
 * @swagger
 * /user/product/event:
 *   get:
 *     summary: 'Rota para buscar produtos do evento escolhido'
 *     description: ''
 *     tags: [Usuario]
 *     parameters:
 *       - in: query
 *         name : id
 *         description: ID do ingresso que deseja ver os detalhes
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/produto'
 *     responses:
 *       200:
 *         description: Informações atualizadas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/produto'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */


//////////// BUSCA ///////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     busca:
 *       type: object
 *       properties:
 *         search:
 *           type: string
 *           description: Texto inserido pelo usuario no mecanismo de busca
 *       example:
 *          search: "TEXTO INSERIDO PELO USUARIO"
 */

//////////// ERRO ///////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     erro404:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: erro recebido do servidor
 *       example:
 *          message: "erro ocorreu por motivo x"
 */
//////////// ERRO ///////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     erro400:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: erro recebido do servidor
 *       example:
 *          message: "erro ocorreu por motivo x"
 */

//////////// CADASTRAR INGRESSO ////////////////////
/**
 * @swagger
 * /user/ticket:
 *   get:
 *     summary: 'Rota para buscar detalhes do  ingresso escolhido'
 *     description: ''
 *     tags: [Usuario]
 *     parameters:
 *       - in: query
 *         name : id
 *         description: ID do ingresso que deseja ver os detalhes
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ingresso'
 *     responses:
 *       200:
 *         description: Informações atualizadas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ingresso'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// CADASTRAR PRODUTO  ////////////////////
/**
 * @swagger
 * /user/ticket:
 *   get:
 *     summary: 'Rota para buscar detalhes do  ingresso escolhido'
 *     description: ''
 *     tags: [Usuario]
 *     parameters:
 *       - in: query
 *         name : id
 *         description: ID do ingresso que deseja ver os detalhes
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ingresso'
 *     responses:
 *       200:
 *         description: Informações atualizadas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ingresso'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// VER CARTÔES DE CREDITO DO USUARIO ////////////////////
/**
 * @swagger
 * /user/ticket:
 *   get:
 *     summary: 'Rota para buscar detalhes do  ingresso escolhido'
 *     description: ''
 *     tags: [Usuario]
 *     parameters:
 *       - in: query
 *         name : id
 *         description: ID do ingresso que deseja ver os detalhes
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ingresso'
 *     responses:
 *       200:
 *         description: Informações atualizadas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ingresso'
 *       404:
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro404'
 *       400:
 *         description: Erro de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/erro400'
 */

//////////// ATUALIZAR ////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     atualizar:
 *        type: object
 *        required:
 *        properties:
 *           _id:
 *              type: String
 *              description: ID do objeto a ser modificado
 *           informação a ser modifica:
 *           type: String
 *        example:
 *              _id: 617c51404649003744ba54b8
 *              password: newpassword
 *              photo: {location: https://nightapp.s3.amazonaws.com/user/6195739696b5e580b4263e5c.jpg, key: user/6195739696b5e580b4263e5c.jpg }
 *              mobilePhone: 66 888888888
 */

//////////// TRABALHO ////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     trabalho:
 *        type: object
 *        required:
 *        properties:
 *           userId:
 *              type: String
 *              description: ID do colaborador
*           partyId:
 *              type: String
 *              description: ID do local que ele trabalha
*           status:
 *              type: String
 *              description: status da relação ACCEPTED VALUES >> A, I, (VALOR GERADO NO BACKEND DURANTE A CRIAÇÃO)
 *        example:
 *              userID: 617c51404649003744ba54b8
 *              partyId: 617c51404649003744ba54b8
 *              status: A
 */

//////////// SALDO ////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     saldo:
 *        type: object
 *        required:
 *        properties:
 *           totalBalance:
 *              type: number
 *              description: saldo do promotor
 *        example:
 *              totalBalance: 1300.32
 */

//////////// LOGIN ////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     login:
 *        type: object
 *        required:
 *            - email
 *            - password
 *        properties:
 *           email:
 *              type: string
 *              description: email para logar
 *           password:
 *              type: string
 *              description: senha para logar
 *        example:
 *              email: email@email.com
 *              password: password
 */


//////////// CARRINHO /////////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     carrinho:
 *        type: object
 *        properties:
 *           ticktId:
 *              type: string
 *              description: ID do lote de ingressos
 *           tokenId:
 *              type: string
 *              description: ID do ingresso escolhido
 *           ticketQnt:
 *              type: number
 *              description: Qantidade de ingressos desejada
 *           product:
 *              type: array [{id, qnt}, {id, qnt} ]
 *              description: Produtos escolhidos
 *
 *        example:
 *            ticketId: 6193b0099d96581c499f1458,
 *            tokenId: 6193b0099d96581c499f1458,
 *            ticketQnt: 3
 *            token: [{id: 6193b0099d96581c499f1458, qnt: 2  }, {id: 6193b0099d96581c499f1458, qnt: 2  }, {id: 6193b0099d96581c499f1458, qnt: 2  } ]
 *            walletValue: 1320
 *            appValue: 198
 *            totalValue: 1518
 */


//////////// FORMAS DE PAGAMENTO /////////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     formas de pagamento:
 *        type: object
 *        properties:
 *           installment:
 *              type: array [{numInstallment, value, message}, {numInstallment, value, message}]
 *              description: informações para vendas parceladas
 *           pix:
 *              type: array [{ value, message}]
 *              description: informações para venda pix
 *        example:
 *            installment: [{numInstallment: 1 , value: 200, message: "Sem juros"}, {numInstallment: 2 , value: 100, message: "Sem juros"} , {numInstallment: 3 , value: 66.67, message: "Sem juros"}]
 *            pix: {value: 198.5, message: '5% off na taxa do aplicativo para compras no pix' }
 */

//////////// RESPOSTA PIX  //////////////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     pagamentoPix:
 *        type: object
 *        properties:
 *           qrCode:
 *              type: string
 *              description: base64 do qrCode de pagamento para pix
 *           pixCode:
 *              type: string
 *              description: código copia e cola para pagamento do pix
 *        example:
 *            qrCode: base64CODE
 *            pixCode: 00020101021226820014br.gov.bcb.pix2560qrpix-h.bradesco.com.br/9d36b84f-c70b-478f-b95c-12729b90ca2552040000530398654071310.105802BR5905ASAAS6009JOINVILLE62070503***63049917
 */

//////////// PAGAMENTO PIX /////////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     compraPix:
 *        type: object
 *        properties:
 *           wallet:
 *              type: array
 *              description: Objeto enviado na requisição de criação de carrinho
 *           payment:
 *              type: array { userId, billingType, value}
 *              description: informações de pagamento
 *        example:
 *            wallet: {tickets: {"ticketId": 6197fde169288f14f65e852a, qnt: 4, tokenId: 6197fde169288f14f65e852a, price: 500 } , products: [ {productId: 6197fe5d69288f14f65e853d, qnt: 4, price: 100}, {productId: 6197fe5d69288f14f65e853d, qnt: 4, price: 100}, { productId: 6197fe5d69288f14f65e853d , qnt: 4, price: 100}]}
 *            payment: {userId: 6197fde169288f14f65e852a, billingType: PIX, value: 550 }
 */

//////////// PAGAMENTO CARTÃO /////////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     cartão:
 *        type: object
 *        properties:
 *           wallet:
 *              type: array
 *              description: Objeto enviado na requisição de criação de carrinho
 *           payment:
 *              type: array { userId, billingType, value, creditCard, creditCardHolderInfo}
 *              description: informações de pagamento
 *        example:
 *            wallet: {tickets: {"ticketId": 6197fde169288f14f65e852a, qnt: 4, tokenId: 6197fde169288f14f65e852a, price: 500 } , products: [ {productId: 6197fe5d69288f14f65e853d, qnt: 4, price: 100}, {productId: 6197fe5d69288f14f65e853d, qnt: 4, price: 100}, { productId: 6197fe5d69288f14f65e853d , qnt: 4, price: 100}]}
 *            payment: {userId: 6197fde169288f14f65e852a , billingType: CREDIT_CARD  , value: 550, creditCard: { sholderName: Gabriel , number: 5167 5544 0278 0104, expiryMonth: 09, expiryYear: 23, ccv: 402}, "creditCardHolderInfo": {name: Gabriel, 			"cpfCnpj":"98955409060",
			"postalCode":"78550000",
			"addressNumber":"3827",
			"address":"Rua x",
			"state": "SC",
			"city":"Sinop",
			"phone":"66 999999999"
		}  }
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     parcelado:
 *        type: object
 *        properties:
 *           wallet:
 *              type: array
 *              description: Objeto enviado na requisição de criação de carrinho
 *           payment:
 *              type: array { userId, billingType, creditCard, creditCardHolderInfo, installmentCount, installmentValue}
 *              description: informações de pagamento
 *        example:
 *            wallet: {tickets: {"ticketId": 6197fde169288f14f65e852a, qnt: 4, tokenId: 6197fde169288f14f65e852a, price: 500 } , products: [ {productId: 6197fe5d69288f14f65e853d, qnt: 4, price: 100}, {productId: 6197fe5d69288f14f65e853d, qnt: 4, price: 100}, { productId: 6197fe5d69288f14f65e853d , qnt: 4, price: 100}]}
 *            payment: {userId: 6197fde169288f14f65e852a , billingType: CREDIT_CARD , installmentCount: 3, installmentValue: 50, creditCard: { sholderName: Gabriel , number: 5167 5544 0278 0104, expiryMonth: 09, expiryYear: 23, ccv: 402}, "creditCardHolderInfo": {name: Gabriel, 			"cpfCnpj":"98955409060",
			"postalCode":"78550000",
			"addressNumber":"3827",
			"address":"Rua x",
			"state": "SC",
			"city":"Sinop",
			"phone":"66 999999999"
		}  }
 */